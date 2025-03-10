import ActionBar from "./components/ActionBar";
import ListNote from "./components/Note/ListNote";

function App() {
    return (
        <main className="container main">
            <h1 className="text--primary text--center mb-3">Notes</h1>
            <ActionBar />
            <ListNote />
        </main>
    );
}

export default App;
