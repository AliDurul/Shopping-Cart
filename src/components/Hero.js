import React from "react";

  import Shoping from "../img/online-shopping.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover py-24 w-full">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center ">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTO SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2  border-b-primary "
          >
            {" "}
            Discover More
          </Link>
        </div>
        <div className=" hidden lg:flex  w-72">
          {/* <img className="bg-covere" src={Shoping} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
