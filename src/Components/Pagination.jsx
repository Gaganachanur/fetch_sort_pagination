import React, { useEffect, Fragment, useState } from "react";
import TableStructure from "../Utils/tableUtil";
import { url } from "../Utils/linkUtils";

// Number of items per page
const ITEMS_PER_PAGE = 10;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const maxPage = 10;

  // Fetch data for the current page
  useEffect(() => {
    async function fetchPagination() {
      setLoading(true);
      try {
        const resp = await fetch(
          `${url}?limit=${ITEMS_PER_PAGE}&page=${currentPage}`
        );
        const result = await resp.json();
        setData(result);
      } catch (error) {
        console.error(`Error in fetching data ${error}`);
      } finally {
        setLoading(false);
      }
    }
    fetchPagination();
  }, [currentPage]);

  return (
    <>
      <div>pagination</div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <TableStructure tableHead={tableHead()} TableRows={TableRows(data)} />
      )}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={(e) => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          prev
        </button>
        <span>
          {" "}
          page {currentPage} of {maxPage}{" "}
        </span>
        <button
          onClick={(e) => setCurrentPage((prev) => Math.min(prev + 1, maxPage))}
        >
          next
        </button>
      </div>
    </>
  );
}

// Table head component
const tableHead = () => (
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Book Author</th>
    <th>Book Image URL</th>
    <th>Price</th>
  </tr>
);

// Table rows component
const TableRows = (data) =>
  data &&
  data.map((item, idx) => (
    <tr key={idx}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.book_author}</td>
      <td>{item.book_image}</td>
      <td>{item.price}</td>
    </tr>
  ));
