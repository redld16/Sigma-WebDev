import { useSelector, useDispatch } from "react-redux";
import React from "react";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>{count}</div>;
};

export default Navbar;
