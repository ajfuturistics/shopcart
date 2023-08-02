"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProductSlider = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <Image
        className="aspect-square w-full bg-gray-100 rounded-md "
        src={
          Array.isArray(images) && images[activeImage]?.includes("https://")
            ? images[activeImage]
            : "/assets/images/placeholder-image.jpg"
        }
        alt="logo"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="flex justify-start items-center gap-4 self-start overflow-x-scroll">
        {Array.isArray(images) &&
          images.map((imgLink, idx) => (
            <Image
              key={imgLink}
              onClick={() => setActiveImage(idx)}
              className="aspect-square w-20 h-20 bg-gray-100 rounded-md "
              src={
                imgLink?.includes("https://")
                  ? imgLink
                  : "/assets/images/placeholder-image.jpg"
              }
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
            />
          ))}
      </div>
    </div>
  );
};

export default ProductSlider;
