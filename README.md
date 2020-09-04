# React-Todo

This project provided practice building a stateful class component. Even though hooks are gaining popularity among react developers, class components are going to be around for a long time.

## About
- The todo list displays a list of todos, an input field, a submit button, and a clear all button.

- `<App />` holds all the data needed for this project. It is also be the container for the Todo Components.
- `<TodoList />` receives the Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
- `<TodoForm>` holds the input field and the `Add Todo` and `Clear Completed` buttons.
  - The input field takes in user input, and allows a user to click on the `Submit Button` to add a todo to the list.
  - Once a todo is submitted, the Todo List re-renders to show the added todo.

- The `task` field is the todo title that will be shown to the user.
- The `completed` field should default to `false` and will be the field that toggles when a todo is completed.
- The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.
