import React, { Component } from 'react';

import { connect } from "react-redux";
import { addTodo } from "../store/actions/todo";
class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumitForm = this.handleSumitForm.bind(this);
  }

  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSumitForm(e) {
    e.preventDefault();
    this.props.addTodo(this.state.message)
  }

  render() {
    return (
      <div style={{ margin: 2 }}>
        <form onSubmit={this.handleSumitForm} style={{ display: "flex" }}>
          <input
            type="text"
            onChange={this.handleInputChange}
            style={{ flex: 9, height: 30 }}
            value={this.message}
          />
          <button type="submit" style={{ height: 35, flex: 1 }}>
            <strong>Add to List</strong>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispathToProps = dispatch => ({
  addTodo: message => dispatch(addTodo(message))
});

export default connect(mapStateToProps,mapDispathToProps)(FormSubmit);
