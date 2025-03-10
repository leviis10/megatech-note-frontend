import AddButton from "./Action/AddButton";
import SearchBar from "./Action/SearchBar";

function ActionBar() {
    return (
        <div className="main__action-container mb-3">
            <SearchBar />
            <AddButton />
        </div>
    );
}

export default ActionBar;
