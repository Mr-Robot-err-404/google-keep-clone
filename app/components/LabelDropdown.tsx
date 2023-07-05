"use client"
import { useState, useRef, useEffect } from "react"

export default function LabelDropdown({ handleNewLabel, labels } : any) {
    const [toggle, setToggle] = useState(false)
    const [currLabelValue, setCurrLabelValue] = useState("")
    const labelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (toggle) {
          labelRef.current?.focus();
        }
      }, [toggle]);

    const closeToggle = () => {
        setToggle(false)
        setCurrLabelValue("")
    }

    return (
        <div className="relative">
            <div onClick={() => setToggle(!toggle)} onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8">
                <svg fill={toggle ? "#e2e8f0" : "#94a3b8"} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>                        
            </div>
            <div id="dropdown" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className={`z-10 ${toggle ? "block" : "hidden"} absolute divide-y divide-gray-100 rounded-lg shadow w-40 bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <div className="flex justify-between">
                            <div role="textbox"
                                ref={labelRef}
                                contentEditable="true" 
                                onInput={(e: any) => setCurrLabelValue(e.target.innerText)}
                                className={`w-full text-white px-4 py-2 text-xs outline-none overflow-auto caret-slate-500 cursor-text ${labels.length > 0 && "border-b border-b-slate-600"}`}
                                data-placeholder="Add a label...">
                            </div>
                        </div>
                    </li>
                    {labels.map((label: string) => {
                        return (
                        <li onClick={() => {
                            handleNewLabel(label)
                            closeToggle()
                        }}>
                            <a className="block px-4 py-1 hover:bg-gray-600 hover:text-white cursor-pointer">{label}</a>
                        </li>
                        )
                    })}
                    <li>
                        <div onClick={() => {
                            handleNewLabel(currLabelValue)
                            closeToggle()
                        }} className="block px-4 py-1 hover:bg-gray-600 hover:text-white text-xs cursor-pointer border-t border-t-slate-600">
                            {currLabelValue.length > 0 && "Create Label " + `"${currLabelValue}"`}
                        </div>
                    </li>
                </ul>
            </div>
        </div> 
    )
} 