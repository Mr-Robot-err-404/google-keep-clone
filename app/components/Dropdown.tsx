"use client"
import { useState } from "react"
import { BiBellPlus } from 'react-icons/bi'

export default function Dropdown({handleClick, isReminder} : any) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setToggle(!toggle)} onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8">
                <BiBellPlus size={18} color={toggle || isReminder ? "#e2e8f0" : "#94a3b8"}/>
            </div>
            <div id="dropdown" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className={`z-10 ${toggle ? "block" : "hidden"} absolute divide-y divide-gray-100 rounded-lg shadow w-40 bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li className="px-4 py-2 border-b border-b-slate-600 cursor-default">Set a reminder:</li>
                    <li>
                        <a onClick={() => {
                            handleClick("Later today")
                            setToggle(false)
                        }} className="block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">Later today</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            handleClick("Tomorrow")
                            setToggle(false)
                        }} className="block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">Tomorrow</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            handleClick("Next week")
                            setToggle(false)
                        }} className="block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">Next week</a>
                    </li>
                </ul>
            </div>
        </div> 
    )
} 