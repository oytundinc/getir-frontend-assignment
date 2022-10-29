import { useCallback } from "react";
import { PaginationPageStyled } from "./pagination.styles";

export type PaginationOptions = {
  handleChange: (selectedPage: number) => void;
  options?: PaginationProps;
};

export interface PaginationProps {
  total: number;
  totalPages: number;
  selectedPage: number;
  limit: number;
}

export const PaginationPage = ({
  options,
  handleChange,
}: PaginationOptions) => {
  const onChange = useCallback(
    (page: number) => {
      handleChange(page);
    },
    [handleChange]
  );
  return (
    <PaginationPageStyled
      total={options?.total}
      pageSize={options?.limit}
      onChange={onChange}
      data-pagination={options?.selectedPage === 1 ? "active" : ""}
    />
  );
};

export default PaginationPage;
