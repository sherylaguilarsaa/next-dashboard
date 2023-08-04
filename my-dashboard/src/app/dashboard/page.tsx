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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <div
        id="header"
        className="flex flex-row w-full h-16 bg-black justify-between items-center"
      >
        <h1 className=" font-thin text-xl text-white ml-3 cursor-default">
          Carbon Cloud Dashboard
        </h1>
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
          <BsPersonFill
            size={23}
            className="opacity-60 hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row w-full min-h-screen bg-slate-100">
        <div
          id="menu"
          className=" bg-white w-14 h-screen flex flex-col items-center cursor-pointer"
        >
          <AiOutlineUnorderedList
            size={25}
            className=" text-slate-950 mt-4 opacity-60 hover:opacity-100 cursor-pointer"
          />
          <GiHouse
            size={25}
            className=" text-slate-950 mt-5 opacity-60 hover:opacity-100 cursor-pointer"
          />
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
        <div className=" bg-gray-300 flex flex-col gap-1 w-full mx-5 my-5">
          <div className=" text-black text-xl w-36 h-14">
            Dashboard
          </div>
          <div className=" bg-purple-400 w-1/2 h-screen">
            
          </div>
          <div>

          </div>
        </div>
      </div>
    </main>
  );
}
