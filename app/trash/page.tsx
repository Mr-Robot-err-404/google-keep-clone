"use client"

import Notes from "../components/NoteGrid"
import CreateNote from "../components/CreateNote"

export default function Trash() {
    return (
        <>
            <CreateNote hidden={true}/>
            <Notes page={"trash"}/>
        </>
    )
}