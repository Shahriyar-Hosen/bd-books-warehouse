import { useEffect, useState } from "react";

const useUpdateQuantity = (id, previousQuantity) => {
  const [newQuantity, setNewQuantity] = useState(0);

useEffect(() => {
    const url = `https://quiet-sierra-51150.herokuapp.com/inventory/${id}`;

  // PUT Method update data using id
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity: previousQuantity }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      setNewQuantity(previousQuantity);
      // alert("Update Items Quantity successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, [id, previousQuantity])

  // ------------------------------------

  return [newQuantity];
};

export default useUpdateQuantity;
