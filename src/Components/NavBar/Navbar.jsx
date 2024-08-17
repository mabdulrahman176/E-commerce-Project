import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center  ">
        <div className="flex items-center ">
          <nav className="flex space-x-8  ">
          <Link
              href="/BabyBoy"
              className=" focus:bg-white focus:text-black  py-4 px-4 text-[16px]"
            >
              Baby Boy
            </Link>
          <Link href="/BabyGirls" className="text-[16px] focus:bg-white focus:text-black  py-4 px-4">
              Baby Girls
            </Link>
          <Link href="/MatchingOutfits" className="text-[16px] focus:bg-white focus:text-black  py-4 px-4">
              Matching Outfits
            </Link>
          <Link href="/Toys" className="text-[16px] focus:bg-white focus:text-black  py-4 px-4">
              Toys
            </Link>
          <Link href="/Bags" className="text-[16px] focus:bg-white focus:text-black  py-4 px-4">
              Bags
            </Link>
          <Link href="/HealthCare" className="text-[16px] focus:bg-white focus:text-black py-4 px-4">
              Health Care
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-[16px]">EXTRA 10% OFF ON FIRST ORDER</span>
          <div className="relative">
            <FaRegHeart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="relative">
            <FiShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full px-1">
              1
            </span>
          </div>
          <i className="fa fa-headphones text-xl"></i>
        </div>
      </div>
      <div className="flex justify-between shadow-2xl  text-black items-center bg-white py-2 px-8">
        <h1 className="text-3xl font-bold">SABZSHT</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search the store"
            className="border border-black p-2"
          />
          <button className="absolute right-0 top-0 h-full bg-black text-white p-2">
            <IoSearchOutline className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;