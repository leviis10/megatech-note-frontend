import { useState } from "react";
import MagnifyingGlass from "../Icons/MagnifyingGlass";
import { useContext } from "react";
import NoteContext from "../../contexts/note/NoteContext";
import { useEffect } from "react";

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const { filterNotes } = useContext(NoteContext);

    useEffect(() => {
        const searchNotes = async function() {
            await filterNotes(searchInput);
        }

        searchNotes();
    }, [searchInput, filterNotes]);

    const searchInputChangeHandler = async function (e) {
        setSearchInput(e.target.value);
    };

    return (
        <div className="main__search-bar">
            <MagnifyingGlass className="main__search-icon" />
            <input
                type="text"
                className="main__search-input"
                placeholder="Search Notes"
                value={searchInput}
                onChange={searchInputChangeHandler}
            />
        </div>
    );
}

export default SearchBar;
