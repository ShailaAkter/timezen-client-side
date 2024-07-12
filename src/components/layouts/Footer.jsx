import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContainerBox from "../containers/ContainerBox";

const Footer = () => 
{
  return (
    <div className="bg-gray-900 mt-96 ">
        <ContainerBox>
            <div className="py-14">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <Link
                            to="/"
                            aria-label="Go home"
                            title="TIMEZEN"
                            className="inline-flex items-center">
                                
                            <svg
                            className="w-8 text-slate-200"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none">

                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-slate-200 uppercase">
                                TIMEZEN
                            </span>
                        </Link>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-slate-400">
                                Discover the finest collection of luxury watches at TIMEZEN. Since 1990 each piece is crafted with precision and elegance.
                            </p>
                            <p className="mt-4 text-sm text-slate-400">
                                Experience the timeless beauty and exceptional craftsmanship that defines our collection.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide text-slate-400">Menu</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                    to="/"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="/shop"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="/offers"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Offers
                                    </Link>
                                </li>
                                <li>
                                <Link
                                    to="/services"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold tracking-wide text-slate-400">Brands</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                    to="/brand/rolex"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Rolex
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="/brand/seiko"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Seiko
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="/brand/fossil"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Fossil
                                    </Link>
                                </li>
                                <li>
                                <Link
                                    to="/brand/casio"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Casio
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold tracking-wide text-slate-400">Brands</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                    to="/brand/kelvinklein"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Kelvin Klein
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="/brand/balmain"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Balmain
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="/brand/smartwatch"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        SmartWatch
                                    </Link>
                                </li>
                                <li>
                                <Link
                                    to="/brand/others"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Others
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold tracking-wide text-slate-400">Contact</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <p
                                    to="/"
                                    className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Address: Gulshan, Dhaka
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Phone: (+880) 654-3210
                                    </p>
                                </li>
                                <li>
                                    <p className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                                        Email: info@timezen.com
                                    </p>
                                </li>
                            </ul>
                        </div>
        
                    </div>
                </div>

                <div className="flex flex-col justify-between pt-5 border-t border-slate-700 sm:flex-row">
                    <p className="text-sm text-slate-500">
                        © Copyright 2020 TIMEZEN. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <Link
                        to="/www.facebook.com"
                        className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                            <FaFacebook size={24} />
                        </Link>
                        <Link
                        to="/www.twitter.com"
                        className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                            <FaTwitter size={24} />
                        </Link>
                        <Link
                        to="/www.instagram.com"
                        className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                            <FaInstagram size={24} />
                        </Link>
                        <Link
                        to="/www.linkedin.com"
                        className="text-slate-400 transition-colors duration-300 hover:text-slate-300">
                            <FaLinkedin size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </ContainerBox>
    </div>
  )
}

export default Footer