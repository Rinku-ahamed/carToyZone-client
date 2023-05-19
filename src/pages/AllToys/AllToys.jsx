import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import banner from "../../assets/banner-cover.jpg";
const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys?limit=20")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">Search By Toy Name</h2>
            <form>
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search Your Toys..."
                    className="input input-bordered text-black w-full"
                  />
                  <button className="bg-orange-600 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl text-center mb-6">All toys</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-lg bg-slate-200">Seller Name</th>
                <th className="text-lg bg-slate-200">Toy Name</th>
                <th className="text-lg bg-slate-200">Sub Category</th>
                <th className="text-lg bg-slate-200">Price</th>
                <th className="text-lg bg-slate-200">Quantity</th>
                <th className="text-lg bg-slate-200">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy) => (
                <AllToysRow key={toy._id} toy={toy}></AllToysRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
