import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import { useTodoViewStyles } from './styles';

const TodoView = ({ setTodoId }) => {
  const classes = useTodoViewStyles();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.inputReducer.todoList);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUpdate = (id) => () => {
    setTodoId(id);
    navigate('/');
  };

  const handleAddTodo = () => {
    navigate('/');
  };

  const filteredTodos = todos.filter((todo) => {
    const titleMatch = todo.data.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatch = todo.data.description.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <h1 className={classes.heading}>Todo List</h1>

        <TextField
          className={classes.searchBox}
          variant="standard"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={`${classes.tableCell} ${classes.indexCell}`}>No:</TableCell>
                <TableCell className={`${classes.tableCell} ${classes.titleCell}`}>Title</TableCell>
                <TableCell className={`${classes.tableCell} ${classes.descriptionCell}`}>Description</TableCell>
                <TableCell className={`${classes.tableCell} ${classes.actionsCell}`}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTodos.map((todo, index) => {
                return (
                  <TableRow key={todo.id}>
                    <TableCell className={classes.indexCell}>{index + 1}</TableCell>
                    <TableCell className={classes.titleCell}>{todo.data.title}</TableCell>
                    <TableCell className={classes.descriptionCell}>{todo.data.description}</TableCell>
                    <TableCell className={classes.actionsCell}>
                      <Button className={classes.editButton} onClick={handleUpdate(todo.id)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2}>
          <Button className={classes.addButton} onClick={handleAddTodo}>
            + Add Todo
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TodoView;
