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
        
      }

      getAll() {
          
      }

      setComplete() {

      }

      getIncomplete() {
          
     }

     getComplete() {
          
     }

     searchId() {
          
     }

     removeById() {

     }
}

module.exports = TodoList
