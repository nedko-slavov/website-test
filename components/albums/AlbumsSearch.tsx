import { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { ALBUM_SEARCH } from '../../graphql/queries';
import { AutoComplete } from '../inputsFields';
import StickyContainer from '../StickyContainer';
import { Row, Column, Container } from '../grid';
import { AlbumSearch, UseSearchReturn, SearchData, SearchVars } from '../../types';
import { useTheme } from '../../providers/ThemeProvider';

type AlbumSearchResults = { id: string; title: string }[] | [];

type UseSearch = {
  value: string;
  onCompleted: (albums: AlbumSearchResults) => void;
};

const useSearch = ({ value, onCompleted }: UseSearch): UseSearchReturn => {
  const { loading } = useQuery<SearchData, SearchVars>(ALBUM_SEARCH, {
    variables: { options: { search: { q: value } } },
    onCompleted(data) {
      if (data) {
        onCompleted(data.albums.data);
      }
    },
  });

  return {
    loading,
  };
};

const AlbumsSearch: FC<AlbumSearch> = ({ onAlbumSelect }) => {
  const [results, setResults] = useState<AlbumSearchResults>([]);
  const [q, setQ] = useState('');

  const {
    theme: { current },
  } = useTheme();

  const { loading } = useSearch({
    value: q,
    onCompleted: (albums) => {
      if (!loading) setResults(albums);

      if (!q) setResults([]);
    },
  });

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
