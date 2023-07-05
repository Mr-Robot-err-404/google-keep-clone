"use client"
import { useRef, useState, useContext } from "react"
import NoteContext from "../context/NoteContext"
import { BsPin, BsPinFill } from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai'
import {  MdOutlineArchive } from 'react-icons/md'
import Dropdown from "./Dropdown"
import LabelDropdown from "./LabelDropdown"
import ColorDropdown from "./ColorDropdown"
import { getPlaceholder } from "@/lib/getPlaceholder"


export default function CreateNote({ hidden } : any ) {
    const { addNote, labels, setLabels } = useContext(NoteContext)
    const [isPinned, setIsPinned] = useState(false)
    const [theme, setTheme] = useState("default")
    const [noteValue, setNoteValue] = useState("")
    const [titleValue, setTitleValue] = useState("")
    const [labelValue, setLabelValue] = useState("")
    const [labelPlaceholder, setLabelPlaceholder] = useState("")
    const [isLabel, setIsLabel] = useState(false)
    const [isReminder, setIsReminder] = useState(false)
    const [reminderValue, setReminderValue] = useState("")
    const [isExpanded, setIsExpanded] = useState(false)

    const noteRef = useRef<HTMLDivElement>(null)
    
    const handleClick = (value: string) => {
        setIsReminder(true)
        setReminderValue(value)
    }
    const handleNewLabel = (newLabel: string) => {
        if(newLabel === "") return 
        setLabelValue(newLabel)
        setIsLabel(true)
        if(newLabel.length > 15) {
            const str = getPlaceholder(newLabel)
            setLabelPlaceholder(str)
        }
    }

    const setToDefault = () => {
        setIsExpanded(false)
        setIsReminder(false)
        setReminderValue("")
        setTheme("default")
        setNoteValue("")
        setTitleValue("")
        setIsPinned(false)
        setIsLabel(false)
        setLabelValue("")
    }

    const changeTheme = (newTheme: string) => setTheme(newTheme)

    return (
        <div className={`${hidden && 'opacity-0'} ml-24 mr-3 flex justify-center`}>
            <div className={`${theme} mt-4 sm:mt-8 h-auto w-full max-w-large rounded-lg border border-slate-500`}>
                {isExpanded && 
                <div className="flex flex-col h-full w-full">
                    <div className="flex justify-between px-4">
                        <div 
                            role="textbox" 
                            contentEditable="true" 
                            onInput={(e: any) => setTitleValue(e.target.textContent)}
                            onKeyDown={(e: any) => {
                                if(e.key === 'Enter') {
                                    e.preventDefault()
                                    noteRef.current?.focus()
                                }
                            }}
                            data-placeholder="Title"
                            className="text-md font-semibold text-gray-300 py-3 w-full cursor-text caret-slate-500 outline-none">
                        </div>
                        {!isPinned && 
                        <div onClick={() => setIsPinned(true)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-10 w-10 mt-1">
                            <BsPin size={20} color="#cbd5e1"/>
                        </div>}
                        {isPinned && 
                        <div onClick={() => setIsPinned(false)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-10 w-10 mt-1">
                            <BsPinFill size={20} color="#cbd5e1"/>
                        </div>}
                    </div>
                    <div role="textbox"
                         ref={noteRef}
                         contentEditable="true" 
                         onInput={(e: any) => setNoteValue(e.target.innerText)}
                         className="w-full text-white p-4 text-sm md:text-md outline-none overflow-auto caret-slate-500 cursor-text"
                         data-placeholder="Take a note...">
                    </div>
                    {isReminder &&
                    <div className="flex justify-between items-center mx-3 h-6 w-40 rounded-xl text-sm border border-slate-600">
                        <AiOutlineClockCircle color="#94a3b8" className="ml-2"/>
                        <h2 className="text-slate-300">{reminderValue}</h2>
                        <div onClick={() => setIsReminder(false)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-6 w-6">
                            <AiOutlineClose size={13} color="#cbd5e1"/>
                        </div>
                    </div>}
                    {isLabel &&
                    <div className="mt-2 flex justify-between items-center mx-3 h-6 w-40 rounded-xl text-sm border border-slate-600">
                        <div className="ml-2">
                            <svg fill="#94a3b8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>
                        </div>
                        <h2 className="text-slate-300">{labelValue.length < 15 ? labelValue : labelPlaceholder}</h2>
                        <div onClick={() => setIsLabel(false)} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-6 w-6">
                            <AiOutlineClose size={13} color="#cbd5e1"/>
                        </div>
                    </div>}
                    <div className="flex flex-row justify-end px-4 pb-1">
                        <LabelDropdown handleNewLabel={handleNewLabel} labels={labels}/>
                        <Dropdown isReminder={isReminder} handleClick={handleClick}/>
                        <ColorDropdown changeTheme={changeTheme}/>
                        <div onClick={() => {
                        if(noteValue !== "") addNote(titleValue, noteValue, isReminder, isPinned, true, theme, isLabel, labelValue)
                            setToDefault()
                        }} 
                        className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8 mr-3">
                            <MdOutlineArchive size={18} color="#94a3b8"/>
                        </div>
                        <button onClick={() => {
                            if(noteValue !== "" || titleValue !== "") addNote(titleValue, noteValue, isReminder, reminderValue, isPinned, false, theme, isLabel, labelValue)
                            setToDefault()
                        }} 
                        className="border border-transparent rounded-md hover:bg-slate-700 hover:text-gray-300 text-sm text-gray-400 h-7 px-1 mt-tiny">
                            Done
                        </button>
                    </div>
                </div>}
                {!isExpanded && 
                    <div role="textbox"
                         ref={noteRef}
                         contentEditable="true" 
                         onClick={() => setIsExpanded(true)}
                         className="w-full text-white p-3 text-sm outline-none caret-slate-500 cursor-text"
                         data-placeholder="Take a note...">
                    </div>
                }
            </div>
        </div>
    )
}