import { useState, useEffect, useCallback } from "react";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import Sorting from "./Components/Sorting";
import Counter from "./Components/counter";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";
import Products from "./Components/Products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Navigate to="/" />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
