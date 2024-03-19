import React from "react";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { ImTwitter } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

const PageDetails = () => {
  return (
    <div className="bg-gray-300">
      <div className="text-lg flex flex-col justify-center items-center lg:flex-row lg:mt-20 ">
        <div className=" w-[150px] text-center rounded-md hover:bg-blue-200 mt-5 lg:mr-16">
          <button className="font-bold">Home</button>
        </div>
        <div className=" w-[150px] text-center rounded-md hover:bg-blue-200 mt-5 lg:mr-16">
          <button className="font-bold">About</button>
        </div>
        <div className=" w-[150px] text-center rounded-md hover:bg-blue-200 mt-5 lg:mr-16">
          <button className="font-bold">FAQs</button>
        </div>
        <div className=" w-[150px] text-center rounded-md hover:bg-blue-200 mt-5 lg:mr-16">
          <button className="font-bold">Investors</button>
        </div>
        <div className=" w-[150px] text-center rounded-md hover:bg-blue-200 mt-5 lg:mr-16">
          <button className="font-bold">Careers</button>
        </div>
        <div className=" w-[150px] text-center rounded-md hover:bg-blue-200 mt-5 lg:mr-16">
          <button className="font-bold">Contact US</button>
        </div>
      </div>
      <div className="flex text-lg relative w-[80vw] ml-8 lg:ml-32 pt-10">
        <div>
          <button>Follow Us On</button>
        </div>
        <div className="absolute right-0">
          <button>Download From</button>
        </div>
      </div>
      <div className="  w-[96vw] h-[5px] bg-white border rounded-xl  ml-1 lg:ml-3 mt-3 lg:mt-5 hover:bg-blue-300 "></div>

      <div className="flex flex-col lg:flex-row text-lg relative w-[80vw] ml-8 lg:ml-32 pt-10">
        <div className="flex ">
          <div className="w-[30px] h-[30px] pl-1 pt-2 border text-center rounded-md">
            <ImFacebook />
          </div>
          <div className="w-[30px] h-[30px] pl-1 pt-2 border text-center rounded-md">
            <IoLogoInstagram />
          </div>
          <div className="w-[30px] h-[30px] pl-1 pt-2 border text-center rounded-md">
            <ImTwitter />
          </div>
          <div className="w-[30px] h-[30px] pl-1 pt-2 border text-center rounded-md">
            <BsYoutube />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row absolute right-0">
          <div>
            <button>
              <img src="./images/googlepayimg.svg" alt="" />
            </button>
          </div>
          <div>
            <button>
              <img src="./images/appleimg.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="  w-[96vw] h-[5px] bg-white border rounded-xl  ml-1 lg:ml-3 mt-16 lg:mt-5 hover:bg-blue-300 mb-10 "></div>
      <div className="text-center  mb-4">
        <p>©NAME - All rights reserved</p>
      </div>
    </div>
  );
};

export default PageDetails;
