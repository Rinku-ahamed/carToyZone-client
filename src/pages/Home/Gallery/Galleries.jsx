const Galleries = () => {
  return (
    <div className="mt-14 mb-10">
      <div className="text-center w-2/3 mx-auto">
        <h2 className="text-4xl font-semibold">A Gallery of Car Toy Wonders</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 mt-10 px-20">
        <div className="border rounded shadow p-4" data-aos="flip-left">
          <img
            src="https://i.ibb.co/vP3sPzb/6.jpg"
            className="w-full h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4" data-aos="flip-left">
          <img
            src="https://i.ibb.co/vzb548d/5.jpg"
            className="w-full h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4">
          <img
            src="https://i.ibb.co/1qTnsWm/2.jpg"
            className="w-full h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4">
          <img
            src="https://i.ibb.co/tPK7N3h/s-l300.jpg"
            className="w-full h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4">
          <img
            src="https://i.ibb.co/DkMKM6f/8.jpg"
            className="w-full h-56 object-cover"
            alt=""
          />
        </div>
        <div className="border rounded shadow p-4">
          <img
            src="https://i.ibb.co/nzppwqM/10.jpg"
            className="w-full h-56 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Galleries;
