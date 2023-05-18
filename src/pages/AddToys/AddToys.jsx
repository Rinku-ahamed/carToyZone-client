import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="mx-auto mt-16 shadow-md px-10 py-10 w-5/6">
      <form>
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
              name="seller-name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">Seller Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="seller-email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
            />
          </div>
        </div>
        <div className="md:flex gap-6 mt-6">
          <div className="form-control w-full">
            <label className="label">Sub Category</label>
            <select className="select select-bordered" required>
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
          ></textarea>
        </div>
        <input
          type="submit"
          value="Add A Toys"
          className="w-full bg-orange-600 text-white font-bold py-3 text-lg rounded-md mt-6"
        />
      </form>
    </div>
  );
};

export default AddToys;
