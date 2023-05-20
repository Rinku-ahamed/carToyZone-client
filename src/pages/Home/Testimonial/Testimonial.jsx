import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-16 mb-10 px-10">
      <div className="text-center w-2/3 mx-auto">
        <h2 className="text-4xl font-semibold">Our Customer Loves Us</h2>
      </div>
      <div className="mt-8">
        <Slider {...settings}>
          <div className="p-3 shadow">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              sem tempor, varius quam at, luctus dui. Mauris magna metus,
              dapibus nec turpis vel, semper malesuada ante, commodo iacul
              viverra.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="avatar">
                <div className="w-20 h-20 rounded-full">
                  <img src="https://i.ibb.co/jgscYX6/1-1.jpg" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">PAULA WILSON</h4>
                <p>Media Analyst / SkyNet</p>
                <Rating style={{ maxWidth: 80 }} value="4" readOnly />
              </div>
            </div>
          </div>
          <div className=" p-3 shadow">
            <p className="text-lg">
              Vestibulum quis quam ut magna consequat faucibus. Pellentesque
              eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque
              virra. Quis quam ut magna consequat faucibus, metus id mi gravida.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="avatar">
                <div className="w-20 h-20 rounded-full">
                  <img src="https://i.ibb.co/BV39J68/2-1.jpg" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">ANTONIO MORENO</h4>
                <p>Web Developer / SoftBee</p>
                <Rating style={{ maxWidth: 80 }} value="5" readOnly />
              </div>
            </div>
          </div>
          <div className="shadow p-3">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              sem tempor, varius quam at, luctus dui. Mauris magna metus,
              dapibus nec turpis vel, semper malesuada ante, commodo iacul
              viverra.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="avatar">
                <div className="w-20 h-20 rounded-full">
                  <img src="https://i.ibb.co/n7KH3H2/5-1.jpg" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">MARTIN SOMMER</h4>
                <p>SEO Analyst / RealSearch</p>
                <Rating style={{ maxWidth: 80 }} value="4" readOnly />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
