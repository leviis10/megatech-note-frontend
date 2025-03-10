import { useState } from "react";
import MagnifyingGlass from "../icons/MagnifyingGlass";
import { useContext } from "react";
import NoteContext from "../contexts/note/NoteContext";

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const { filterNotes } = useContext(NoteContext);

    const searchHandler = async function (e) {
        e.preventDefault();
        await filterNotes(searchInput);
        setSearchInput("");
    };

    const searchInputChangeHandler = function (e) {
        setSearchInput(e.target.value);
    };

    return (
        <div className="main__search-bar">
            <MagnifyingGlass className="main__search-icon" />
            <form onSubmit={searchHandler}>
                <input
                    type="text"
                    className="main__search-input"
                    placeholder="Search Notes"
                    value={searchInput}
                    onChange={searchInputChangeHandler}
                />
            </form>
        </div>
    );
}

export default SearchBar;
