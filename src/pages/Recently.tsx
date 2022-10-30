import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Recently = () => {
    return (
        <div className="m-3">

            <h1 className="text-gray-800 text-4xl mb-2">Recently Page!</h1>

            <div className="flex gap-1">

                <div className="bg-blue-600 border-blue-300 py-1 px-2 rounded hover:bg-blue-800 cursor-pointer">
                    <Link to={"/"} >
                        <p className="text-sm font-medium text-white">Go to Home</p>
                    </Link>
                </div>

                <div className="bg-blue-600 border-blue-300 py-1 px-2 rounded hover:bg-blue-800 cursor-pointer">
                    <Link to={"/user"} >
                        <p className="text-sm font-medium text-white">Go to user</p>
                    </Link>
                </div>

                <div className="bg-blue-600 border-blue-300 py-1 px-2 rounded hover:bg-blue-800 cursor-pointer">
                    <Link to={"/recently"}>
                        <p className="text-sm font-medium text-white">Go to Recently</p>
                    </Link>
                </div>

                <div className="bg-blue-600 border-blue-300 py-1 px-2 rounded hover:bg-blue-800 cursor-pointer">
                    <Link to={"/someplace"}>
                        <p className="text-sm font-medium text-white">Go to someplace</p>
                    </Link>
                </div>

                <div className="bg-blue-600 border-blue-300 py-1 px-2 rounded hover:bg-blue-800 cursor-pointer">
                    <Link to={"news"} >
                        <p className="text-sm font-medium text-white">Go to News</p>
                    </Link>
                </div>


            </div>

            <Outlet />

        </div>
    )
}

export default Recently