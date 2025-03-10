import NoteItem from "./NoteItem";
import { useEffect } from "react";
import { useContext } from "react";
import NoteContext from "../contexts/note/NoteContext";

function ListNote() {
    const { notes, fetchNotes } = useContext(NoteContext);

    useEffect(() => {
        const getAllNotes = async function () {
            await fetchNotes();
        };
        getAllNotes();
    }, [fetchNotes]);

    return (
        <div className="notes__container">
            {notes.map((d) => (
                <NoteItem key={d.id} note={d} />
            ))}
        </div>
    );
}

export default ListNote;
