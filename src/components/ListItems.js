import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../store/actions/todo";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.props.deleteTodo(id);
  }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      };
    
      componentDidMount() {
        this.scrollToBottom();
      }
    
      componentDidUpdate() {
        this.scrollToBottom();
      }

  render() {
    return (
      <React.Fragment>
        {this.props.todos.map((todo, index) => (
          <div
            style={{
              backgroundColor: "#fefefe",
              borderColor: "#ccc",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              margin: 2,
              padding: 5,
              paddingTop: 10,
              paddingBottom: 19
            }}
            key={todo.id}
          >
            
            {!todo.complete ? todo.name : <s> {todo.name}</s>}
            {/* <button
              style={{ float: "right" }}
              onClick={() => this.deleteItem(todo.id)}
            >
              delete
            </button> */}
          </div>
        ))}
         <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);