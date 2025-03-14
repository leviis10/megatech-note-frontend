import { useState } from "react";
import NoteContext from "./NoteContext";
import noteService from "../../service/noteService";
import { useCallback } from "react";

function NoteContextProvider({ children }) {
    const [notes, setNotes] = useState([]);

    const fetchNotes = useCallback(async function () {
        const foundNotes = await noteService.getAll();
        setNotes(foundNotes);
    }, []);

    const filterNotes = useCallback(async (notesTitle) => {
        await fetchNotes();

        setNotes((prevValue) => {
            return prevValue
                .filter((value) => value.title.toLowerCase().includes(notesTitle.toLowerCase()));
        });
    }, [fetchNotes]);

    const value = {
        notes,
        fetchNotes,
        filterNotes,
    };

    return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export default NoteContextProvider;
