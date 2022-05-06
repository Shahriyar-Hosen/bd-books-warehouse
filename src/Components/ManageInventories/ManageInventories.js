import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import Loading from "../Sheared/Loading/Loading";

const ManageInventories = () => {
  const [inventory, setInventory] = useInventory();

  if (inventory.length === 0) {
    return <Loading></Loading>
  }

  const deleteItem = (id) => {
    // Delete / DELETE Method - delete by id
    const proceed = window.confirm("Delete This Items");
    if (proceed) {
      const url = `https://quiet-sierra-51150.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Deleted Data");
            const remaining = inventory.filter((user) => user._id !== id);
            setInventory(remaining);
          }
        });
    }
  };
  // ----------------------------------------
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Manage Inventories</h2>
        <Link
          to="/add-item"
          className="btn btn-info py-0 px-2 text-white text-decoration-none d-flex justify-content-between align-items-center"
        >
          <FaPlus />
          <span className="ps-1">Add Items</span>
        </Link>
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
                onClick={() => deleteItem(item._id)}
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

export default ManageInventories;
