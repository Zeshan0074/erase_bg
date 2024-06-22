import React, { useState } from 'react'
// import { Context } from "../../context/index";
import logo from '../../assets/img/demo.png'
import NavDropDown from "../common/dropdown"
import { useDispatch } from 'react-redux'
import { toggleNav } from '../../store/actions/Action'
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  const dispatch = useDispatch()
  const [navbar, setNavbar] = useState(true)
  let toggle = () => {
    setNavbar(!navbar)
    dispatch(toggleNav(navbar))
  }

  return (
    <div className='main bg-white border-b border-neutral-200 top-0 w-[100%] fixed h-[76px] inline-flex right-0 z-50 left-0 md:px-6 px-2 justify-between'>
      <div className="first flex gap-6 items-center">
        <div className="border-r pr-6 border-[#e4e4e4]">
          <IoIosMenu
            size={30}
            className='md:hidden'
            onClick={toggle} />

        </div>
        <div className='flex items-center gap-x-4'>
          <img src={logo} className=' w-8 h-8 ' />
          <h1 className="text-2xl font-bold leading-8 text-primary pt-[2px] cursor-pointer ">EraseBg</h1>
        </div>


      </div>
      <div className="second flex  items-center gap-2 justify-start">
      </div>
      <NavDropDown />
    </div>
  )
}

export default Navbar
