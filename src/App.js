import React, { Component } from "react";
import HeadeComponent from "./components/HeaderComponent";
import FormSumit from "./components/FormSubmit";
import List from "./components/List";
import axios from "axios";
import { connect } from "react-redux";
import {addTodo} from "./store/actions/todo"
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      todos: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumitForm = this.handleSumitForm.bind(this);
    this.handleCheckboxCheck = this.handleCheckboxCheck.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get("https://condom-server.herokuapp.com/todos").then(response => {
      this.setState({ todos: response.data });
    });
  }

  handleCheckboxCheck(index, complete) {
    let oldState = this.state.todos;
    oldState[index].complete = complete;

    axios
      .patch(
        `https://condom-server.herokuapp.com/todos/${oldState[index].id}`,
        {
          complete: complete
        }
      )
      .then(response => {
        this.setState({ todos: oldState });
      });
  }

  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSumitForm(e) {
    e.preventDefault();
    let oldState = this.state.todos;
    let todoLength = this.state.todos.length;
    let lastId = this.state.todos[todoLength - 1].id;
    let message = {
      id: lastId + 1,
      name: this.state.message,
      complete: false
    };
    axios.post(`https://condom-server.herokuapp.com/todos`, message);
    oldState.push(message);
    this.setState({ todos: oldState, message: "" });
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeadeComponent />
        <List
          handleCheckboxCheck={this.handleCheckboxCheck}
          todos={this.state.todos}
        />
        <FormSumit
          message={this.state.message}
          handleInputChange={this.handleInputChange}
          handleSumitForm={this.handleSumitForm}
        />
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

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
