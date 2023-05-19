const AllToysRow = ({ toy }) => {
  const { sellerName, name, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <button className="bg-orange-600 text-white px-3 py-1 rounded">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default AllToysRow;
