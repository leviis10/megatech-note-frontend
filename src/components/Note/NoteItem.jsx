import { useState } from "react";
import { toFormattedStringDate } from "../../utils/dateUtils";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import TrashIcon from "../Icons/TrashIcon";
import PencilSquareIcon from "../Icons/PencilSquareIcon";
import noteService from "../../service/noteService";
import { useContext } from "react";
import NoteContext from "../../contexts/note/NoteContext";
import UpdateNote from "../../dtos/request/UpdateNote";

function NoteItem({ note }) {
    const [modalShown, setModalShown] = useState(false);
    const [titleInput, setTitleInput] = useState(note.title);
    const [contentInput, setContentInput] = useState(note.content);
    const {fetchNotes} = useContext(NoteContext);

    const titleInputChangeHandler = function(e) {
        setTitleInput(e.target.value);
    };

    const contentInputChangeHandler = function(e) {
        setContentInput(e.target.value);
    }

    const openNoteDetailModalHandler = function () {
        setModalShown(true);
    };

    const closeNoteDetailModalHandler = function () {
        setModalShown(false);
    };

    const noteUpdateHandler = async function(e) {
        e.preventDefault();
        const request = UpdateNote.builder()
            .setTitle(titleInput)
            .setContent(contentInput)
            .build();
        await noteService.updateById(note.id, request);
        await fetchNotes();
        closeNoteDetailModalHandler();
    }

    const deleteNoteHandler = async function() {
        await noteService.deleteById(note.id);
        await fetchNotes();
        closeNoteDetailModalHandler();
    }

    return (
        <>
            <div className="note__container" onClick={openNoteDetailModalHandler}>
                <h2 className="text--secondary">{note.title}</h2>
                <span className="note__last-update">
                    Last Updated {toFormattedStringDate(new Date(note.updatedAt))}
                </span>
            </div>
            {modalShown && (
                <Modal onClose={closeNoteDetailModalHandler}>
                    <form onSubmit={noteUpdateHandler} className="form__update-note-container">
                        <ModalBody className="form__update-note-body">
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
                            <button type="button" className="modal__delete-button" onClick={deleteNoteHandler}>
                                <TrashIcon className="modal__delete-icon" />
                                <span>Delete</span>
                            </button>
                            <button type="submit" className="modal__update-button">
                                <PencilSquareIcon className="modal__update-icon" />
                                <span>Update</span>
                            </button>
                        </ModalFooter>
                    </form>
                </Modal>
            )}
        </>
    );
}

export default NoteItem;
