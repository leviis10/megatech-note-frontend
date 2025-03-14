import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import * as noteService from "../../service/noteService";
import CreateNote from "../../dtos/request/CreateNote";
import { useContext } from "react";
import NoteContext from "../../contexts/note/NoteContext";

function AddButton() {
    const [modalShown, setModalShown] = useState(false);
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const {fetchNotes} = useContext(NoteContext);

    const openAddNoteModalHandler = function () {
        setModalShown(true);
    };

    const closeAddNoteModalHandler = function () {
        setTitleInput("");
        setContentInput("");
        setModalShown(false);
    };

    const addNoteHandler = async function (e) {
        e.preventDefault();
        const request = CreateNote.builder()
            .setTitle(titleInput)
            .setContent(contentInput)
            .build();
        await noteService.create(request);
        await fetchNotes();
        closeAddNoteModalHandler();
    };

    const titleInputChangeHandler = function (e) {
        setTitleInput(e.target.value);
    };

    const contentInputChangeHandler = function (e) {
        setContentInput(e.target.value);
    };

    return (
        <>
            <button className="main__add-button" onClick={openAddNoteModalHandler}>
                + Add
            </button>
            {modalShown && (
                <Modal onClose={closeAddNoteModalHandler}>
                    <form onSubmit={addNoteHandler} className="form__add-note-container">
                        <ModalBody className="form__add-note-body">
                            <input
                                type="text"
                                placeholder="Title"
                                value={titleInput}
                                onChange={titleInputChangeHandler}
                            />
                            <textarea
                                name=""
                                id=""
                                rows={10}
                                cols={50}
                                value={contentInput}
                                onChange={contentInputChangeHandler}
                                placeholder="What do you want to notes today?"
                            />
                        </ModalBody>

                        <ModalFooter>
                            <button className="modal__submit-button">+ Add</button>
                        </ModalFooter>
                    </form>
                </Modal>
            )}
        </>
    );
}

export default AddButton;
