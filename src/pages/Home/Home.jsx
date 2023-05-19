import CategoryTab from "../CategoryTab/CategoryTab";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Galleries from "./Gallery/Galleries";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Galleries></Galleries>
      <CategoryTab></CategoryTab>
    </div>
  );
};

export default Home;
