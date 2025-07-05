const task1={
    name: "Task 1",
    createdAt: new Date(),
    updatedAt: new Date(),
    completed: false,
    changeName: function(newName) {
        this.name = newName;
        this.updatedAt = new Date();
    }
}

function changeName(newName) {
        this.name = newName;
        this.updatedAt = new Date();
}

const task2={
    name: "Task 2",
    createdAt: new Date(),
    updatedAt: new Date(),
    completed: false,
}
task1.name = "Updated Task 1"
task1.updatedAt = new Date()
task2.changeName("Updated Task 2")
console.log(task1)
console.log(task2)

