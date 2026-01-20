import React from 'react'
import { Link } from "react-router-dom"
import mylogo from '../Myimages/mylogo.png'
import { BsSearch } from 'react-icons/bs'
import { BiHeart, BiLock } from 'react-icons/bi'



const Header = () => {


    return (
        <div>
            <nav className='w-full bg-white sticky py-0 shadow border-b-2 border-black'>
                <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                    <a href="https://react.dev" className="flex items-center gap-2">
                        {/* <img src={mylogo} className="h-9 rounded-lg" alt="Flowbite Logo" /> */}
                        <span className="self-center text-black text-2xl font-bold whitespace-nowrap">QUENX.</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {/* <span class=" text-white hover:text-black text-2xl"></span> */}
                        <div className='flex justify-center items-center space-x-3'>

                        <BsSearch color='black' size={20}/>
                        <BiHeart color='black' size={20} />
                        <BiLock color='black' size={20}/>
                        {/* <button type="button" className="text-black bg-[#F5D042] hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-4 py-2 text-center">Hire me</button> */}
                        </div>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link to="/" className="block py-2 px-3 md:p-0 text-black hover:text-blue-700 rounded-sm md:bg-transparent md:text-[#F5D042" >HOME</Link>
                            </li>
                            <li>
                                <Link to="/todo" className="block py-2 px-3 md:p-0 text-black hover:text-blue-700 rounded-sm md:bg-transparent md:text-[#F5D042" >TODO</Link>
                            </li>
                            <li>
                                <Link to="/contactpage" className="block py-2 px-3 md:p-0 text-black hover:text-blue-700 rounded-sm md:bg-transparent md:text-[#F5D042" >CONTACT</Link>
                            </li>
                            <li>
                                <Link to="/shopifypage" className="block py-2 px-3 md:p-0 text-black hover:text-blue-700 rounded-sm md:bg-transparent md:text-[#F5D042" >SHOPIFY</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header