
import { Link } from 'react-router-dom';

import React from 'react'
import { SiFastapi } from "react-icons/si"
import { IoIosStats } from "react-icons/io";
import { PiEraserFill } from "react-icons/pi";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

import { useSelector } from 'react-redux';
const Sidebar = () => {
  const { navbar } = useSelector(state => state.reducer);

  console.log("Navbar Value", navbar)
  return (
    /* To Show to Not Slide Bar*/
    <div className={`${navbar ? 'hidden' : 'block'}`}>
      <div
        className="fixed md:hidden z-40 top-0 left-0 right-0 bottom-0  bg-slate-700 backdrop:blur-md opacity-60 "></div>
      <div className="flex h-full z-50 fixed  drop-shadow-2xl md:drop-shadow "> {/* To Show Side All sideBar*/}
        {/* To Set Icon in flex column  */}

        {/*Container To Show Catogery of Icons when Click by Toggle*/}
        <div className={`w-52  h-full overflow-hidden md:overflow-auto bg-white min-h-full border-r border-neutral-200 flex-col justify-start items-start gap-10 inline-flex pl-2 pt-10`}>
          <Link className=' text-decoration-none   ' to='/' > <h1 className=' text-black p-2 px-3 hover:bg-[#25bbe934] w-[180px]  rounded-md flex gap-2 font-semibold text-md items-center   cursor-pointer'> <SiFastapi size={20} className=' text-primary' />Purchased API </h1></Link>
          <Link className=' text-decoration-none   ' to='/payment-cards'> <h1 className=' text-black flex p-2 px-3 hover:bg-[#25bbe934] w-[180px] rounded-md gap-2 font-semibold text-md items-center   cursor-pointer'> <PiEraserFill size={20} className=' text-primary' />Erase BG </h1></Link>
          <Link className=' text-decoration-none  '  to='/stats'> <h1 className=' text-black flex p-2 px-3 hover:bg-[#25bbe934] w-[180px] rounded-md gap-2 font-semibold text-md items-center   cursor-pointer'> <IoIosStats size={20} className=' text-primary' /> Stats</h1></Link>
          <Link className=' text-decoration-none  '  to="/api-documentation"> <h1 className=' text-black flex p-2 px-3 hover:bg-[#25bbe934] w-[180px] rounded-md gap-2 font-semibold text-md items-center   cursor-pointer'> <HiDocumentMagnifyingGlass size={20} className=' text-primary' /> Docs</h1></Link>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
