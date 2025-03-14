import { createContext } from "react";

const NoteContext = createContext({
    notes: [],
    fetchNotes: async () => {},
    filterNotes: async () => {}
});

export default NoteContext;
