import { BsTelephone } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="w-full bg-green-800 h-10 flex justify-between items-center text-white px-20">
      <div className="flex justify-center items-center gap-2">
        <BsTelephone size={16} />
        <span className="">+001234567890</span>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-3">
        <span className="">Get 50% Off on Selected Items</span>
        <span className="w-[2px] h-[50%] bg-white"></span>
        <span className="">Shop Now</span>
      </div>
      <div className="flex justify-center items-center gap-4">
        <select
          name="lang"
          id="lang"
          className="bg-green-800 outline-none border-none p-2"
        >
          <option value="Eng" selected>
            Eng
          </option>
        </select>
        <select
          name="lang"
          id="lang"
          className="bg-green-800 outline-none border-none p-2"
        >
          <option value="" selected>
            Location
          </option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
