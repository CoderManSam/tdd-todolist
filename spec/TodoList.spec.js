const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "figure out TDD",
      status: "incomplete"
    }
    // execute
    todoList.create("figure out TDD")
    // verify
    expect(result).toEqual(expected)
  })

  it("creates an array of all the todo items", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")
    todoList.create("figure out TDD")

    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }, {
      id: 2, 
      text: "figure out TDD", 
      status: "incomplete"
    }]
    // execute
    const result = todoList.getAll()
    // verify
    expect(result).toEqual(expected)
  })

  it("sets the status of a todo item to complete", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")

    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }
    // execute
    const result = todoList.setComplete(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("creates an array of the incomplete todo items", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")
    todoList.create("figure out TDD")
    todoList.create("complete this exercise")
    todoList.setComplete(3)

    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }, {
      id: 2, 
      text: "figure out TDD", 
      status: "incomplete"
    }]
    // execute
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("creates an array of the complete todo items", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")
    todoList.create("figure out TDD")
    todoList.create("complete this exercise")
    todoList.setComplete(1)
    todoList.setComplete(2)
    
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }, {
      id: 2, 
      text: "figure out TDD", 
      status: "complete"
    }]
    // execute
    const result = todoList.getComplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("creates an array of todo items and searches and returns one by its ID", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")
    todoList.create("figure out TDD")
    todoList.create("complete this exercise")

    const expected = {
      id: 2, 
      text: "figure out TDD", 
      status: "complete"
    }
    // execute
    const result = todoList.searchId(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("creates an array of todo items and searches for one by its ID, returns a message if it doesn't exist", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")
    todoList.create("figure out TDD")

    const expected = "Todo item not found"
    // execute
    const result = todoList.searchId(3)
    // verify
    expect(result).toEqual(expected)
  })

  it("removes a Todo item by its ID", () => {
    // set up
    const todoList = new TodoList()

    todoList.create("turn the heating on!")
    todoList.create("figure out TDD")
    todoList.create("complete this exercise")
    todoList.removeById(3)

    const expected = "Todo item not found"
    // execute
    const result = todoList.searchId(3)
    // verify
    expect(result).toEqual(expected)
  })

})
