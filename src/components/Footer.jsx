import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full bg-gray-700/50'>
            <footer className="text-white body-font">
                <div className="container px-4 py-3 mx-auto flex  items-center sm:flex-row flex-col justify-center ">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center">    
                        <span className="ml-3 text-xl">Password Manager</span>
                    </a>
                    <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025  —
                        <a href="https://github.com/25nisarg" className=" ml-1" rel="noopener noreferrer" target="_blank">@Nisarg</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
