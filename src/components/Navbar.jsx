import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <header className="body-font bg-white">
                <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center align-middle text-center">
                        <img src="../../../public/Favicon.png" width={25}/>
                    <span className="flex title-font font-medium items-center text-gray-900 mb-0 ">
                        <span className="ml-3 text-2xl">Password Manager</span>
                    </span>
                </div>
            </header>
        </nav>
    )
}

export default Navbar
