import React, { useState, useEffect, useCallback, useRef } from "react";
import TableStructure from "../Utils/tableUtil";
import { url } from "../Utils/linkUtils";

export default function Search() {
  const [search, setSearch] = useState([]);
  const [keyvalue, setKeyvalue] = useState("");
  const [notfound, setNotfound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSearch() {
      setLoading(true);
      try {
        await fetch(`${url}?search=${keyvalue}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data, "resdata");
            if (data === "Not found") {
              setNotfound(true);
              setSearch([]);
            } else {
              setLoading(false);
              setNotfound(false);
              setSearch(data);
            }
          });
      } catch (error) {
        throw new Error(error);
      }
      setLoading(false);
    }

    fetchSearch();
  }, [keyvalue, notfound]);

  function TableData() {
    if (notfound) {
      return <h1>Data not found</h1>;
    } else {
      return (
        <TableStructure tableHead={tableHead()} TableRows={TableRows(search)} />
      );
    }
  }

  //DeBounce Functionality
  const deBouncetimer = useRef(null);
  const handleInputChange = useCallback((e) => {
    if (deBouncetimer.current) clearTimeout(deBouncetimer.current);

    deBouncetimer.current = setTimeout(() => {
      setKeyvalue(e.target.value);
    }, 1000);
  }, []);

  return (
    <>
      {" "}
      <h1>demo</h1>
      <div>
        <span>Search</span> <input onChange={handleInputChange} type="text" />
      </div>
      {loading ? <h2>Loading... </h2> : TableData()}
    </>
  );
}

const tableHead = () => {
  const fragment = (
    <tr>
      <th>ID</th>
      <th>Price</th>
      <th>Author</th>
      <th>Name</th>
    </tr>
  );
  return fragment;
};

const TableRows = (search) => {
  const fragment =
    search &&
    search?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item?.id}</td>
          <td>{item?.price}</td>
          <td>{item?.book_author}</td>
          <td>{item?.name}</td>
        </tr>
      );
    });

  return fragment;
};
