import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add Todo
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },

    // Update Todo
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload;
      return state;
    },

    // Delete Todo
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
