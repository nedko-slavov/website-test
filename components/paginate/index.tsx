import { FC, ElementType } from 'react';
import PropTypes from 'prop-types';
import usePagination from './usePagination';
import PaginateNavigation from './PaginateNavigation';

interface PaginationProps {
  data: [];
  pageSize: number;
  Component: ElementType;
}

const Pagination: FC<PaginationProps> = ({ data, pageSize, Component }) => {
  const { pageData, totalPages, pagesNumbers, currentPage, dispatch } = usePagination({
    data,
    pageSize,
  });

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
    <>
      {pageData.map((props, idx) => (
        <Component key={idx} {...props} />
      ))}

      <PaginateNavigation
        currentPage={currentPage}
        pagesNumbers={pagesNumbers}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleGoToPage={handleGoToPage}
      />
    </>
  );
};

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  Component: PropTypes.func.isRequired,
};

export default Pagination;
