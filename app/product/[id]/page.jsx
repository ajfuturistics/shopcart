import ProductSlider from "@/components/ProductSlider/ProductSlider";
import StarRating from "@/components/StarRating/StarRating";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";

async function getProductById(productId) {
  const data = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`
  );

  if (!data.ok) {
    throw new Error("Product not found");
  }

  return data.json();
}

const Product = async ({ params }) => {
  const productId = params?.id;
  const data = await getProductById(productId || "");

  return (
    <section className="px-20 ">
      {/* breadcrums */}
      <div className="flex justify-start items-center gap-2 my-6 font-semibold">
        <span className="text-slate-400">
          {data?.category?.name || "Unknown"}
        </span>
        <span className="text-slate-400">/</span>
        <span className="text-black">{data?.title || "Unknown"}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <ProductSlider images={data.images} />

        <div>
          <div className="">
            <h2 className="text-3xl font-bold my-2">
              {data?.title || "Title not added"}
            </h2>
            <p>{data?.description || "Description not added"}</p>
            <StarRating rating={4} totalRatings={216} edit={false} />
          </div>

          <hr className="w-[60%] my-4" />

          <div>
            <p className="font-bold text-xl my-2">
              ${data.price.toFixed(2)} or 99.99/month
            </p>
            <p>Suggested payments with 6 months special financing</p>
          </div>

          <hr className="w-[60%] my-4" />

          <div>
            <p className="font-bold text-xl my-2">Choose a color</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-blue-200 hover:border-2 hover:border-blue-200 rounded-full flex justify-center items-center">
                <span
                  className="w-10 h-10 rounded-full z-10 shadow"
                  style={{
                    background: "linear-gradient( #dc2626 49%, #fecdd3 51% )",
                  }}
                ></span>
              </div>
              <div className="w-12 h-12 hover:border-2 hover:border-blue-200 rounded-full flex justify-center items-center">
                <span
                  className="w-10 h-10 rounded-full z-10 shadow"
                  style={{
                    background: "linear-gradient( #e5e7eb 49%, #374151 51% )",
                  }}
                ></span>
              </div>
              <div className="w-12 h-12 hover:border-2 hover:border-blue-200 rounded-full flex justify-center items-center">
                <span
                  className="w-10 h-10 rounded-full z-10 shadow"
                  style={{
                    background: "linear-gradient( #d1d5db 49%, #f3f4f6 51% )",
                  }}
                ></span>
              </div>
              <div className="w-12 h-12 hover:border-2 hover:border-blue-200 rounded-full flex justify-center items-center">
                <span
                  className="w-10 h-10 rounded-full z-10 shadow"
                  style={{
                    background: "linear-gradient( #f3f4f6 49%, #e7e5e4 51% )",
                  }}
                ></span>
              </div>
              <div className="w-12 h-12 hover:border-2 hover:border-blue-200 rounded-full flex justify-center items-center">
                <span
                  className="w-10 h-10 rounded-full z-10 shadow"
                  style={{
                    background: "linear-gradient( #374151 49%, #e5e7eb 51% )",
                  }}
                ></span>
              </div>
            </div>
          </div>

          <hr className="w-[60%] my-4" />

          <div className="flex items-center gap-4 mt-4">
            <div className="bg-slate-100 px-4 py-2 rounded-full flex justify-between items-center gap-4 font-medium">
              <AiOutlineMinus className="cursor-pointer" />
              <span>1</span>
              <AiOutlinePlus className="cursor-pointer" />
            </div>
            <div className="text-sm font-semibold">
              <p>
                Only <span className="text-[#fc934a]">12 items</span> Left!{" "}
              </p>
              <p>Don&apos;t miss it</p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-6 font-medium">
            <button className="py-2 px-6 bg-green-800 text-white border border-green-800 transition-all duration-200 hover:border-green-800 hover:bg-green-800 hover:text-white rounded-full">
              Buy Now
            </button>
            <button className="py-2 px-6 bg-white text-green-800 border border-green-800 transition-all duration-200 hover:border-green-800 hover:bg-green-800 hover:text-white rounded-full">
              Add to Cart
            </button>
          </div>

          <div className="mb-6 mt-10 flex flex-col ">
            <div className="flex items-start gap-6 p-4 border">
              <FiTruck size={28} className="text-[#fc934a]" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="underline">
                  Enter your Postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-4 border border-t-0">
              <RiInboxArchiveLine size={28} className="text-[#fc934a]" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="">
                  Free 30days Delivery Returns.{" "}
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
