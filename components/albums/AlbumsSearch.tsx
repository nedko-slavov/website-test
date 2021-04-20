import { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ALBUM_SEARCH } from '../../graphql/queries';
import { AutoComplete } from '../ui';

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

const AlbumsSearch: FC = () => {
  const [results, setResults] = useState([]);
  const [q, setQ] = useState('');

  const { data } = useSearch(q);

  useEffect(() => {
    if (data && q) setResults(data.albums.data);

    if (!q) setResults([]);
  }, [data, q]);

  const handleChange = (value: string): void => {
    setQ(value);
  };

  return <AutoComplete value={q} results={results} onChange={handleChange} />;
};

export default AlbumsSearch;
