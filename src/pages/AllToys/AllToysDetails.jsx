import { useLoaderData } from "react-router-dom";
import banner from "../../assets/banner-cover.jpg";
const AllToysDetails = () => {
  const toy = useLoaderData();
  const { photo, sellerName, name, price, quantity, description, sellerEmail } =
    toy;
  console.log(toy);
  return (
    <>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">
              Single Details For Toys
            </h2>
          </div>
        </div>
      </div>
      <div className="md:flex bg-base-100 shadow-xl mt-20 md:mx-20">
        <div className="md:w-1/3">
          <figure>
            <img
              src={photo}
              alt="Movie"
              className="w-full h-[300px] object-cover object-top"
            />
          </figure>
        </div>
        <div className="card-body w-2/3">
          <h2 className="card-title">Toy Name: {name}</h2>
          <h3 className="text-lg">Seller Name: {sellerName}</h3>
          <h3 className="text-lg">Seller Email: {sellerEmail}</h3>
          <h3 className="text-lg">Price: ${price}</h3>
          <h3 className="text-lg">Quantity: {quantity}</h3>
          <h3 className="card-title">Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default AllToysDetails;
