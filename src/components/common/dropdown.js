import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { logout } from '../../store/actions/authAction';
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';
function NavDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout(() => {
      history.push('/auth/login');
    }));
  };

  return (
    <div className="d-flex p-2">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className='bg-transparent border-none shadow-none w-fit'>
          <div className="flex gap-8 items-center">
            {/* <img className='w-11 h-11 rounded-full' src={logo} alt="" /> */}
            <FaUserCircle className='text-primary' size={35} />

          </div>
        </DropdownToggle>
        <DropdownMenu>
          <div className="h-full">
            <button
              onClick={handleLogout}
              className='px-2 flex  items-center gap-x-3 rounded-lg text-primary text-lg font-bold ml-1'>
              Logout
              <MdOutlineLogout className='text-primary' />
            </button>

          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default NavDropDown;

