import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import banner from "../../assets/banner-cover.jpg";
import { Helmet } from "react-helmet";
const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://car-toy-zone-server-rinku-ahamed.vercel.app/toys?limit=20")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    console.log(name);
    fetch(
      `https://car-toy-zone-server-rinku-ahamed.vercel.app/searchToy?search=${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <>
      <Helmet>
        <title>CarToyZone | All Toys</title>
      </Helmet>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">Search By Toy Name</h2>
            <form onSubmit={handleSearch}>
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search Your Toys..."
                    className="input input-bordered text-black w-full"
                    name="name"
                  />
                  <button className="bg-orange-600 px-2" type="submit">
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
    </>
  );
};

export default AllToys;
