import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import GrandParent from "./GrandParent";
export default function Counter() {
  let localvalue = JSON.parse(localStorage.getItem("counter"));
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [localvalue]);

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button> &nbsp; &nbsp;
      counter value :{count} &nbsp; &nbsp; LocalStorage Value :{localvalue}{" "}
      &nbsp; &nbsp;
      <button onClick={() => dispatch(decrement())}>-</button>
           <GrandParent/>
    </>
  );
}
