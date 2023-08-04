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
import "./setting.css";
import { useRouter } from "next/navigation";

export default function Home() {
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
        <div className="  bg-slate-100 grid grid-cols-3 gap-3 w-full mt-5">
          <div className=" bg-gray-200 mb-5 py-4 px-6">
            <div className=" text-black font-serif cursor-pointer">
              <h2 className=" text-2xl pb-2 ">User settings</h2>
              <span className=" text-slate-500">
                fill down your personal info.
              </span>
              <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
            </div>
            <div className="w-full pt-4 font-serif cursor-pointer">
              <h2 className=" text-2xl text-black">Personal Info</h2>
              <div className="flex flex-row mt-3 mb-3 gap-3">
                <input
                  placeholder="First Name"
                  type="text"
                  className=" bg-transparent p-2 focus:outline-none border border-slate-500 text-slate-500 h-8 w-1/2 text-sm "
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  className=" bg-transparent p-2 focus:outline-none border border-slate-500 text-slate-500 h-8 w-1/2 text-sm"
                />
              </div>
              <input
                placeholder="Country"
                type="text"
                className=" bg-transparent p-2 focus:outline-none border border-slate-500 text-slate-500 h-8 text-sm flex items-center w-full"
              />
              <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
              <div className=" cursor-pointer">
                <h2 className=" text-2xl text-black mt-4">Notifications</h2>
                <div className=" text-black mt-3">
                  <div className=" text-black mt-3 flex flex-row w-full">
                    <p className=" mb-2">Weekly Reports</p>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className=" text-black mt-3 flex flex-row w-full">
                    <p className=" mb-2">Pull Requests</p>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto ">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className=" text-black mt-3 flex flex-row w-full">
                    <p>Deployment Triggers</p>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className=" w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
                <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
                <div className=" flex flex-row gap-3 mt-3">
                  <p className=" border border-blue-600 text-white bg-blue-600 h-8 w-1/2 text-sm flex items-center flex-1 pl-2 opacity-90 hover:opacity-100 cursor-pointer">
                    Save
                  </p>
                  <p className=" border border-blue-600 text-blue-600 h-8 w-1/2 text-sm flex items-center flex-1 pl-2 opacity-90 hover:opacity-100 cursor-pointer">
                    Cancel
                  </p>
                </div>
                <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
                <div>
                  <h2 className=" text-2xl text-black mt-4">Danger Zone</h2>
                </div>
                <div className=" grid grid-cols-2 mt-3">
                  <p className=" border border-red-600 text-white bg-red-600 w-36 h-9 text-sm flex items-center flex-1 pl-2 opacity-90 hover:opacity-100 cursor-pointer">
                    Delete Account
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 mb-12 py-4 px-6">
            <div className=" text-black font-serif cursor-pointer">
              <h2 className=" text-2xl pb-2 ">Automation</h2>
              <span className=" text-slate-500">
                Save time by enabling these settings.
              </span>
              <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
            </div>
            <div className="w-full pt-4 font-serif cursor-pointer text-black text-sm">
              <h2 className=" text-2xl text-black pb-3">Security</h2>
              <div className=" flex flex-row justify-between pb-3">
                <p>Run security checks upon log in</p>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div className=" flex flex-row justify-between pb-3">
                <p>Rotate private keys every months</p>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div className=" flex flex-row justify-between pb-3">
                <p>Automatically shut down idle instances</p>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div className=" flex flex-row justify-between pb-3">
                <p>Enforce two-factor authentication</p>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div className=" flex flex-row justify-between pb-3">
                <p>Always upgrade vulnerable dependencies</p>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
              <div className=" cursor-pointer">
                <h2 className=" text-2xl text-black mt-4">
                  Password Policy Strictness
                </h2>
                <div className=" text-black mt-3">
                  <div className=" text-black mt-3 flex flex-row w-full justify-around">
                    <p className=" mb-2">Less</p>
                    <input
                      id="customRange1"
                      type="range"
                      defaultValue={50}
                      min={0}
                      max={100}
                      className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-runnable-track]:self-center [&::-webkit-slider-runnable-track]:h-[10px] [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black w-48"
                    ></input>
                    <p className=" mb-2">More</p>
                  </div>
                </div>
                <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
                <div>
                  <h2 className=" text-2xl text-black mt-4">Data Backups</h2>
                </div>
                <div className=" flex flex-row justify-between pb-3 mt-2">
                  <p>Store to different regions</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-black bg-black border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                </div>
                <div className=" flex flex-row justify-between pb-3 mt-1">
                  <p>Create duplicates in same region</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-black bg-black border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                </div>
                <div className=" flex flex-row justify-between pb-3 mt-1">
                  <p>Soft backups on instances </p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-black bg-black border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 mb-12 mr-4">
            <div className=" bg-gray-200 mb-12 py-4 px-6">
              <div className=" text-black font-serif cursor-pointer">
                <h2 className=" text-2xl pb-2 ">Billing</h2>
                <span className=" text-slate-500">
                  Please update your billing info.
                </span>
                <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
              </div>
              <div className="w-full pt-4 font-serif cursor-pointer">
                <h2 className=" text-2xl text-black">Credit card</h2>
                <div className="flex flex-col mt-3 mb-3 gap-3">
                  <input
                    placeholder="Card Number"
                    type="text"
                    className=" bg-transparent p-2 focus:outline-none border border-slate-500 text-slate-500 h-8 text-sm flex items-center w-full"
                  />
                </div>
                <div className="flex flex-row mt-3 mb-3 gap-3 justify-between">
                  <input
                    placeholder="Expiration MM / YY"
                    type="text"
                    className=" bg-transparent p-2 focus:outline-none border border-slate-500 text-slate-500 h-8 w-full text-sm"
                  />
                  <input
                    placeholder="cvc"
                    type="text"
                    className=" bg-transparent p-2 focus:outline-none border border-slate-500 text-slate-500 h-8 w-1/4 text-sm"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-3 mt-3">
                <p className=" border border-blue-600 text-white h bg-blue-600 h-8 w-1/2  text-sm flex items-center pl-2 opacity-90 hover:opacity-100 cursor-pointer">
                  Update plan
                </p>
              </div>
              <div className=" bg-neutral-400 flex-1 h-1 mt-4"></div>
              <div>
                <h2 className=" text-2xl text-black mt-4  font-serif">
                  Danger Zone
                </h2>
              </div>
              <div className=" grid grid-cols-2 mt-3">
                <p className=" border border-red-600 text-white bg-red-600 w-36 h-9 text-sm flex items-center flex-1 pl-2 opacity-90 hover:opacity-100 cursor-pointer">
                  Cancel plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
