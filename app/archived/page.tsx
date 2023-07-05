import Notes from "../components/NoteGrid"
import CreateNote from "../components/CreateNote"

export default function Archive() {
    return (
        <>
            <CreateNote hidden={true}/>
            <Notes page={"archived"}/> 
        </>
    )
}