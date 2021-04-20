import { useCallback, FC, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface SearchListResult {
  id: string;
  title: string;
}

type AutoComplete = {
  results: SearchListResult[];
  onChange: (e: string) => void;
};

const AutoComplete: FC<AutoComplete> = ({ results, onChange }) => {
  const [listVisibility, setListVisibility] = useState(false);
  const [focusIndex, updateFocusIndex] = useState(-1);
  const autocompleteRef = useRef<HTMLDivElement>(null);

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
      case 'Enter':
        if (focusIndex !== -1) {
          console.log('enter');
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
        type="text"
        placeholder="search"
        onKeyUp={handleSearch}
        onKeyDown={handleNavigation}
        onFocus={handleFocus}
      />
      {listVisibility && (
        <div className="results-list">
          {results.map((item: SearchListResult, index) => (
            <div className={`item ${focusIndex === index ? 'active' : null}`} key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

AutoComplete.propTypes = {
  results: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AutoComplete;
