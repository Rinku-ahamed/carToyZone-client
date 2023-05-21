import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MyToysRow = ({ toy, toys, setToys }) => {
  const {
    _id,
    sellerName,
    sellerEmail,
    photo,
    name,
    subCategory,
    price,
    quantity,
  } = toy;
  console.log(toy);
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
        fetch(
          `https://car-toy-zone-server-rinku-ahamed.vercel.app/myToys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toys has been deleted.", "success");
            }
            const newToys = toys.filter((ty) => ty._id !== id);
            setToys(newToys);
          });
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{sellerEmail}</td>
      <td>{sellerName}</td>
      <td>{name.slice(0, 20)}...</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/updateToys/${_id}`}>
          <button className="bg-orange-600 text-white px-3 py-1 rounded me-2">
            Edit
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
