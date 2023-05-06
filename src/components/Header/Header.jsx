import React, { useState } from "react"
import Button from "../Button";
import logo from '../../assets/images/logo.svg'

const Header = () => {
    let Links = [
        { name: "Features", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Resources", link: "/" }
    ]
    let [open, setOpen] = useState(false);
    return (
        <header className="z-10 w-full fixed top-0 left-0">
            <nav className="md:flex justify-between items-center bg-white py-6 md:px-10 px-7 max-w-screen-lg mx-auto">
                <a href="/"><img src={logo} alt="Logo" /></a>

                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {open ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                </div>
                <div className={`md:justify-between md:w-full md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-white md:z-auto z-[-1] left-0 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-250px]"} bg-[#3b3054] w-full max-w-xs rounded-xl`}>
                    <ul className="md:flex gap-8 mx-8">
                        {
                            Links.map((link) => (
                                <li key={link.name} className="my-4 mx-auto w-fit">
                                    <a href={link.link} className="md:text-gray-400 text-white md:hover:text-gray-900 hover:text-opacity-50 ease-in duration-300 font-bold text-sm">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="md:flex">
                        <button className="block md:text-gray-400 text-white md:hover:text-gray-900 hover:text-opacity-50 ease-in duration-300 font-bold text-sm">Login</button>
                        <Button>Sign up</Button>
                    </ul>
                </div>


            </nav>
        </header>
    )
}

export default Header