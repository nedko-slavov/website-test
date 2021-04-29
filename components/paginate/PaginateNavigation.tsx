import { FC } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

type PaginateNavigationProps = {
  currentPage: number;
  pagesNumbers: number[];
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleGoToPage: (pageNumber: number) => void;
};

const PaginateNavigation: FC<PaginateNavigationProps> = ({
  currentPage,
  pagesNumbers,
  totalPages,
  handlePrevPage,
  handleNextPage,
  handleGoToPage,
}) => {
  return (
    <>
      {!(currentPage === 1) && (
        <Button kind="primary" onClick={handlePrevPage}>
          Previous
        </Button>
      )}

      {pagesNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => handleGoToPage(pageNumber)}
          kind={pageNumber === currentPage ? 'warning' : 'secondary'}
        >
          {pageNumber}
        </Button>
      ))}

      {currentPage < totalPages && (
        <Button kind="primary" onClick={handleNextPage}>
          Next
        </Button>
      )}
    </>
  );
};

PaginateNavigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesNumbers: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handleGoToPage: PropTypes.func.isRequired,
};

export default PaginateNavigation;
