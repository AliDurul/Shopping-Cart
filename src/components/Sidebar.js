import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useCartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { handleClose, isOpen } = useSidebarContext();

  const { cart,clearCart } = useCartContext();

  return (
    <div
      className={`${
        isOpen ? "right-0 " : "-right-full"
      } w-full md:w-[35vw] xl:max-w-[30vw] bg-white fixed top-0 h-full shadow-2xl  transition-all duration-300 z-20 lg:px[35px] `}
    >
      {/* sidebar header */}
      <div className="flex items-center justify-between py-6 px-3 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* sibebar cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ 100
          </div>
          <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl" onClick={clearCart}><FiTrash2/></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
