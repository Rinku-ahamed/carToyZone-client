import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import banner from "../../assets/banner-cover.jpg";
const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toy = {
      photo,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(toy);
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Successfully add a toys",
          });
        }
      });
  };
  return (
    <>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">Add A Toys</h2>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 shadow-md px-10 py-10 w-5/6">
        <form onSubmit={handleAddToys}>
          <div className="md:flex gap-6">
            <div className="form-control w-full">
              <label className="label">Photo Url</label>
              <input
                type="text"
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6 mt-6">
            <div className="form-control w-full">
              <label className="label">Seller Name</label>
              <input
                type="text"
                name="sellerName"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Seller Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="sellerEmail"
                className="input input-bordered w-full"
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className="md:flex gap-6 mt-6">
            <div className="form-control w-full">
              <label className="label">Sub Category</label>
              <select
                className="select select-bordered"
                required
                name="category"
              >
                <option value="sports-car">sports car</option>
                <option value="police-car">mini police car</option>
                <option value="fire-track">mini fire truck</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6 mt-6">
            <div className="form-control w-full">
              <label className="label">Rating</label>
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-bordered w-full h-48"
              placeholder="Toy Description"
              name="description"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add A Toys"
            className="w-full bg-orange-600 text-white font-bold py-3 text-lg rounded-md mt-6 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default AddToys;
