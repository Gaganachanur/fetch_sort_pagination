import { useState, useEffect, useCallback } from "react";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import Sorting from "./Components/Sorting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (<>
  {/* <NavBar/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/sorting" element={<Sorting />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
