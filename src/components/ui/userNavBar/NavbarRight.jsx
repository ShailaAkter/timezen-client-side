import Navlink from './Navlink'
import {FaOpencart, FaRegUser } from "react-icons/fa6"
import { FaSearch} from "react-icons/fa"
import { useState } from 'react'
import UserSubCategory from './UserSubCategory'
import SearchInput from '../../forms/SearchInput'
import { useCart } from '../../../hooks/cart'
import SmallerSearchInput from '../../forms/SmallerSearchInput'



const NavbarRight = ({handleCart}) => 
{
  const [isUserSubmenuOpen, setIsUserSubmenuOpen] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [cart] = useCart();

  return (
    <>

      {/* nav Icons for larger screen */}
      <div className="hidden md:hidden lg:flex justify-items-center items-center ">

          <ul className="space-x-4 flex pr-8 transition-all"> 
            <Navlink to="services">Services</Navlink>
            <Navlink to="contact">Contact</Navlink>
          </ul>

          <ul className="space-x-2 flex items-center">
            <span
            onClick={() => setIsSearchBar(true)}>
              <span className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
                <FaSearch size={18} title='search'/>
                {
                  isSearchBar &&
                  <SearchInput 
                  isSearchBar={isSearchBar} 
                  setIsSearchBar={setIsSearchBar}/>
                }
              </span>
            </span>

            <span 
            onMouseEnter={() => setIsUserSubmenuOpen(true)}
            onMouseLeave={() => setIsUserSubmenuOpen(false)}>
              <span className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
                <FaRegUser size={18}/>
                {
                  isUserSubmenuOpen && 
                  <UserSubCategory/>
                }
              </span>
            </span>
            <span 
            onClick={handleCart}
            className="hover:text-yellow-700 duration-500 transition-all">
            <span className="absolute  flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-yellow-700 rounded-full transform translate-x-2/3 -translate-y-2/3">
            {cart?.length}
          </span>
                <FaOpencart size={22} title='cart'/>
            </span>
          </ul>

      </div>


      {/* nav Icons for smaller screen */}
      <ul className="space-x-2 flex justify-items-center items-center absolute right-5 lg:hidden">
          <span
            onClick={() => setIsSearchBar(true)}>
              <span className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
                <FaSearch size={18} title='search'/>
                {
                  isSearchBar &&
                  <SmallerSearchInput 
                  isSearchBar={isSearchBar} 
                  setIsSearchBar={setIsSearchBar}/>
                }
              </span>
            </span>

        <span 
        onClick={handleCart}
        className="hover:text-yellow-700 relative">
          <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-yellow-700 rounded-full transform translate-x-2/3 -translate-y-2/3">
            {cart?.length}
          </span>
          <FaOpencart size={22} title='cart'/>
        </span>

      </ul>
    </>
  )
}

export default NavbarRight