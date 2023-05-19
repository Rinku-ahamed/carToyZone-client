import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
