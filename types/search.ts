export type SearchData = {
  [key: string]: { data: [] };
};

export type UseSearchReturn = {
  loading: boolean;
  data?: SearchData;
};

export type SearchVars = {
  options: { search: { q: string } };
};
