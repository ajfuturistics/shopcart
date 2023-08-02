import Image from "next/image";
import React from "react";
import StarRating from "../StarRating/StarRating";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

const ProductCard = ({ id, title, price, images }) => {
  // fix for api local images
  const image = images[0].includes("https://")
    ? images[0]
    : "/assets/images/placeholder-image.jpg";

  const router = useRouter();

  return (
    <div className="m-2 rounded-md overflow-hidden relative ">
      <div
        onClick={() => router.push(`/product/${id}`)}
        className="cursor-pointer"
      >
        <Image
          className="w-full aspect-square bg-gray-100 rounded-md "
          src={image}
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="flex justify-between items-center my-2 font-medium text-lg">
          <h3>{title}</h3>
          <div className="flex justify-center items-center gap-[1px]">
            <span className="text-xs">$</span>
            <span>{price}</span>
            <span className="text-xs">.00</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Organic Cotton, fairtrade certified
        </p>
        <StarRating rating={4} totalRatings={216} edit={false} />
      </div>
      <button className="py-2 px-6 bg-white text-black border border-black transition-all duration-200 hover:border-green-800 hover:bg-green-800 hover:text-white rounded-full">
        Add to Cart
      </button>

      <button className="bg-white w-10 h-10 flex justify-center items-center absolute top-3 right-3 rounded-full">
        <AiOutlineHeart size={20} />
      </button>
    </div>
  );
};

export default ProductCard;
