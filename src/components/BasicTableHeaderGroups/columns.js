export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "Full Name",
    Footer: "Full Name",
    columns: [
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
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "dateOfBirth",
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
    ],
  },
];
