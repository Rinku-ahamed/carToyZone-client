import Swal from "sweetalert2";
import banner from "../../assets/banner-cover.jpg";

import { useLoaderData } from "react-router-dom";
const UpdateToys = () => {
  const toy = useLoaderData();
  const { _id, name, price, quantity, description } = toy;
  const handleUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toy = {
      price,
      quantity,
      description,
    };
    fetch(`http://localhost:5000/myToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Successfully updated a toys",
          });
          console.log(data);
        }
      });
  };
  return (
    <>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">
              Updated Toys: {name}
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 shadow-md px-10 py-10 w-5/6">
        <form onSubmit={handleUpdateToys}>
          <div className="md:flex gap-6 mt-6">
            <div className="form-control w-full">
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">Quantity</label>
              <input
                type="number"
                defaultValue={quantity}
                name="quantity"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              placeholder="Toy Description"
              name="description"
              defaultValue={description}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Update Toys"
            className="w-full bg-orange-600 text-white font-bold py-3 text-lg rounded-md mt-6 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateToys;
