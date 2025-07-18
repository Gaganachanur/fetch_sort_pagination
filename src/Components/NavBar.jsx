import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/search" className="link">Search </Link>
      <Link to="/pagination" className="link">Pagination</Link>
      <Link to="/sorting"className="link" >Sorting</Link>
      <Link to="/products" className="link">Products</Link>
      <Link to ="/counter" className="link">Counter</Link>
      
    </div>
  );
}
