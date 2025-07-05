function Task(name){
    this.name = name
    this.createdAt = new Date()
    this.changeName = function(newName) {
        this.name = newName
        this.updatedAt = new Date()
    }
}

const task1 = new Task("tarefa 1")
console.log(task1)
task1.changeName("tarefa 1 alterada")
console.log(task1)
