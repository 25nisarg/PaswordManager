import React, { useEffect, useState } from 'react'

const Manager = () => {
    const [form, setform] = useState({ website: "", uname: "", Password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])

    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col my-2 mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative grow w-full">
                    <label htmlFor="website" className="leading-7 text-sm text-white">Website</label>
                    <input value={form.website} onChange={handleChange} type="text" id="website" name="website" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:text-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative grow w-full">
                    <label htmlFor="uname" className="leading-7 text-sm text-white">User Name</label>
                    <input value={form.uname} onChange={handleChange} type="text" id="uname" name="uname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:text-white focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative grow w-full">
                    <label htmlFor="Password" className="leading-7 text-sm text-white">Password</label>
                    <input value={form.Password} onChange={handleChange} type="text" id="Password" name="Password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:text-white focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={savePassword} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg flex justify-center gap-2">
                    Add <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                    >
                    </lord-icon>
                </button>
            </div>
            <div className='passwords flex flex-col lg:w-2/3 w-full sm:flex-col my-2 mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center bg-white/15 rounded-xl overflow-hidden gap-4 py-4'>
                <h1 className='text-white text-3xl font-bold'>Your Passwords</h1>
                {passwordArray.length === 0 && <div className='text-white'>No Passwords to Show</div>}
                {passwordArray.length != 0 && 
                <table className="table-auto  text-white text-center">
                    <thead>
                        <tr>
                            <th className='border-b-2 p-2'>Website</th>
                            <th className='border-b-2 p-2'>Username</th>
                            <th className='border-b-2 p-2'>Password</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {passwordArray.map((item,index)=>{
                        return (<tr key={index}>
                            <td className='w-50  border-b border-white/40'>{item.website}</td>
                            <td className='w-50  border-b border-white/40'>{item.uname}</td>
                            <td className='w-50  border-b border-white/40'>{item.Password}</td>
                        </tr>)
                        })}
                       
                    </tbody>
                </table>}
            </div>
        </>
    )
}

export default Manager
