import Axios from "axios";
import config from "../../config";

export const SET_TODO = "SET_TODO";

export const addTodo = data => dispatch => {
    let todos = Axios.get(config.server.api + "/todos");
    dispatch(setTodo(todos.data));
};

const setTodo = data => ({
    type: SET_TODO,
    payload: data //ท่อส่งข้อมูล
});