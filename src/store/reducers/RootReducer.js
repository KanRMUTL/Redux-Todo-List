import {combineReducers} from "redux"
import TodoReducer from "./Todo.Reducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
    todo: TodoReducer,
    user: UserReducer
})

export default RootReducer;