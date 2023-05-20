import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Category.css";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import { RotatingLines } from "react-loader-spinner";
const CategoryTab = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  const [category, setCategory] = useState("sports-car");

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryToys(data);
        console.log(data);
      });
  }, [category]);
  return (
    <div>
      <div className="text-center md:w-2/3 mx-auto pt-10">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Discover Subcategories of Car Toys
        </h2>
      </div>
      <div className="mt-10 md:px-10">
        <Tabs>
          <TabList>
            <Tab onClick={() => setCategory("sports-car")}>Sports Car</Tab>
            <Tab onClick={() => setCategory("fire-track")}>Mini Police Car</Tab>
            <Tab onClick={() => setCategory("police-car")}>Mini Fire Truck</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-4">
              {categoryToys.length === 0 ? (
                <div className="text-center mx-auto">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </div>
              ) : (
                categoryToys
                  .slice(0, 3)
                  .map((catToy) => (
                    <ToysCard key={catToy._id} toy={catToy}></ToysCard>
                  ))
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-4">
              {categoryToys.length === 0 ? (
                <div className="text-center mx-auto">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </div>
              ) : (
                categoryToys
                  .slice(0, 3)
                  .map((catToy) => (
                    <ToysCard key={catToy._id} toy={catToy}></ToysCard>
                  ))
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10 mt-4">
              {categoryToys.length === 0 ? (
                <div className="text-center mx-auto">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </div>
              ) : (
                categoryToys
                  .slice(0, 3)
                  .map((catToy) => (
                    <ToysCard key={catToy._id} toy={catToy}></ToysCard>
                  ))
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryTab;
