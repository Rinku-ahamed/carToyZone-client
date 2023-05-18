import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";
const Register = () => {
  return (
    <div className=" py-16 md:w-5/6 mx-auto shadow-lg mt-6">
      <div className="grid md:grid-cols-2 gap-8 px-8">
        <div className="text-center lg:text-left">
          <img src={login} alt="" className="" />
        </div>
        <div className="card shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="bg-orange-600 text-white px-6 py-2 font-bold text-xl">
                  Register
                </button>
              </div>
            </form>
            <p className="text-orange-600 font-semibold text-xl"></p>
            <p className="text-green-600 font-semibold text-xl"></p>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-orange-600 font-bold">
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
