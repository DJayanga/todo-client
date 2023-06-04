import React, { useEffect, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { deleteTodo } from '../redux/reducers';
import { useTodoViewStyles } from './styles';

const TodoView = ({ setTodoId }) => {
  const classes = useTodoViewStyles();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const todos = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (todos) setFilteredTodos(todos);
  }, []);

  const handleSearch = () => {
    if (searchQuery) {
      const filterdList = todos.filter((todo) => {
        return todo.data.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setFilteredTodos(filterdList);
    }
  };

  const handleReset = () => {
    if (todos) {
      setFilteredTodos(todos);
      setSearchQuery('');
    }
  };

  const handleUpdate = (id) => () => {
    setTodoId(id);
    navigate('/');
  };

  const handleDelete = (id) => () => {
    if (!id) return;

    // Delete Todo
    dispath(deleteTodo({ id }));
    setFilteredTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    navigate('/');
  };

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
          data-testid="search-input"
        />
        <Box className={classes.searchButtons}>
          <Button className={classes.searchButton} onClick={handleSearch}>
            Search
          </Button>
          <Button className={classes.resetButton} onClick={handleReset}>
            Reset
          </Button>
        </Box>

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
                      <Button className={classes.deleteButton} onClick={handleDelete(todo.id)}>
                        Delete
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
