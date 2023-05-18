import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
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
                  Login
                </button>
              </div>
            </form>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-600 font-bold mt-2">
                Register now
              </Link>
            </p>
            <div className="divider">OR</div>
            <div>
              <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-full py-2 flex items-center gap-3 justify-center font-semibold">
                <span>
                  <FaGoogle />
                </span>
                Sign in With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
