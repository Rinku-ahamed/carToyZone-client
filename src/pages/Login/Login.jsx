import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        form.reset();
        setSuccess("Successfully login!!");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setError(errorMsg);
      });
  };
  return (
    <div className=" py-16 md:w-5/6 mx-auto shadow-lg mt-6">
      <div className="grid md:grid-cols-2 gap-8 px-8">
        <div className="text-center lg:text-left">
          <img src={login} alt="" className="" />
        </div>
        <div className="card shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
            <p className="text-orange-600 font-semibold text-xl">{error}</p>
            <p className="text-green-600 font-semibold text-xl">{success}</p>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-600 font-bold">
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
