class UpdateNoteBuilder {
    setTitle(title) {
        this.title = title;
        return this;
    }

    setContent(content) {
        this.content = content;
        return this;
    }

    build() {
        return new UpdateNote(this.title, this.content);
    }
}

class UpdateNote {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static builder() {
        return new UpdateNoteBuilder();
    }
}

export default UpdateNote;