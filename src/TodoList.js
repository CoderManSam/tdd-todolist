class TodoList {
    constructor() {
        this.id = 1        // This is the id that will be used when creating a new Todo 
        this.items = []    // This is a possible way to store all the Todos
      }
    
      create(description) {
        // The following is the new Todo being created
        const newItem = {
          id: this.id++,         // The id is the one initially set to 1 above
                                 //   it is automatically incremented to the next value (2, 3, etc)
          text: description,
          status: 'incomplete'
        }

        this.items.push(newItem)
        
        return this.items
      }

      setComplete(j) {
        this.items[j-1].status = "complete"

        return this.items
      }

      getIncomplete() {

        const index = this.items.findIndex(status => status === "incomplete")
        this.items.splice(index, 1)

        return this.items
      }

      getComplete() {

        const index = this.items.findIndex(status => status === "incomplete")
        this.items.splice(index, 1)

        return this.items
          
      }

      searchId(j) {
        
        const index = this.items.findIndex(item => item.id === j)
        let itemByItsId = [this.items[index]]

        if (index === -1) {
          itemByItsId = "Todo item not found"
        }

        return itemByItsId

      }

      removeById(j) {
        const index = this.items.findIndex(id => id === j)
        this.items.splice(index, 1)



        return this.items
      }
}

module.exports = TodoList
