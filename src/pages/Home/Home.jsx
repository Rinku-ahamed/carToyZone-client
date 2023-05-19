import CategoryTab from "../CategoryTab/CategoryTab";
import Banner from "./Banner/Banner";
import Galleries from "./Gallery/Galleries";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Galleries></Galleries>
      <CategoryTab></CategoryTab>
    </div>
  );
};

export default Home;
