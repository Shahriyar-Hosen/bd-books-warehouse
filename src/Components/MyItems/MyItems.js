import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiDeleteBin2Line } from "react-icons/ri";
import auth from "../../firebase.init";

const MyItems = () => {
  const [inventory, setInventory] = useState([]);
  const [user] = useAuthState(auth);

  // Read / Get Method - Read by Search query
  useEffect(() => {
    const email = user.email;
    console.log(email);
    const url = `http://localhost:5000/inventory/?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  // ---------------------------------------
  return (
    <div className="container my-5">
      <h2>Manage Inventories</h2>
      <Table hover className="table-responsive table-info">
        <thead className="text-center">
          <tr>
            <th className="fs-1">⭐</th>
            <th className=" table-warning fs-5">Items Name</th>
            <th className=" table-primary fs-5">Quantity</th>
            <th className=" table-danger fs-5">Remove Item</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td className=" table-info text-center">
                <img
                  style={{ width: "35px", borderRadius: "50%" }}
                  src={item.img}
                  alt=""
                />
              </td>
              <td className=" table-warning">{item.name}</td>
              <td className=" table-primary text-center">{item.quantity}</td>
              <td
                className=" table-danger text-danger text-center fs-3"
                // onClick={() => deleteItem(item._id)}
              >
                <RiDeleteBin2Line />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
