"use client"
import { useState } from "react"
import { MdInvertColors,MdOutlineInvertColorsOff } from "react-icons/md"

export default function ColorDropdown({changeTheme} : any) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setToggle(!toggle)} onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8">
                <MdInvertColors size={18} color={toggle ? "#e2e8f0" : "#94a3b8"}/>
            </div>
            <div id="dropdown" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className={`z-10 ${toggle ? "block" : "hidden"} absolute divide-y divide-gray-100 rounded-lg shadow w-28 bg-gray-700`}>
                <div className="grid grid-cols-2 py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <div className="grid grid-rows-8 px-2 space-y-2">
                        <div onClick={() => changeTheme("default")} className={`rounded-full w-8 h-8 border-2 border-slate-400 hover:border-2 hover:border-slate-100 cursor-pointer`}>
                            <div className="w-full h-full flex justify-center items-center">
                                <MdOutlineInvertColorsOff size={18}/>
                            </div>
                        </div>
                        <div onClick={() => changeTheme("bg-red-700")} className={`bg-red-500 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                        <div onClick={() => changeTheme("bg-orange-400")} className={`bg-orange-400 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                        <div onClick={() => changeTheme("bg-yellow-500")} className={`bg-yellow-500 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                        <div onClick={() => changeTheme("bg-blue-500")} className={`bg-blue-500 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                        <div onClick={() => changeTheme("bg-blue-700")} className={`bg-blue-700 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                        <div onClick={() => changeTheme("bg-purple-700")} className={`bg-purple-700 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                        <div onClick={() => changeTheme("bg-pink-500")} className={`bg-pink-500 rounded-full w-8 h-8 hover:border-2 hover:border-slate-100 cursor-pointer`}></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}