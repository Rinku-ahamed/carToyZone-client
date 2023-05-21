const Category = () => {
  return (
    <div className="mt-14 mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Categories
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-10 ">
        <div className=" rounded shadow text-center p-3">
          <img
            src="https://i.ibb.co/tPK7N3h/s-l300.jpg"
            className="rounded-full  transition duration-700 ease-in-out cursor-pointer hover:opacity-60 w-2/3 md:w-[200px] md:h-[200px] mx-auto"
            alt=""
          />
          <h3 className="mt-2 text-lg font-semibold hover:text-orange-600 cursor-pointer">
            Sports Car
          </h3>
        </div>
        <div className=" rounded shadow text-center p-3">
          <img
            src="https://i.ibb.co/vP3sPzb/6.jpg"
            alt=""
            className="rounded-full  transition duration-700 ease-in-out cursor-pointer hover:opacity-60 w-2/3 h-[172px] md:w-[200px] md:h-[200px] mx-auto"
          />
          <h3 className="mt-2 text-lg font-semibold hover:text-orange-600 cursor-pointer">
            Regular car
          </h3>
        </div>
        <div className=" rounded shadow text-center p-3">
          <img
            src="https://i.ibb.co/DkMKM6f/8.jpg"
            alt=""
            className="rounded-full  transition duration-700 ease-in-out cursor-pointer hover:opacity-60 w-2/3 md:w-[200px] md:h-[200px] mx-auto"
          />
          <h3 className="mt-2 text-lg font-semibold hover:text-orange-600 cursor-pointer">
            Mini fire truck
          </h3>
        </div>
        <div className="rounded shadow text-center p-3">
          <img
            src="https://i.ibb.co/vzb548d/5.jpg"
            alt=""
            className="rounded-full  transition duration-700 ease-in-out cursor-pointer hover:opacity-60 w-2/3 h-[172px] md:w-[200px] md:h-[200px] mx-auto"
          />
          <h3 className="mt-2 text-lg font-semibold hover:text-orange-600 cursor-pointer">
            Mini police car
          </h3>
        </div>
        <div className="rounded shadow text-center p-3">
          <img
            src="https://i.ibb.co/6BVX2L6/7b-Standard-Heral.jpg"
            alt=""
            className="rounded-full  transition duration-700 ease-in-out cursor-pointer hover:opacity-60 w-2/3 h-[172px] md:w-[200px] md:h-[200px] mx-auto"
          />
          <h3 className="mt-2 text-lg font-semibold hover:text-orange-600 cursor-pointer">
            Sports Car
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Category;
