import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <header className="body-font bg-white">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Password Manager</span>
                    </a>
                </div>
            </header>
        </nav>
    )
}

export default Navbar
