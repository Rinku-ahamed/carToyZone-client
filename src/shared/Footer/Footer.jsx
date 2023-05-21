import location from "../../assets/location.png";
import email from "../../assets/email.png";
import phone from "../../assets/call.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="grid md:grid-cols-3 py-16 px-6 md:px-10 bg-slate-800  text-white rounded-t mt-16">
        <div>
          <h2 className=" mb-3">
            <Link to="/" className="normal-case text-3xl font-bold">
              CarToy<span className="text-orange-600">Zone</span>
            </Link>
          </h2>
          <p>
            Welcome to Car Toy Zone, your ultimate destination for all things
            car toys! Step into a world where imagination takes the driver is
            seat and playtime reaches new levels of excitement. we are
            passionate about providing children and enthusiasts with an
            unparalleled selection of car toys and spark endless adventures.
          </p>
        </div>
        <div className="md:ms-28 mt-9 md:mt-0">
          <h3 className="text-white text-2xl mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">all Toys</a>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">Login</a>
          </ul>
        </div>
        <div className="mt-9 md:mt-0">
          <h3 className="text-white text-2xl mb-4">Address</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <img className="inline-block me-2" src={location} alt="" />{" "}
              Doulatpur, Kushtia, bangladesh
            </li>
            <li>
              {" "}
              <img className="inline-block me-2" src={email} alt="" />{" "}
              Example20@gmail.com
            </li>
            <li>
              {" "}
              <img className="inline-block me-2" src={phone} alt="" /> +880
              17600-00000
            </li>
          </ul>
        </div>
      </footer>
      <div className="md:flex justify-between items-center px-6 md:px-10 py-4 bg-slate-900 text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="flex gap-3 md:gap-6 mt-4 md:mt-0">
          <a href="https://www.facebook.com/rinkuali64/">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/rinku-ahamed-b86085209/">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
