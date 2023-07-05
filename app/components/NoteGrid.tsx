"use client"
import { useContext, useState } from "react"
import NoteContext from "../context/NoteContext"
import Note from "./Note"

export default function Notes({ page } : any ) {
    const { notes } = useContext(NoteContext)
    const gridView = false
    return (
        <div className="ml-24 mr-3 flex justify-center mt-6 sm:mt-8">
            {gridView &&
            <div className="md:ml-20 md:mr-20 flex justify-center w-full h-36">
                <div className="grid grid-cols-1 space-y-2">
                    {notes.map((note: any) => {
                        if(note.isBinned) {
                            if(page === 'trash') return <Note note={note}/> 
                        }
                        else if(note.isArchived) {
                            if(page === 'archived') return <Note note={note}/>
                        }
                        else {
                            if(page === 'home') {
                                return <Note note={note} gridView={gridView}/>
                            }
                            if(page === 'reminders' && note.isReminder) {
                                return <Note note={note} gridView={gridView}/>
                            }
                            if(page === 'labels' && note.isLabel) {
                                return <Note note={note} gridView={gridView}/>
                            }
                        } 
                    })}
                </div>
            </div>}
            {!gridView &&
            <div className="flex justify-center w-full max-w-large h-auto">
                <div className="w-full grid grid-cols-1 space-y-2">
                    {notes.map((note: any) => {
                        if(note.isBinned) {
                            if(page === 'trash') return <Note note={note}/> 
                        }
                        else if(note.isArchived) {
                            if(page === 'archived') return <Note note={note}/>
                        }
                        else {
                            if(page === 'home') {
                                return <Note note={note} gridView={gridView}/>
                            }
                            if(page === 'reminders' && note.isReminder) {
                                return <Note note={note} gridView={gridView}/>
                            }
                            if(page === 'labels' && note.isLabel) {
                                return <Note note={note} gridView={gridView}/>
                            }
                        } 
                    })}
                </div>
            </div>
            }
        </div>
    )
} 