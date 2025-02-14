import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-16 px-8 bg-black text-white">
      
      <div className="flex items-center text-2xl font-bold ml-[340px]">
        <Link href="/home" passHref>
      <h1 className="text-[32px] font-poppins font-extrabold leading-[52px] tracking-tight">
        <span className="font-extrabold italic">brand</span>
        <span className="text-[#6F00FF] font-extrabold italic">list</span>{" "} </h1>
        
        </Link>
      </div>
    
      <div className="flex items-center gap-4 mr-[340px]">
      <Link href="/favorites" passHref>
          <img
            src="/images/heart.png"
            alt="Favorites"
            className="w-[20px] h-[20px] cursor-pointer"
          />
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;