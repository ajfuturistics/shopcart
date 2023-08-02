import { BiSliderAlt } from "react-icons/bi";

const Filterbar = () => {
  return (
    <section className="flex justify-between items-center font-medium">
      <div className="flex items-center gap-6 my-10">
        <div className="bg-slate-100 rounded-full px-4 py-2">
          <select
            name="category"
            id="category"
            className="bg-slate-100 outline-none"
          >
            <option value="">Headphone Type</option>
            <option value="TWS">TWS</option>
          </select>
        </div>
        <div className="bg-slate-100 rounded-full px-4 py-2">
          <select name="price" id="price" className="bg-slate-100 outline-none">
            <option value="">Price</option>
            <option value="500">Under 500</option>
            <option value="1000">Under 1000</option>
            <option value="1500">Under 1500</option>
          </select>
        </div>
        <div className="bg-slate-100 rounded-full px-4 py-2">
          <select
            name="review"
            id="review"
            className="bg-slate-100 outline-none"
          >
            <option value="">Review</option>
            <option value="500+">More than 500+</option>
            <option value="1000+">More than 1000+</option>
            <option value="1500+">More than 1500+</option>
          </select>
        </div>
        <div className="bg-slate-100 rounded-full px-4 py-2">
          <select name="color" id="color" className="bg-slate-100 outline-none">
            <option value="">Color</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="white">White</option>
          </select>
        </div>
        <div className="bg-slate-100 rounded-full px-4 py-2">
          <select
            name="material"
            id="material"
            className="bg-slate-100 outline-none"
          >
            <option value="">Color</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
          </select>
        </div>
        <div className="bg-slate-100 rounded-full px-4 py-2">
          <select name="offer" id="offer" className="bg-slate-100 outline-none">
            <option value="">Offer</option>
            <option value="30">30% Off</option>
            <option value="40">40% Off</option>
            <option value="50">50% Off</option>
            <option value="60">60% Off</option>
            <option value="70">70% Off</option>
          </select>
        </div>
        <div className="bg-slate-100 rounded-full px-4 py-2 flex justify-center items-center gap-1">
          <span>All Filters</span>
          <BiSliderAlt size={16} />
        </div>
      </div>

      <div className="flex items-center gap-6 my-10">
        <div className="bg-white border border-black rounded-full px-4 py-2 justify-self-end">
          <select name="offer" id="offer" className="bg-white outline-none">
            <option value="">Sort By</option>
            <option value="Newest">Newest</option>
            <option value="Popular">Popular</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filterbar;
