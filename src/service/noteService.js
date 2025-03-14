export async function getAll() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/notes");
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err.message, err);
    }
}

export async function create(request) {
    try {
        const response = await fetch("http://localhost:8080/api/v1/notes", {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request),
            method: "POST"
        });
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err.message, err);
    }
}

export async function deleteById(id) {
    try {
        await fetch(`http://localhost:8080/api/v1/notes/${id}`, {
            method: "DELETE"
        });
    } catch (err) {
        console.error(err.message, err);
    }
}

export async function updateById(id, request) {
    try {
        await fetch(`http://localhost:8080/api/v1/notes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request)
        });
    } catch (err) {
        console.error(err.message, err);
    }
}

const noteService = {
    getAll,
    create,
    deleteById,
    updateById
};

export default noteService;
