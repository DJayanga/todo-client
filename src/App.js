import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoView from './components/TodoView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [todoId, setTodoId] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoForm todoId={todoId} setTodoId={setTodoId} />} />
          <Route path="/todo-view" element={<TodoView setTodoId={setTodoId} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
