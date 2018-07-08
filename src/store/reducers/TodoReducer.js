import { SET_TODOS, SET_TODO, DONE_DELETE } from "../actions/todo";
import immutable from "immutability-helper";
const initialState = {
  todos: []
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return immutable(state, { todos: { $set: action.payload } });
    case SET_TODO:
      return immutable(state, { todos: { $push: [action.payload] } });
    default:
      return state;
  }
};

export default TodoReducer;