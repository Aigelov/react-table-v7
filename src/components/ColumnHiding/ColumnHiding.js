import { useMemo } from "react";
import { useTable } from "react-table";

import MOCK_DATA from "../../data/MOCK_DATA.json";
import { Checkbox } from "../Checkbox";

import { COLUMNS } from "./columns";

import "../table.css";

export const ColumnHiding = () => {
  const columns = useMemo(() => COLUMNS, []);
  /**
   * Data from mockaroo.com
   */
  const data = useMemo(() => MOCK_DATA, []);

  const {
    allColumns,
    footerGroups,
    getTableBodyProps,
    getTableProps,
    getToggleHideAllColumnsProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              {column.Header}
            </label>
          </div>
        ))}
      </div>
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
