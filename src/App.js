import React from 'react';
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const todos = [{name: 'Type above to add a new note! Clicking a note when you have completed a task, then use the button below to clear.' }]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos,
      name: ''
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = item => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
      })
  }


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app">
        <h1>My To-Do List:</h1>
        <ToDoForm addItem={this.addItem}/>
        <ToDoList todos={this.state.todos} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
