import { useQuery, DocumentNode, OperationVariables } from '@apollo/client';

type UseApolloQueryReturn<TData, TVariables> = {
  data: TData | undefined;
  loading: boolean;
  fetchMore: (options: TVariables) => void;
};

function useApolloQuery<TData, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: TVariables
): UseApolloQueryReturn<TData, TVariables> {
  const { data, loading, fetchMore } = useQuery<TData, TVariables>(query, options);

  return {
    data,
    loading,
    fetchMore,
  };
}

export default useApolloQuery;
