class CreateNoteBuilder {
    setTitle(title) {
        this.title = title;
        return this;
    }

    setContent(content) {
        this.content = content;
        return this;
    }

    build() {
        return new CreateNote(this.title, this.content);
    }
}

class CreateNote {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static builder() {
        return new CreateNoteBuilder();
    }
}

export default CreateNote;