import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MyToysRow = ({ toy }) => {
  const { _id, sellerName, name, subCategory, price, quantity } = toy;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toys has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/updateToys/${_id}`}>
          <button className="bg-orange-600 text-white px-3 py-1 rounded me-2">
            Update
          </button>
        </Link>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
