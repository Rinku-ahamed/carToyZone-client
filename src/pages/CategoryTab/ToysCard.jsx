/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ToysCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  console.log(toy);
  const { _id, photo, name, price, rating } = toy;
  const handleNotification = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have to log in first to view details!",
      });
    }
  };
  return (
    <div className="shadow-xl mt-10 border rounded-md">
      <figure>
        <img
          src={photo}
          alt="Shoes"
          className="w-full h-52 object-cover object-top"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <Rating
          style={{ maxWidth: 100 }}
          value={Math.round(parseInt(rating))}
          readOnly
        />
        <div className="card-actions mt-4" onClick={handleNotification}>
          <Link to={`/allToys/${_id}`}>
            <button className="bg-orange-600 text-white px-6 py-2 font-bold rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
