import React, { Component } from "react";
import HeadeComponent from "./components/HeaderComponent";
import FormSumit from "./components/FormSubmit";
import List from "./components/List";
import axios from "axios";
import { connect } from "react-redux";
import {addTodo, getTodo} from "./store/actions/todo"
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      todos: []
    };

    this.handleCheckboxCheck = this.handleCheckboxCheck.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
   setInterval(()=>{
    this.props.getTodo()},
    500
   )
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
        <List handleCheckboxCheck={this.handleCheckboxCheck}/>
        <FormSumit/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispathToProps = dispatch => ({
  addTodo: message => dispatch(addTodo(message)),
  getTodo: () => dispatch(getTodo())
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
