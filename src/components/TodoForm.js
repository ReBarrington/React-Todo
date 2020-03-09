import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.name])
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    this.setState({ item:''})
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.submitItem}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" onChange={this.handleChanges} value={this.state.item}/>
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
