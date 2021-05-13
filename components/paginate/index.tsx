import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePagination } from '../../hooks';
import PaginateNavigation from './PaginateNavigation';

type PaginationProps<T> = {
  data: T[];
  pageSize: number;
  onPageChange: (pageData: T[]) => void;
};

function Pagination<T>({ data, pageSize, onPageChange }: PaginationProps<T>): JSX.Element {
  const { pageData, totalPages, pagesNumbers, currentPage, dispatch } = usePagination<T>({
    data,
    pageSize,
  });

  useEffect(() => {
    onPageChange(pageData);
  }, [onPageChange, pageData]);

  const handlePrevPage = (): void => {
    dispatch({
      type: 'PREV_PAGE',
    });
  };

  const handleNextPage = (): void => {
    dispatch({
      type: 'NEXT_PAGE',
    });
  };

  const handleGoToPage = (pageNumber: number): void => {
    dispatch({
      type: 'GO_TO_PAGE',
      payload: pageNumber,
    });
  };

  return (
    <PaginateNavigation
      currentPage={currentPage}
      pagesNumbers={pagesNumbers}
      totalPages={totalPages}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handleGoToPage={handleGoToPage}
    />
  );
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
