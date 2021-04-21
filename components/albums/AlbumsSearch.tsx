import { FC, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { ALBUM_SEARCH } from '../../graphql/queries';
import { AutoComplete } from '../ui';
import StickyContainer from '../StickyContainer';
import { Row, Column, Container } from '../ui/grid';

type SearchData = {
  [key: string]: { data: [] };
};

type UseSearch = {
  loading: boolean;
  data?: SearchData;
};

type SearchVars = {
  options: { search: { q: string } };
};

const useSearch = (value: string): UseSearch => {
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

type AlbumSearch = {
  onAlbumSelect: (id: string) => void;
};

const AlbumsSearch: FC<AlbumSearch> = ({ onAlbumSelect }) => {
  const [results, setResults] = useState([]);
  const [q, setQ] = useState('');

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
    <StickyContainer className="albums-search">
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
