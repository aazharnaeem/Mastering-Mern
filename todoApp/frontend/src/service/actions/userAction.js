import axios from "axios";
import { UserServer } from "../../config/http";
import { add, get, remove, update } from "../actionTypes/types";
import jwt_decode from 'jwt-decode';

const token = localStorage.getItem('token');
if (token) {
    var { id } = jwt_decode(token);
};

var config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
};

const getTodo = () => async (dispatch) => {
    try {
        const res = await axios.get(`${UserServer}/user/getTodo/${id}`, config)
        if (res.status >= 200 && res.status < 300) {
            dispatch({
                type: get,
                payload: res.data.todos
            })
        }
    }
    catch (err) {
        console.log(err.response.data.message);
    }
}

const addTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${UserServer}/user/addTodo/${id}`, data, config)
        if (res.status >= 200 && res.status < 300) {
            dispatch({
                type: add,
                payload: res.data.todo
            })
        }

    }
    catch (error) {
        console.log(error.response.data.message)
    }
}
const updateTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.put(`${UserServer}/user/updateTodo/${id}`, data, config)
        if (res.status >= 200 && res.status < 300) {
            dispatch({
                type: update,
                payload: res.data.todo
            })
        }
    }
    catch (error) {
        console.log(error.response.data.message)
    }
}
const removeTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.delete(`${UserServer}/user/removeTodo/${id}`, {headers:config.headers, data: data})
        if (res.status >= 200 && res.status < 300) {
            dispatch({
                type: remove,
                payload: res.data.todo
            })
        }
    }
    catch (error) {
        console.log(error.response.data.message)
    }
}

export {
    getTodo,
    addTodo,
    updateTodo,
    removeTodo
}