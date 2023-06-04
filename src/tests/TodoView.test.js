import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import TodoView from '../components/TodoView';

describe('Testing TodoView Component', () => {
  it('should render the TodoView component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TodoView />
        </MemoryRouter>
      </Provider>
    );

    const todoViewHeading = screen.getByRole('heading', { name: /Todo List/i });
    expect(todoViewHeading).toBeInTheDocument();

    const todoSearch = screen.getByTestId('search-input');
    expect(todoSearch).toBeInTheDocument();

    const todoTblNo = screen.getByText('No:');
    expect(todoTblNo).toBeInTheDocument();

    const todoTblTitle = screen.getByText('Title');
    expect(todoTblTitle).toBeInTheDocument();

    const todoTblDescription = screen.getByText('Description');
    expect(todoTblDescription).toBeInTheDocument();

    const todoTblActions = screen.getByText('Actions');
    expect(todoTblActions).toBeInTheDocument();
  });
});
