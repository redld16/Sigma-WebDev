import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return <div>hey User {params.username}</div>;
};

export default User;
