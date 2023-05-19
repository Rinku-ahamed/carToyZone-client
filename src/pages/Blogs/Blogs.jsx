import banner from "../../assets/banner-cover.jpg";
const Blogs = () => {
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">Blog Pages</h2>
          </div>
        </div>
      </div>

      <div>
        <article className="shadow-lg py-10 px-6">
          <h2 className="text-3xl font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="mt-4 text-xl text-[#757575]">
            In this tutorial we going to discuss about Tokens are pieces of data
            that carry just enough information to facilitate the process of
            determining a user is identity or authorizing a user to perform an
            action. The main reason why refresh tokens exist is because most
            access tokens don not live forever. That is to say, an access token
            may expire after a specific period of time like a few hours or days.
            we will take a closer look at how refresh tokens work. We will do
            this by reviewing the various stages of API authentication and
            authorization. The resource owner password credentials flow is a way
            to obtain access and refresh tokens by directly sending the user is
            username and password to the authorization server.
          </p>
        </article>
        <article className="shadow-lg py-10 px-6 mt-16">
          <h2 className="text-3xl font-semibold">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="mt-4 text-xl text-[#757575]">
            In this tutorial we going to discuss about
          </p>
        </article>
        <article className="shadow-lg py-10 px-6 mt-16">
          <h2 className="text-3xl font-semibold">
            What is express js? What is Nest JS (google it)?
          </h2>
          <p className="mt-4 text-xl text-[#757575]">
            In this tutorial we going to discuss about
          </p>
        </article>
        <article className="shadow-lg py-10 px-6 mt-16">
          <h2 className="text-3xl font-semibold">
            What is MongoDB aggregate and how does it work (google it)?
          </h2>
          <p className="mt-4 text-xl text-[#757575]">
            In this tutorial we going to discuss about
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
