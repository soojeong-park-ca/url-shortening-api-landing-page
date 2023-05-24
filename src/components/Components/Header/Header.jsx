import React, { useState } from "react"
import Button from "../Button";
import logoBlack from '../../assets/images/logo-black.svg'

const Header = () => {
    let links = [
        { name: "Features", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Resources", link: "/" }
    ]
    let [open, setOpen] = useState(false)

    return (
        <header className="z-10 w-full fixed top-0 left-0 bg-white">
            {/* nav is full width element  */}
            <nav className="md:flex md:justify-between items-center bg-white py-6 md:px-10 px-7 max-w-screen-lg mx-auto">
                <a href="/"><img src={logoBlack} alt="Logo" /></a>

                {/* onClick toggles the menu on smaller screens */}
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

                {/* maps over the links array and also alters the design on marge or small screen */}
                <div className={`nav-box md:justify-between text-center md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-white md:z-auto z-[-1] left-0 md:pl-0 md:p-0 p-4 md:opacity-100 transition-opacity ${open ? "opacity-100" : "opacity-0"} bg-[#3b3054] md:max-w-6xl max-w-xs w-full rounded-xl md:mt-0 mt-6 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:translate-x-0 md:-translate-y-0`}>
                    <ul className="md:flex gap-8 mx-8">
                        {
                            links.map((link) => (
                                <li key={link.name} className="my-4 mx-auto w-fit">
                                    <a href={link.link} className="md:text-gray-400 text-white md:hover:text-gray-900 hover:text-opacity-50 ease-in duration-300 font-bold text-sm">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <hr className="md:hidden h-0.5 my-4 bg-gray-200 opacity-10 border-0 rounded" />

                    {/* I used buttons because its not linking to anywhere */}
                    <ul className="md:flex items-center justify-center">
                        <li>
                            <button className="md:text-gray-400 text-white md:hover:text-gray-900 hover:text-opacity-50 ease-in duration-300 font-bold text-sm md:my-0 mb-6 mt-2">Login</button>
                        </li>
                        <li>
                            <Button>Sign up</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header