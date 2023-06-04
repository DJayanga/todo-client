import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import TodoForm from '../components/TodoForm';

describe('Testing TodoForm Component', () => {
  it('should render the TodoForm component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TodoForm />
        </MemoryRouter>
      </Provider>
    );

    const todoFormHeading = screen.getByRole('heading', { name: /Todo Form/i });
    expect(todoFormHeading).toBeInTheDocument();

    const todoTitleInput = screen.getByTestId('title-input');
    expect(todoTitleInput).toBeInTheDocument();

    const todoDescriptionInput = screen.getByTestId('description-input');
    expect(todoDescriptionInput).toBeInTheDocument();

    const todoSubmitButton = screen.getByRole('button', { name: /Submit/i });
    expect(todoSubmitButton).toBeInTheDocument();

    const todoViewButton = screen.getByRole('button', { name: /View Todo List/i });
    expect(todoViewButton).toBeInTheDocument();
  });
});
