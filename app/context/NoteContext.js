"use client"
import { createContext, useState } from "react";

const NoteContext = createContext()

export function NoteProvider({ children }) {
    const [labels, setLabels] = useState(["Project ideas"])
    const [notes, setNotes] = useState([
        {
            id: 1, 
            theme: "default",
            title: "Sample note",
            text: "What about the droid attack on the wookies?",
            isReminder: false,
            reminderValue: "",
            labelValue: "", 
            isPinned: true,
            isArchived: false, 
            isLabel: false, 
            isBinned: false,
        },
        {
            id: 2,
            theme: "default",
            title: "Archived note",
            text: "Some thought not worth sharing",
            reminderValue: "Tomorrow",
            labelValue: "", 
            isPinned: true,
            isArchived: true, 
            isLabel: false, 
            isReminder: true,
            isBinned: false
        },
        {
            id: 3,
            theme: "default",
            title: "Reminder",
            text: "I'll probably forget about it anyway",
            reminderValue: "Later Today",
            labelValue: "", 
            isReminder: true,
            isPinned: false,
            isArchived: false,
            isLabel: false, 
            isBinned: false
        },
        {
            id: 4,
            theme: "default",
            title: "Note with Label",
            text: "Make the next Facebook - Plan",
            reminderValue: "Tomorrow",
            labelValue: "Project Ideas",
            isPinned: true,
            isReminder: true,
            isArchived: false, 
            isLabel: true, 
            isBinned: false
        },
    ])

    function addNote(title, text, isReminder, reminderValue, isPinned, isArchived, theme, isBinned, isLabel, labelValue) {
        const newNote = {
            theme: theme,
            title: title, 
            text: text, 
            reminderValue: reminderValue,
            labelValue: labelValue,
            isReminder: isReminder,
            isPinned: isPinned,
            isLabel: isLabel, 
            isArchived: isArchived || false, 
            isBinned: isBinned || false,
        }
        setNotes((prevState) => [...prevState, newNote])
    }

    function updateNote(id, updatedValues) {
        const updatedNotes = notes.map((note) => {
            if(note.id === id) {
                return {...note, ...updatedValues}
            }
            return note
        })
        setNotes(updatedNotes)
    }

    return (
        <NoteContext.Provider value={{notes, addNote, updateNote, labels, setLabels}}>
            {children}
        </NoteContext.Provider>
    )
}


export default NoteContext