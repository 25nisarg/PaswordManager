import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({ website: "", uname: "", Password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])
    const copyText = (text) => {
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
        navigator.clipboard.writeText(text)
    }

    const savePassword = () => {
        if (form.website && form.Password && form.uname) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, form])
            setform({ website: "", uname: "", Password: "" })
            toast.success('Password Saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
        else {
            toast.error('Enter Each Details', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }

    }
    const editPassword = (id) => {
        console.log(id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }
    const deletePassword = (id) => {
        let toDel = confirm("Do you want to Delete password")
        if (toDel) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast.success('Password Deleted!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                    <input value={form.Password} onChange={handleChange} type={showPassword ? "text" : "password"} id="Password" name="Password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:text-white focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={savePassword} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg flex justify-center gap-2">
                    Add <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                    >
                    </lord-icon>
                </button>
            </div>
            <div className="flex lg:w-2/3 w-full flex-row my-2 mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-0 sm:px-0 justify-start align-middle">
                <input type="checkbox" name="showPassword" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                <span className='text-white'> Show password</span>
            </div>
            <div className='passwords flex flex-col lg:w-2/3 w-full sm:flex-col my-2 mx-auto px-8 sm:w-90vw sm:space-y-0 space-y-4 sm:px-0 items-center bg-white/15 rounded-xl overflow-hidden gap-4 py-4'>
                <h1 className='text-white text-3xl font-bold'>Your Passwords</h1>
                {passwordArray.length === 0 && <div className='text-white'>No Passwords to Show</div>}
                {passwordArray.length != 0 &&
                    <table className="table-auto text-white text-center">
                        <thead>
                            <tr>
                                <th className='border-b-2 border-t-2 p-2 text-xl'>Website</th>
                                <th className='border-b-2 border-t-2 p-2 text-xl'>Username</th>
                                <th className='border-b-2 border-t-2 p-2 text-xl'>Password</th>
                                <th className='border-b-2 border-t-2 p-2 text-xl'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {passwordArray.map((item, index) => {
                                return (<tr key={index}>
                                    <td className='border-b border-white/40 p-2'>{item.website}</td>
                                    <td className='border-b border-white/40 p-2'>{item.uname}</td>

                                    <td className='border-b border-white/40 p-2 ' onClick={() => copyText(item.Password)}>
                                    <div className='flex justify-center align-middle cursor-pointer'>
                                    {showPassword ? item.Password : "****"} <lord-icon
                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                        trigger="hover"
                                        colors="primary:#ffffff,secondary:#ffffff"
                                        style={{ "width": "22px" }}
                                        >
                                    </lord-icon>
                                        </div>
                                    </td>
                                    <td className='border-b border-white/40 p-2'>
                                        <button className='cursor-pointer' onClick={() => editPassword(item.id)}>Edit</button><span className='invisible md:visible'> | </span>
                                        <button className='cursor-pointer' onClick={() => deletePassword(item.id)}>Delete</button>
                                    </td>
                                </tr>)
                            })}

                        </tbody>
                    </table>}
            </div>

        </>
    )
}

export default Manager
