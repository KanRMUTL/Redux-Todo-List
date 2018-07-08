import {combineReducer} from "redux"
import TodoReducer from "./Todo.Reducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducer({
    todo: TodoReducer,
    user: UserReducer
})