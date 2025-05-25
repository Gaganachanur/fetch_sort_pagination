import { useContext } from "react";
import React from "react";
import { userContext } from "../Utils/userContext";
export default function Cards(props) {
  const { data = [] } = props || {};
   const productMessage = useContext(userContext)
  function mapData() {
    const fragment =
      data &&
      data.map((item, key) => {
        return (
          <div className="cards" key ={key}>
           
            <img
              className="card_image"
              src={item.image}
              alt={item.title}
              style={{ width: "200px", height: "150px" }}
            />
            <li>Title:{item?.title}</li>
            <li>Category:{item?.category}</li>
            <li>Price:{item?.price}</li>
            <li>{productMessage}</li>
            
          </div>
        );
      });
    return fragment;
  }

  return (
    <>
      <div className="cards_flex">{mapData()}</div>
    </>
  );
}
