import { Fragment } from "react";

export default function TableStructure({ tableHead, TableRows }) {
  return (
    <Fragment>
      <table>
        <thead>{tableHead}</thead>
        <tbody>{TableRows}</tbody>
      </table>
    </Fragment>
  );
}
