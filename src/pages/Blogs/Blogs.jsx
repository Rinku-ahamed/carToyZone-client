import banner from "../../assets/banner-cover.jpg";
const Blogs = () => {
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[500px]">
            <h2 className="text-3xl font-semibold mb-5">Blog Page</h2>
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
            In this tutorial we going to discuss about The decision of which
            type of database to use - SQL or NoSQL - will depend on the
            particular needs and requirements of the project. For example, SQL
            databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores.SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </article>
        <article className="shadow-lg py-10 px-6 mt-16">
          <h2 className="text-3xl font-semibold">
            What is express js? What is Nest JS?
          </h2>
          <p className="mt-4 text-xl text-[#757575]">
            In this tutorial we going to discuss about express vs nest js, When
            we want to build a large-scale application with a framework,
            Express.js is usually the first thing that comes to mind. Express
            has gained popularity in the last few years among developers. NestJS
            is a progressive Node.js framework for building efficient, scalable,
            and reliable server-side applications. It is built on top of
            Express.js and provides a more structured way of building
            applications with TypeScript. NestJS uses a modular architecture,
            making it easy to maintain and scale applications as they grow.
            TypeScript support: NestJS is built on top of TypeScript, which
            provides strong typing and better code organization. This makes it
            easier to maintain and scale large applications on the other hand
            Lightweight: Express is a lightweight framework that is easy to set
            up and use. It does not have many dependencies, making it ideal for
            small projects.
          </p>
        </article>
        <article className="shadow-lg py-10 px-6 mt-16">
          <h2 className="text-3xl font-semibold">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="mt-4 text-xl text-[#757575]">
            In this tutorial we going to discuss about MongoDB aggregate,
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. As with many other
            database systems, MongoDB allows you to perform a variety of
            aggregation operations. These allow you to process data records in a
            variety of ways, such as grouping data, sorting data into a specific
            order, or restructuring returned documents, as well as filtering
            data as one might with a query. In MongoDB, the aggregation pipeline
            consists of stages and each stage transforms the document. Or in
            other words, the aggregation pipeline is a multi-stage pipeline, so
            in each state, the documents taken as input and produce the
            resultant set of documents now in the next stage(id available) the
            resultant documents taken as input and produce output, this process
            is going on till the last stage
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
