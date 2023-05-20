import { useContext, useEffect, useState } from "react";
import banner from "../../assets/banner-cover.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import { Helmet } from "react-helmet";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/myToys?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user.email]);

  const handleDescending = (text) => {
    fetch(`http://localhost:5000/filterToys?text=${text}&email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  const handleAscending = (text) => {
    fetch(`http://localhost:5000/filterToys?text=${text}&email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div>
      <Helmet>
        <title>CarToyZone | My Toys</title>
      </Helmet>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">My Toys</h2>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center gap-3 justify-end mb-5">
          <button
            className="bg-slate-700 text-white px-2 py-1 rounded"
            onClick={() => handleAscending("ascending")}
          >
            Ascending
          </button>
          <button
            onClick={() => handleDescending("descending")}
            className="bg-black text-white px-2 py-1 rounded"
          >
            Descending
          </button>
        </div>
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
              {toys.map((toy) => (
                <MyToysRow
                  key={toy._id}
                  toy={toy}
                  toys={toys}
                  setToys={setToys}
                ></MyToysRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
