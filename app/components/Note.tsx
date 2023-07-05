"use client"
import { BsPin, BsPinFill } from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai'
import Dropdown from './Dropdown'
import ColorDropdown from './ColorDropdown'
import {  MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md'
import { ImBin } from 'react-icons/im'
import { FaTrashRestore } from 'react-icons/fa'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import { getPlaceholder } from '@/lib/getPlaceholder'
import LabelDropdown from './LabelDropdown'

export default function Note({ note, gridView } : any) {
    const { updateNote, labels } = useContext(NoteContext)
    const changeTheme = (newTheme: string) => updateNote(note.id, {theme: newTheme})
    const handleClick = (value: string) => updateNote(note.id, {
        isReminder: true, 
        reminderValue: value
    })
    const handleNewLabel = (newLabel: string) => {
        let str = ""
        if(newLabel === "") return 
        if(newLabel.length > 15) {
            str = getPlaceholder(newLabel)
        }
        updateNote(note.id, {
            isLabel: true, 
            labelValue: newLabel, 
            labelPlaceholder: str
        })
    }
    return (
        <>
            {!gridView && 
            <div className={`flex w-full h-auto rounded-lg border border-slate-500 ${note.theme}`}>
                <div className="flex flex-col h-full w-full">
                    <div className="flex justify-between px-4">
                        <div 
                            role="textbox" 
                            data-placeholder="Empty Title"
                            className="text-md font-semibold text-gray-300 py-3 w-full cursor-text caret-slate-500 outline-none">
                                {note.title} 
                        </div>
                        {!note.isPinned && 
                        <div onClick={() => updateNote(note.id, {isPinned: true})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-10 w-10 mt-1">
                            <BsPin size={20} color="#cbd5e1"/>
                        </div>}
                        {note.isPinned && 
                        <div onClick={() => updateNote(note.id, {isPinned: false})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-10 w-10 mt-1">
                            <BsPinFill size={20} color="#cbd5e1"/>
                        </div>}
                    </div>
                    <div 
                        role="textbox"
                        className="w-full text-white p-4 text-sm md:text-md outline-none overflow-auto caret-slate-500 cursor-text"
                        data-placeholder="Take a note...">
                        {note.text}
                    </div>
                    {note.isReminder &&
                    <div className="flex justify-between items-center mx-3 h-6 w-40 rounded-xl text-sm border border-slate-600">
                        <AiOutlineClockCircle color="#94a3b8" className="ml-2"/>
                        <h2 className="text-slate-300">{note.reminderValue}</h2>
                        <div onClick={() => updateNote(note.id, {isReminder: false})}  className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-6 w-6">
                            <AiOutlineClose size={13} color="#cbd5e1"/>
                        </div>
                    </div>}
                    {note.isLabel &&
                    <div className="mt-2 flex justify-between items-center mx-3 h-6 w-40 rounded-xl text-sm border border-slate-600">
                        <div className="ml-2">
                            <svg fill="#94a3b8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>
                        </div>
                        <h2 className="text-slate-300">{note.labelValue.length < 15 ? note.labelValue : note.labelPlaceholder}</h2>
                        <div onClick={() => updateNote(note.id, {isLabel: false})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-6 w-6">
                            <AiOutlineClose size={13} color="#cbd5e1"/>
                        </div>
                    </div>}
                    <div className="flex flex-row justify-end px-2 py-2 pb-1">
                        {!note.isBinned && 
                            <>
                                <LabelDropdown handleNewLabel={handleNewLabel} labels={labels}/>
                                <Dropdown handleClick={handleClick}/>
                                <ColorDropdown changeTheme={changeTheme}/>
                                {!note.isArchived && 
                                <div onClick={() => updateNote(note.id, {isArchived: true})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8 mr-3">
                                    <MdOutlineArchive size={18} color="#94a3b8"/>
                                </div>}
                                {note.isArchived && 
                                <div onClick={() => updateNote(note.id, {isArchived: false})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8 mr-3">
                                    <MdOutlineUnarchive size={18} color="#94a3b8"/>
                                </div>}
                                <div onClick={() => updateNote(note.id, {isBinned: true})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8 mr-3">
                                    <ImBin size={15} color="#94a3b8"/>
                                </div>
                            </>
                        }
                        
                        {note.isBinned &&
                        <>
                            <div className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8 mr-3">
                                <RiDeleteBin2Fill size={18} color="#94a3b8"/>
                            </div>
                            <div onClick={() => updateNote(note.id, {isBinned: false})} className="flex justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer h-8 w-8 mr-3">
                                <FaTrashRestore size={15} color="#94a3b8"/>
                            </div>
                        </>}
                    </div>
                </div>
            </div>}
        </>
        
    )
}