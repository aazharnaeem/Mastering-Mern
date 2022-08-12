
import { add, get, remove, update } from "../actionTypes/types"

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case add:
            return [...state, action.payload]
        case get:
            return action.payload
        case remove:
            return [...state.filter(st => st !== action.payload._id)]
        case update:
            state.map(st => {
                if (st._id === action.payload._id) {
                    return { ...st, todo: action.payload.todo }
                }
                return st
            });
            return state;
        default:
            return state
    }
}

export default todoReducer