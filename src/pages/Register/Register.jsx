import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { signUpUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    setError("");
    setSuccess("");
    signUpUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setSuccess("Successfully you are register!!");
        updateUserinfo(user, name, photo);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  // update user info like name and user photo
  const updateUserinfo = (user, name, photo) => {
    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
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
            <form onSubmit={handleRegister}>
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
            <p className="text-orange-600 font-semibold text-xl">{error}</p>
            <p className="text-green-600 font-semibold text-xl">{success}</p>
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
