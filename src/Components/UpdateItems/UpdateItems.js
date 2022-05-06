import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Sheared/Loading/Loading";

const UpdateItems = () => {
  const { id } = useParams();
  const { register } = useForm();
  const [product, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const { img, name, price, description, supplier, sold, category } = product;

  // Read / Get Method - Read by ID
  useEffect(() => {
    const url = `https://quiet-sierra-51150.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setQuantity(data.quantity);
      });
  }, [id, quantity]);

  if (!product) {
    return <Loading></Loading>
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = parseInt(event.target.quantity.value);
    receiptItems(inputValue);
    event.target.reset();
  };

  const receiptItems = (inputValue) => {
    if (inputValue <= 0) {
      return toast("please positive value");
    } else if (inputValue > 0) {
      const receiptQuantity = quantity + inputValue;
      updateQuantity(receiptQuantity);
    } else {
      // const receiptQuantity = quantity + 1;
      // updateQuantity(receiptQuantity);
    }
  };

  const deliveredItems = () => {
    const deliveredQuantity = quantity - 1;
    const soldQuantity = sold + 1;
    updateSoldItem(soldQuantity);
    updateQuantity(deliveredQuantity);
  };
  const updateSoldItem = (newSold) => {
    const url = `https://quiet-sierra-51150.herokuapp.com/inventory/${id}`;

    // PUT Method update data using id
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sold: newSold }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Update Items Quantity successfully");
        // alert("Update Items Quantity successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // ------------------------------------
  };

  const updateQuantity = (newQuantity) => {
    const url = `https://quiet-sierra-51150.herokuapp.com/inventory/${id}`;

    // PUT Method update data using id
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Update Items Quantity successfully");
        setQuantity(newQuantity);
        // alert("Update Items Quantity successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // ------------------------------------
  };
  return (
    <div className="container w-100 ">
      <h1 className="mt-5 text-center fw-bold" style={{ color: "navy" }}>
        Update Your Selecting Items
      </h1>
      <CardGroup className="w-75 w-md-50 mx-auto py-5">
        <Card
          className=" shadow-lg bg-info bg-gradient bg-opacity-10 mx-auto border border-info"
          style={{ borderRadius: "7px" }}
        >
          <Card.Img
            style={{ maxWidth: "400px", borderRadius: "10px" }}
            className="w-50 w-md-25 mx-auto pt-3"
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title
              style={{ color: "navy" }}
              className="my-3 fw-bold fs-4 text-center"
            >
              {name}
            </Card.Title>
            <div
              style={{
                color: "rgb(2, 2, 175)",
                width: "80%",
                borderRadius: "10px",
                backgroundColor: "rgb(232, 255, 187)",
              }}
              className=" mx-auto d-flex justify-content-around shadow-sm p-2 mb-3"
            >
              <div>
                <Card.Text className="my-1 fw-bold text-war ">
                  Price: {price}
                </Card.Text>
                <Card.Text className="my-1 fw-bold">
                  Supplier: {supplier}
                </Card.Text>
              </div>
              <div>
                <Card.Text className="my-1 fw-bold">
                  Quantity:{" "}
                  {quantity === 0 ? (
                    <p className="text-danger">Sold Out</p>
                  ) : (
                    quantity
                  )}
                </Card.Text>
                <Card.Text className="my-1 fw-bold">Sold: {sold}</Card.Text>
              </div>
            </div>
            <Card.Text className="my-2 text-center">
              Category: {category}
            </Card.Text>
            <Card.Text>
              <small>
                {description?.length > 250
                  ? description.slice(0, 250) + "..."
                  : description}
              </small>
            </Card.Text>
            {/* <Card.Text className="">
              <small>ID: {_id}</small>
            </Card.Text> */}
          </Card.Body>
          <Card.Footer className="border-0 bg-c-footer bg-info bg-gradient bg-opacity-10 pb-0 w-100">
            <div className=" d-flex justify-content-center">
              <button
                className={
                  quantity === 0 ? "btn btn-danger" : "btn-custom px-5 me-2"
                }
                onClick={() => deliveredItems()}
                disabled={quantity === 0 ? true : false}
              >
                {quantity === 0 ? "Sold Out" : "Delivered"}
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mb-3 d-flex justify-content-center w-100 w-md-50"
            >
              <input
                {...register("inputQuantity")}
                type="number"
                className="form-control w-50 me-2"
                placeholder="Update Quantity"
                name="quantity"
              ></input>
              <input
                type="submit"
                value="Restock"
                className="btn btn-info rounded fs-5 text-white bg-primary bg-gradient bg-opacity-75 "
              />
            </form>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Link to="/manage-inventories" className="text-decoration-none">
        <button className="btn-custom mx-auto d-block my-5 py-2 px-5 text-decoration-none">
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default UpdateItems;
