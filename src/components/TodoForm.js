import React, { useEffect, useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../actions';

import { useTodoFormStyles } from './styles';

const TodoForm = ({ todoId, setTodoId }) => {
  const classes = useTodoFormStyles();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.inputReducer.todoList);
  const dispath = useDispatch();

  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (todoId) {
      const todo = todos.find((todo) => todo.id === todoId);
      if (todo) {
        setTodo({
          title: todo.data.title,
          description: todo.data.description,
        });
      }
    }
  }, [todoId, todos]);

  const handleInputChange = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!todo.title || !todo.description) {
      alert('Please fill all the fields!');
      return;
    }

    if (todoId) {
      // Update Todo
      dispath(
        updateTodo({
          id: todoId,
          data: todo,
        })
      );
    } else {
      dispath(addTodo(todo));
    }

    // Reset form fields
    setTodo({
      title: '',
      description: '',
    });
    setTodoId(null);

    // Navigate to TodoView
    navigate('/todo-view');
  };

  const handleViewTodoList = () => {
    navigate('/todo-view');
  };

  return (
    <Container className={classes.formContainer} maxWidth="sm">
      <h1 className={classes.heading}>{todoId ? 'Update Todo' : 'Todo Form'}</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="standard"
          fullWidth
          margin="normal"
          value={todo.title}
          onChange={handleInputChange}
          required
          name="title"
          data-testid="title-input"
        />
        <TextField
          label="Description"
          variant="standard"
          multiline
          maxRows={4}
          fullWidth
          margin="normal"
          value={todo.description}
          onChange={handleInputChange}
          required
          name="description"
          data-testid="description-input"
        />

        <Button className={classes.submitButton} type="submit" fullWidth>
          {todoId ? 'Update' : 'Submit'}
        </Button>

        <Button className={classes.viewButton} fullWidth onClick={handleViewTodoList}>
          View Todo List
        </Button>
      </form>
    </Container>
  );
};

export default TodoForm;
