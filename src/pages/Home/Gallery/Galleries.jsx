//import
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Galleries = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="mt-14 mb-10">
      <div className="text-center md:w-2/3 mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">
          A Gallery of Car Toy Wonders
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 mt-10 md:px-10">
        <div className="border rounded shadow p-4" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/vP3sPzb/6.jpg"
            className="w-full h-60 md:h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/vzb548d/5.jpg"
            className="w-full h-60 md:h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/1qTnsWm/2.jpg"
            className="w-full h-60 md:h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/tPK7N3h/s-l300.jpg"
            className="w-full h-60 md:h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/DkMKM6f/8.jpg"
            className="w-full h-60 md:h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/nzppwqM/10.jpg"
            className="w-full h-60 md:h-56 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Galleries;
