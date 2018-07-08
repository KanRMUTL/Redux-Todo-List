
import Axios from "axios";
import config from "../../config";

export const SET_TODO = "SET_TODO";
export const SET_TODOS = "SET_TODOS";

export const getTodo = () => async dispatch => {
    let todos = await Axios.get(config.server.api + "/todos");
    dispatch(setTodos(todos.data));
}

export const addTodo = data => async dispatch => {
    let todos = await Axios.post(config.server.api + "/todos",{
        name: data
    });
    dispatch(setTodo(todos.data));
};

const setTodo = data => ({
    type: SET_TODO,
    payload: data //ท่อส่งข้อมูล
});
const setTodos = data => ({
    type: SET_TODOS,
    payload: data //ท่อส่งข้อมูล
});