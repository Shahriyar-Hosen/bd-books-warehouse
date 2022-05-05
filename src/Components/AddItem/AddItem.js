import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const inputPrice = event.target.price.value;
    const inputQuantity = event.target.price.value;
    const InputSold = event.target.sold.value;
    const supplier = event.target.supplier.value;
    const img = event.target.img.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    let price = 0;
    let quantity = 0;
    let sold = 0;

    if (inputPrice > 0) {
      price = inputPrice;
    }
    if (inputQuantity > 0) {
      quantity = inputQuantity;
    }
    if (InputSold > 0) {
      sold = InputSold
    }
    const inventory = {
      email,
      name,
      price: parseInt(price),
      quantity: parseInt(quantity),
      sold: parseInt(sold),
      supplier,
      img,
      category,
      description,
    };

    console.log(inventory);

    // Create / POST Method - Add to database
    fetch("https://quiet-sierra-51150.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
        toast("user added successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // ------------------------------------
  };

  return (
    <div className="container">
      <Form className="w-50 mx-auto py-5" onSubmit={handleSubmit}>
        <h1 className="text-center" style={{ color: "navy" }}>
          Add Item
        </h1>
        <Form.Group className="mb-3">
          <Form.Control
            value={user?.email}
            type="email"
            name="email"
            placeholder="User Email"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" name="name" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Price"
            name="price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="quantity"
            name="quantity"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="sold" name="sold" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="supplier"
            name="supplier"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="category"
            name="category"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="img" name="img" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="description"
            name="description"
          />
        </Form.Group>
        <Button
          className="d-block mx-auto px-5 text-white fs-4"
          variant="info"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
