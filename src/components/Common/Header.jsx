import React from 'react'
import { useWindowScroll } from "@uidotdev/usehooks";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const [{ x, y }, scrollTo] = useWindowScroll();
  const location = useLocation();

  const isTransparent = _ => {
    if (y > 20) {
      return `bg-light shadow-md fixed opacity-95 transition duration-300 z-20`;
    } else {
      return `shadow-md fixed opacity-95 transition duration-300 z-20`
    }
  }

  isTransparent();

  return (
    <div
      className={`h-14 flex items-center ${location.pathname === '/' ? isTransparent() : 'sticky'
        } top-0 w-full z-20`}
    >
      <div className=' w-[95%] md:w-[65%] mx-auto flex justify-between items-center '>
        <Link to={'/'}>
          <div className=' flex items-center gap-1 cursor-pointer '>
            <span className=' text-xl md:text-2xl font-semibold '>
              <span className=' text-primary '>Phyo</span>Z
            </span>
          </div>
        </Link>
        <div>
          <ul className=' flex gap-10 font-bold '>
            <li>
              <NavLink to={'/'} className=' nav-item hidden md:block ' activeclassname="active">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header