import { useMemo } from "react";
import { usePagination, useTable } from "react-table";

import MOCK_DATA from "../../data/MOCK_DATA.json";

import { COLUMNS } from "./columns";

import "../table.css";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  /**
   * Data from mockaroo.com
   */
  const data = useMemo(() => MOCK_DATA, []);

  const {
    canNextPage,
    canPreviousPage,
    getTableBodyProps,
    getTableProps,
    gotoPage,
    headerGroups,
    nextPage,
    page,
    pageCount,
    pageOptions,
    prepareRow,
    previousPage,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const handleGoToPage = ({ target }) => {
    const pageNumber = target.value ? Number(target.value) - 1 : 0;

    gotoPage(pageNumber);
  };

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div class="pagination">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            className="goToPageInput"
            defaultValue={pageIndex + 1}
            onChange={handleGoToPage}
            type="number"
          />
        </span>
        <select
          className="pageSize"
          onChange={({ target }) => setPageSize(Number(target.value))}
          value={pageSize}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
          {"<<"}
        </button>
        <button disabled={!canPreviousPage} onClick={() => previousPage()}>
          Previous
        </button>
        <button disabled={!canNextPage} onClick={() => nextPage()}>
          Next
        </button>
        <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>
          {">>"}
        </button>
      </div>
    </>
  );
};
