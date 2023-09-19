import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "dateOfBirth",
    Cell: ({ value }) => format(new Date(value), "yyyy-MM-dd HH:mm:ss"),
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];
