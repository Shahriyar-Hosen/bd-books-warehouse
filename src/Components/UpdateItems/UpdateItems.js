import React from "react";
import { useParams } from "react-router-dom";

const UpdateItems = () => {
  const { id } = useParams();
  // category
  //   <Card.Text className="my-2">Category: {category}</Card.Text>
  return (
    <div>
      <p>This is Update Items ID: {id}</p>
    </div>
  );
};

export default UpdateItems;
