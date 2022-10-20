import React from "react";
import { Pages, Pagination } from "./styled";

export default function FooterPagination({ pagination, setPagination }) {
  const maxPage = 500;
  const isNotMobile = window.innerWidth > 600;
  return (
    <Pagination>
      {pagination - 2 > 0 && (
        <>
          {isNotMobile && (
            <>
              <Pages onClick={() => setPagination(pagination - 2)}>
                {pagination - 2}
              </Pages>
            </>
          )}
        </>
      )}
      {pagination - 1 > 0 && (
        <Pages onClick={() => setPagination(pagination - 1)}>
          {`${pagination - 1}`}
        </Pages>
      )}
      <Pages current={true}>{pagination}</Pages>
      {pagination + 1 <= maxPage && (
        <Pages onClick={() => setPagination(pagination + 1)}>
          {`${pagination + 1}`}
        </Pages>
      )}
      {pagination + 3 <= maxPage && (
        <>
          {isNotMobile && (
            <>
              <Pages onClick={() => setPagination(pagination + 2)}>
                {pagination + 2}
              </Pages>
            </>
          )}
          {<Pages onClick={() => setPagination(pagination + 3)}>{">"}</Pages>}
          <Pages onClick={() => setPagination(maxPage)}>Última</Pages>
        </>
      )}
    </Pagination>
  );
}
