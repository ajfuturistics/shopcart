import Image from "next/image";
import Dropdown from "./Dropdown";
import Searchbar from "../Searchbar/Searchbar";
import { FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 my-2">
      <div>
        <Image
          className="w-40"
          src="/assets/logo/logo.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>

      <ul className="flex justify-center items-center gap-10 cursor-default font-medium">
        <Dropdown />
        <li>Deals</li>
        <li>What&apos;s New</li>
        <li>Delivery</li>
      </ul>

      <div className="flex justify-center items-center gap-10 cursor-default">
        <Searchbar />
        <div className="flex justify-center items-center gap-2 hover:bg-slate-100 p-2 rounded-md font-medium">
          <FiUser size={20} />
          <span>Account</span>
        </div>
        <div className="flex justify-center items-center gap-2 hover:bg-slate-100 p-2 rounded-md font-medium">
          <FiShoppingCart size={20} />
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
