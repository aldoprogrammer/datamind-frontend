import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoTopBar from '../assets/logo-removebg-preview.png'
import { Link, useNavigate } from "react-router-dom";
import { DefaultSidebar } from "./DefaultSidebar";
import { SidebarMobile } from "./SidebarMobile";
import axios from '../config/axiosConfig'
import { useAldoAlert } from "aldo-alert";
function NavList() {
  const navigate = useNavigate();
  const { showAldoAlert } = useAldoAlert();

  const handleLogout = async () => {
    try {
      showAldoAlert('You successfully logged out!', 'success');
      sessionStorage.removeItem('loginResponse'); // Clear refresh token from session storage
      navigate('/'); // Redirect to the login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <div className="flex items-center gap-4">
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
          <div>
            <Typography variant="h6">
              Aldo lata Soba
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Front End Developer
            </Typography>
          </div>
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium cursor-pointer"
        onClick={handleLogout}
      >
        <p className="flex items-center hover:text-blue-500 transition-colors">
          Logout
        </p>
      </Typography>
    </ul>
  );
}

export function TopBar() {
 
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="w-full px-6 py-3 
    shadow-none rounded-none">
      <div className="flex items-center 
      justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Link to='/'>
            <img src={LogoTopBar} className="w-[160px] h-[140px]" />
          </Link>
        </div>
        <div className="block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <SidebarMobile />
      </Collapse>
    </Navbar>
  );
}
