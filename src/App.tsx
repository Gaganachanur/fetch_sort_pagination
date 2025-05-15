import { useState, useEffect, useCallback } from 'react';

import './App.css';

function App() {
  const [search, setSearch] = useState([]);
  const [keyvalue, setKeyvalue] = useState('');
  const [notfound, setNotfound] = useState(false);

  const pagination =
    'https://609cd6ba04bffa001792d638.mockapi.io/books?limit=10&page=1';
  const Sorting =
    'https://609cd6ba04bffa001792d638.mockapi.io/books?sortBy=name&order=desc';
  useEffect(() => {
    async function fetchSearch() {
      try {
        await fetch(
          `https://609cd6ba04bffa001792d638.mockapi.io/books?search=${keyvalue}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data, 'resdata');
            if (data === 'Not found') {
              setNotfound(true);
              setSearch([]);
            } else {
              setNotfound(false);
              setSearch(data);
            }
          });
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchSearch();
  }, [keyvalue, notfound]);

  console.log(search, keyvalue);

  function listData(item) {
    return (
      <tr>
        <td>{item?.id}</td>
        <td>{item?.price}</td>
        <td>{item?.book_author}</td>
        <td>{item?.name}</td>
      </tr>
    );
  }

  function TableData() {
    if (notfound) {
      return (
        <>
          <h1>Data not found</h1>
        </>
      );
    } else {
      return (
        <div>
          <table style={{ border: '2px solid black' }}>
            <thead>
              <th>ID</th>
              <th>Price</th>
              <th>Author</th>
              <th>Name</th>
            </thead>
            {search &&
              search?.map((item) => {
                return listData(item);
              })}
          </table>
        </div>
      );
    }
  }

  return (
    <>
      <h1>demo</h1>
      <div>
        <span>Search</span>{' '}
        <input onChange={(e) => setKeyvalue(e.target.value)} type="text" />
      </div>
      {TableData()}
    </>
  );
}

export default App;
