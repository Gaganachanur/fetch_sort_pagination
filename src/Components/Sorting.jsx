import React, { useState, useEffect } from "react";
import { url } from "../Utils/linkUtils";


export default function Sorting() {
  const [data, setData] = useState([]);
  const [isAscending, setIsAscending] = useState(true); // true = ascending, false = descending
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function fetchSorting() {
      const order = isAscending ? "asce" : "desc";
      try {
        const resp = await fetch(`${url}?sortBy=name&order=${order}`);
        const responce = await resp.json();
        setData(responce);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSorting();
  }, [isAscending]);
  console.log(data, "data");
  return (
    <>
      {" "}
      
      <h1>Sorting</h1>
      <label>descending</label>
      <input type="checkbox" onChange={(e) => setIsAscending(!isAscending)} />
      <div className="cards_flex">
        {loading ? <h2>Loading...</h2> : loadcards(data)}
      </div>
    </>
  );
}

const loadcards = (data) => {
  const altImage =
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
  let fragment =
    data &&
    data.map((item, key) => {
      return (
        <div className="cards" key={key}>
          <img
            src={altImage}
            alt={item.book_author}
            style={{ width: "200px", height: "150px" }}
          />

          <li>name :{item.name}</li>
          <li>Author :{item.book_author}</li>
          <li>price :{item.price}</li>
        </div>
      );
    });

  return fragment;
};
