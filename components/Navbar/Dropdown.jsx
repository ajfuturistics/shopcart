"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Dropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      axios
        .get("https://api.escuelajs.co/api/v1/categories")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    };

    getCategories();
  }, []);

  return (
    <li className="flex items-center relative group">
      <span className="mr-1">Categories</span>
      <BsChevronDown />
      <ul class="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
        {categories &&
          categories.map((category) => (
            <li key={category.id} class="text-sm hover:bg-slate-100 leading-8">
              <Link href="/">{category.name}</Link>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default Dropdown;
