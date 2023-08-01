import React, { useEffect, useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

import { BsBag } from "react-icons/bs";
import { FaBuysellads } from "react-icons/fa";

import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { setIsOpen, isOpen } = useSidebarContext();
  const { itemAmount } = useCartContext();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={` ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link to={"/"}>
          <FaBuysellads className="text-5xl" />
        </Link>
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 top-4 text-[12px] h-[15px] w-[15px] rounded-full flex justify-center items-center text-white p-2">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
