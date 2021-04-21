import { useCallback, FC, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../../ui';

interface SearchListResult {
  id: string;
  title: string;
}

type AutoComplete = {
  results: SearchListResult[];
  loading?: boolean;
  onChange: (e: string) => void;
  onSelect: (id: string) => void;
};

const AutoComplete: FC<AutoComplete> = ({ results, onChange, loading, onSelect }) => {
  const [listVisibility, setListVisibility] = useState(false);
  const [focusIndex, updateFocusIndex] = useState(-1);
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listItemsIDs: string[] = [];

  const hideAutoSuggest = (): void => {
    if (results.length > 0) setListVisibility(true);

    updateFocusIndex(-1);
  };

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );

  const handleFocus = (): void => {
    hideAutoSuggest();
  };

  const resetInputValue = (): void => {
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleItemClick = useCallback(
    (id: string): void => {
      onSelect(id);
      resetInputValue();
    },
    [onSelect]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        autocompleteRef.current &&
        e.target instanceof Node &&
        !autocompleteRef.current?.contains(e.target)
      ) {
        setListVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [autocompleteRef, onChange]);

  useEffect(() => {
    if (results.length > 0) setListVisibility(true);
  }, [results]);

  const handleNavigation = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case 'Escape':
        updateFocusIndex(-1);
        setListVisibility(false);
        break;
      case 'Enter':
        if (focusIndex !== -1) {
          onSelect(listItemsIDs[focusIndex]);
          resetInputValue();
        }

        setListVisibility(false);
        break;
      case 'ArrowUp':
        if (focusIndex > -1) {
          updateFocusIndex(focusIndex - 1);
        }
        break;
      case 'ArrowDown':
        if (focusIndex < results.length - 1) {
          updateFocusIndex(focusIndex + 1);
        }
        break;
    }
  };

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="search"
        onKeyUp={handleSearch}
        onKeyDown={handleNavigation}
        onFocus={handleFocus}
      />

      {listVisibility && (
        <div className="results-list">
          {results.map((item: SearchListResult, index) => (
            <div
              ref={() => listItemsIDs.push(item.id)}
              className={`item ${focusIndex === index ? 'active' : ''}`}
              key={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}

      {loading && <Loader />}
    </div>
  );
};

AutoComplete.propTypes = {
  results: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default AutoComplete;
