import React from 'react'

function Header() {
    return (
        <nav className="bg-white p-4 flex gap-6">
            <h2 className="font-bold">Shortly</h2>
            <div className="links md:flex md:justify-between w-full">
                <ul className="md:flex gap-4">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <ul className="md:flex gap-4">
                    <li><button>login</button></li>
                    <li><button>signup</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header