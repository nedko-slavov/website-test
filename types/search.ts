export type SearchData = {
  [key: string]: { data: [] };
};

export type UseSearchReturn = {
  loading: boolean;
  data?: SearchData;
};

export type SearchVars = {
  variables: {
    options: {
      search: {
        q: string;
      };
    };
  };
  onCompleted: (data: SearchData) => void;
};
