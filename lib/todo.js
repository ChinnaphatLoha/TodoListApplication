class Todo {
    static runningId = 1;

    // constructor
    constructor(id, description, done = false) {
        this.id = !id ? Todo.runningId++ : id;
        this.description = description;
        this.done = done;
    }

    // methods
    getTodo() {
        return {
            id: this.id,
            description: this.description,
            done: this.done
        }
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setDone() {
        this.done = true;
    }
}

export default Todo;