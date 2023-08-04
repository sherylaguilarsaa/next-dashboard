"use client";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi";
import { MdModeEditOutline } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineUnorderedList, AiOutlineArrowRight } from "react-icons/ai";
import { GiHouse } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { TbRotate360 } from "react-icons/tb";
import { CgMathPlus } from "react-icons/cg";
import "./page.css";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <div
        id="header"
        className="flex flex-row w-full h-16 bg-black justify-between items-center"
      >
        <h2 className=" font-thin text-xl text-white ml-3 cursor-default">
          Carbon Cloud Dashboard
        </h2>
        <div className=" bg-zinc-800 h-11 flex flex-row w-fit items-center">
          <input
            placeholder="Search resources..."
            type="search"
            className=" bg-transparent p-2 w-96 focus:outline-none"
          />
          <IoSearch
            size={23}
            className=" mr-2 opacity-60 hover:opacity-100 cursor-pointer"
          />
        </div>
        <div className="flex flex-row w-24 justify-evenly">
          <HiOutlineBell
            size={23}
            className="opacity-60 hover:opacity-100 cursor-pointer"
          />
          <MdModeEditOutline
            size={23}
            className="opacity-60 hover:opacity-100 cursor-pointer"
          />
          <button onClick={() => router.push("/settings")}>
            <BsPersonFill
              size={23}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full h-screen bg-slate-100">
        <div
          id="menu"
          className=" bg-white w-14 h-screen flex flex-col items-center cursor-pointer"
        >
          <AiOutlineUnorderedList
            size={25}
            className=" text-slate-950 mt-4 opacity-60 hover:opacity-100 cursor-pointer"
          />
          <button onClick={() => router.push("/dashboard")}>
            <GiHouse
              size={25}
              className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
            />
          </button>
          <FaCloud
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer "
          />
          <FaCoins
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
          />
          <IoCodeSlashOutline
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
          />
          <MdPeopleAlt
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
          />
          <TbRotate360
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
          />
          <CgMathPlus
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 flex-grow bg-white pr-4 pt-3 cursor-default">
          <div className=" pl-5 bg text-black bg-gray-200  flex flex-col ">
            <h2 className=" text-2xl pt-3">AI</h2>
            <p className=" mt-2">Work efficiently with AI.</p>
            <div className=" w-40 h-10  bg-slate-300 mt-8 flex flex-row items-center hover:border border-blue-600 z-10 cursor-pointer">
              <p className=" mx-2 flex text-blue-800 contrast-100">
                Get started
              </p>
              <AiOutlineArrowRight
                size={25}
                className=" text-blue-800 mt-4 mb-4 ml-4"
              />
            </div>
          </div>
          <div className="pl-5 bg text-black bg-gray-200  flex flex-col">
            <h2 className=" text-2xl pt-3">Infrastructure</h2>
            <p className=" mt-2">Enhance your infrastructure.</p>
            <div className=" w-40 h-10 bg-slate-300 mt-8 flex flex-row items-center hover:border border-blue-600 z-10 cursor-pointer">
              <p className=" mx-2 flex text-blue-800 contrast-100">
                Get started
              </p>
              <AiOutlineArrowRight
                size={25}
                className=" text-blue-800 mt-4 mb-4 ml-4"
              />
            </div>
          </div>
          <div className=" pl-5 bg text-black bg-gray-200 flex flex-col">
            <h2 className=" text-2xl pt-3">Services</h2>
            <p className=" mt-2">Check out all our services and status.</p>
            <div className=" w-40 h-10  bg-slate-300 mt-8 flex flex-row items-center hover:border border-blue-600 z-10 cursor-pointer">
              <p className=" mx-2 flex text-blue-800 contrast-100">
                Get started
              </p>
              <AiOutlineArrowRight
                size={25}
                className=" text-blue-800 mt-4 mb-4 ml-4"
              />
            </div>
          </div>

          <div className=" pl-5 text-white flex flex-col relative col-start-1 row-start-2 col-span-2">
            <Image
              fill={true}
              src={require("../../assets/images/dashboardPanelBlue.png")}
              alt="blue panel dashboard"
              className=" object-cover z-0"
            />
            <h2 className=" text-2xl pt-3 z-10">Smart Grid</h2>
            <p className=" mt-2 z-10">
              try out our newest feature Smart Grid. Keep all your stuff in
              control.
            </p>
            <div className=" w-40 h-10 bg-blue-600 mt-8 flex flex-row items-center z-10 hover:border border-white cursor-pointer">
              <p className=" mx-2 flex text-white z-10">Get started</p>
              <AiOutlineArrowRight
                size={25}
                className=" text-white mt-4 mb-4 ml-4"
              />
            </div>
          </div>
          <div className=" pl-5 bg text-black bg-gray-200 flex flex-col ">
            <h2 className=" text-2xl pt-3">Profile</h2>
            <p className=" mt-2">Set up your personal profile.</p>
            <div className=" w-40 h-10 bg-slate-300 mt-8 flex flex-row items-center hover:border border-blue-600 z-10 cursor-pointer">
              <p className=" mx-2 flex text-blue-800 contrast-100">
                Get started
              </p>
              <AiOutlineArrowRight
                size={25}
                className=" text-blue-800 mt-4 mb-4 ml-4"
              />
            </div>
          </div>

          <div className=" pl-5 bg text-black bg-gray-200 flex flex-col ">
            <h2 className=" text-2xl pt-3">Security</h2>
            <p className=" mt-2">Finish setting up your security settings.</p>
            <div className=" w-40 h-10 bg-slate-300 mt-8 flex flex-row items-center hover:border border-blue-600 z-10 cursor-pointer">
              <p className=" mx-2 flex text-blue-800 contrast-100">
                Get started
              </p>
              <AiOutlineArrowRight
                size={25}
                className=" text-blue-800 mt-4 mb-4 ml-4"
              />
            </div>
          </div>
          <div className="pl-5 text-white flex flex-col  relative col-start-2 row-start-3 col-span-2">
            <Image
              fill={true}
              src={require("../../assets/images/dashboardPanelRed.png")}
              alt="red panel dashboard"
              className=" object-cover z-0"
            />
            <h2 className=" text-2xl pt-3 z-10">Fast Data Transfer</h2>
            <p className=" mt-2 z-10">
              Save time and money thanks to Fast Data Transfer.
            </p>
            <p className=" z-10">Learn more.</p>
            <div className=" w-40 h-10 bg-blue-600 mt-8 flex flex-row items-center text-white hover:border border-white z-10 cursor-pointer">
              <p className=" mx-2 flex text-white z-10">Get started</p>
              <AiOutlineArrowRight
                size={25}
                className=" text-white mt-4 mb-4 ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
