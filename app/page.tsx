"use client"

import CreateNote from "./components/CreateNote"
import Notes from "./components/NoteGrid"

export default function Home() {
  return <>
        <CreateNote/>
        <Notes page={'home'}/>
    </>
}

