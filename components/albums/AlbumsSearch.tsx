import { FC, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { ALBUM_SEARCH } from '../../graphql/queries';
import { AutoComplete } from '../inputsFields';
import StickyContainer from '../StickyContainer';
import { Row, Column, Container } from '../grid';
import { AlbumSearch, UseSearchReturn, SearchData, SearchVars } from '../../types';
import { useTheme } from '../../providers/ThemeProvider';

const useSearch = (value: string): UseSearchReturn => {
  const { loading, data } = useQuery<SearchData, SearchVars>(ALBUM_SEARCH, {
    variables: { options: { search: { q: value } } },
  });

  if (value.length > 2) {
    return {
      loading,
      data,
    };
  }

  return {
    loading,
  };
};

const AlbumsSearch: FC<AlbumSearch> = ({ onAlbumSelect }) => {
  const [results, setResults] = useState([]);
  const [q, setQ] = useState('');

  const {
    theme: { current },
  } = useTheme();

  const { data, loading } = useSearch(q);

  useEffect(() => {
    if (data && q) setResults(data.albums.data);

    if (!q) setResults([]);
  }, [data, q]);

  const handleChange = (value: string): void => {
    setQ(value);
  };

  const handleSelect = (id: string): void => {
    onAlbumSelect(id);
    setResults([]);
  };

  return (
    <StickyContainer className={`albums-search theme-${current}`}>
      <Container>
        <Row>
          <Column colWidth="5">
            <AutoComplete
              results={results}
              onChange={handleChange}
              loading={loading}
              onSelect={handleSelect}
            />
          </Column>
        </Row>
      </Container>
    </StickyContainer>
  );
};

AlbumsSearch.propTypes = {
  onAlbumSelect: PropTypes.func.isRequired,
};

export default AlbumsSearch;
