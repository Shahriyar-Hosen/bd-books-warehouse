import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";

const ManageInventories = () => {
  const [inventory] = useInventory();
  return (
    <div className="container table-responsive">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Manage Inventories</h2>
        <Link to="/add-item">Add Items</Link>
      </div>
      <Table hover className="table-responsive table-info">
        <thead className="text-center">
          <tr>
            <th className="fs-1">⭐</th>
            <th className=" table-warning fs-5">Items Name</th>
            <th className=" table-primary fs-5">Quantity</th>
            <th className=" table-danger fs-5">Remove Item</th>
          </tr>
        </thead>
        <tbody className="table-success">
          {inventory.map((item) => (
            <tr key={item._id}>
              <td className=" table-info text-center">
                <img
                  style={{ width: "50px", borderRadius: "50%" }}
                  src={item.img}
                  alt=""
                />
              </td>
              <td className=" table-warning">{item.name}</td>
              <td className=" table-primary text-center">{item.quantity}</td>
              <td className=" table-danger text-center">Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventories;
