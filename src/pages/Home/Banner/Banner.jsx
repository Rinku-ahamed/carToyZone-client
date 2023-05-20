import { Link } from "react-router-dom";
import BannerBg from "../../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="hero md:h-[550px] rounded"
      style={{
        backgroundImage: `url("${BannerBg}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-70 rounded"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:w-2/3 py-5">
          <h1 className="mb-7 text-2xl md:text-5xl font-bold md:leading-[56px]">
            Explore a Universe of Car Toys and Racing Delights
          </h1>
          <p className="mb-7 md:px-10">
            Fuel Your Child is Imagination with Exciting Car Playthings - Drive
            into Endless Adventures. Explore a thrilling collection of car toys
            that inspire imaginative journeys and bring excitement to playtime,
            sparking the imaginations of young drivers.
          </p>
          <Link to="/allToys">
            <button className="bg-orange-600 md:text-lg text-white px-5 md:px-8 py-1 md:py-2 font-bold rounded">
              Explore Toys
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
