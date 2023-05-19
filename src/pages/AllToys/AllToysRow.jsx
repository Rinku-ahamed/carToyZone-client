/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  const { _id, sellerName, name, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/allToys/${_id}`}>
          <button className="bg-orange-600 text-white px-3 py-1 rounded">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
