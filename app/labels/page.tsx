import Notes from "../components/NoteGrid"
import CreateNote from "../components/CreateNote"

export default function Labels() {
    return (
        <>
            <CreateNote hidden={true}/>
            <Notes page={"labels"}/>
        </>
    )
}