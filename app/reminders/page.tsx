"use client"

import Notes from "../components/NoteGrid"
import CreateNote from "../components/CreateNote"

export default function Reminders() {
    return (
        <>
            <CreateNote/>
            <Notes page={"reminders"}/>
        </>
         
    )
}