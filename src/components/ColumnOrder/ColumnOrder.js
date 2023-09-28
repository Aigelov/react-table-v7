import { useMemo } from "react";
import { useColumnOrder, useTable } from "react-table";

import MOCK_DATA from "../../data/MOCK_DATA.json";

import { COLUMNS } from "./columns";

import "../table.css";

export const ColumnOrder = () => {
  const columns = useMemo(() => COLUMNS, []);
  /**
   * Data from mockaroo.com
   */
  const data = useMemo(() => MOCK_DATA, []);

  const {
    footerGroups,
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const changeOrder = () => {
    setColumnOrder([
      "id",
      "firstName",
      "lastName",
      "phone",
      "country",
      "dateOfBirth",
    ]);
  };

  return (
    <>
      <button onClick={changeOrder} style={{ marginBottom: "12px" }}>
        Change column order
      </button>

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
          {rows.map((row) => {
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
