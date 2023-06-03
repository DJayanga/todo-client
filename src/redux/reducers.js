import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      return state;
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload;
      return state;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = addTodoReducer.actions;
export default addTodoReducer.reducer;
