import { toast } from "react-toastify";

const useDeleteInventories = () => {
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
    return
};

export default useDeleteInventories;