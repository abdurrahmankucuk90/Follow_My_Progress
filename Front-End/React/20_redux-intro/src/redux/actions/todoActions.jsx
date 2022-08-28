import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOOGLE_TODO,
} from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};
export const toogleTodo = (payload) => {
  return { type: TOOGLE_TODO, payload: payload };
};
export const clearTodo = () => {
  return { type: CLEAR_TODO };
};
