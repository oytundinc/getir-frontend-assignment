import styled from "styled-components";

const PaginationStyled = styled.div``;

interface PaginationProps {
  pageNumber?: number;
}

export const Pagination = ({ pageNumber = 1 }: PaginationProps) => {
  return (
    <PaginationStyled>
      <div className="pagination-button-wrapper">
        <button className="pagination-button">
          <img src="chevron-left.svg" alt="" />
        </button>

        <span className="pagination-page-info">{pageNumber}</span>

        <button className="pagination-button">Next</button>
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
