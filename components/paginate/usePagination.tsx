import { useReducer, Dispatch } from 'react';

type InitialPage = { currentPage: number };
const initialPage: InitialPage = { currentPage: 1 };

interface Paginate<T> {
  pageSize: number;
  pageNumber: number;
  data: T;
}

type PaginateReturn<T> = {
  pageData: T[];
  totalPages: number;
  pagesNumbers: number[];
};

const paginate = ({ data, pageSize, pageNumber }: Paginate<[]>): PaginateReturn<[]> => {
  const pageData = data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  const totalPages = data.length / pageSize;
  const pagesNumbers = Array.from({ length: totalPages }, (value, index) => index + 1);

  return {
    pageData,
    totalPages,
    pagesNumbers,
  };
};

type Paginate_Action_Type =
  | { type: 'NEXT_PAGE' }
  | { type: 'PREV_PAGE' }
  | { type: 'GO_TO_PAGE'; payload: number };

const paginateReducer = (state: InitialPage, action: Paginate_Action_Type): InitialPage => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return { currentPage: state.currentPage + 1 };
    case 'PREV_PAGE':
      return { currentPage: state.currentPage - 1 };
    case 'GO_TO_PAGE':
      return { currentPage: action.payload };
    default:
      return state;
  }
};

type UsePagination = {
  data: [];
  pageSize: number;
};

type UsePaginationReturn<T> = {
  pageData: T[];
  totalPages: number;
  pagesNumbers: number[];
  dispatch: Dispatch<Paginate_Action_Type>;
  currentPage: number;
};

const usePagination = ({ data, pageSize }: UsePagination): UsePaginationReturn<[]> => {
  const [state, dispatch] = useReducer(paginateReducer, initialPage);
  const { currentPage } = state;

  const { pageData, totalPages, pagesNumbers } = paginate({
    data,
    pageSize,
    pageNumber: currentPage,
  });

  return {
    pageData,
    totalPages,
    pagesNumbers,
    dispatch,
    currentPage,
  };
};

export default usePagination;
