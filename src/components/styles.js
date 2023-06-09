import { makeStyles } from '@material-ui/core';

export const useTodoViewStyles = makeStyles((theme) => ({
  container: {
    minWidth: '90vw',
    maxWidth: '90vw',
    minHeight: '70vh',
    maxHeight: '90vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '2rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    color: '#3f51b5',
  },
  table: {
    minWidth: '100%',
  },
  tableCell: {
    fontWeight: 'bold',
  },
  indexCell: {
    width: '10%',
  },
  titleCell: {
    width: '25%',
  },
  descriptionCell: {
    width: '45%',
  },
  actionsCell: {
    width: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '1rem',
    textAlign: 'center',
  },
  editButton: {
    borderRadius: '0.1rem',
    color: 'Orange',
    fontWeight: 'bold',
    cursor: 'pointer',
    minWidth: '5rem',
    marginRight: '1rem',

    '&:hover': {
      backgroundColor: 'Orange',
      color: '#fff',
    },
  },
  deleteButton: {
    borderRadius: '0.1rem',
    color: 'red',
    fontWeight: 'bold',
    cursor: 'pointer',
    minWidth: '5rem',

    '&:hover': {
      backgroundColor: 'red',
      color: '#fff',
    },
  },
  addButton: {
    borderRadius: '0.5rem',
    backgroundColor: '#fff',
    color: '#3f51b5',
    minWidth: '20rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '3rem',
    marginBottom: '1rem',
    border: '2px solid #3f51b5',
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: '#fff',
      border: '2px solid #3f51b5',
    },
  },
  searchBox: {
    marginBottom: '1rem',
    minWidth: '20rem',
    textAlign: 'center',
    justifyContent: 'center',
  },

  searchButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    alignItems: 'center',
    marginBottom: '2rem',
  },

  searchButton: {
    borderRadius: '0.5rem',
    backgroundColor: 'green',
    fontWeight: 'bold',
    color: '#fff',
    opacity: '0.7',
    minWidth: '7rem',

    '&:hover': {
      backgroundColor: 'green',
      color: '#fff',
      opacity: '1',
    },
  },
  resetButton: {
    borderRadius: '0.5rem',
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: '#fff',
    opacity: '0.7',
    minWidth: '7rem',

    '&:hover': {
      backgroundColor: 'red',
      color: '#fff',
      opacity: '1',
    },
  },
}));

export const useTodoFormStyles = makeStyles((theme) => ({
  formContainer: {
    height: '60vh',
    width: '70vw',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '2rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    color: '#3f51b5',
  },

  submitButton: {
    borderRadius: '0.5rem',
    backgroundColor: '#3f51b5',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '2rem',
    marginBottom: '1rem',
    border: '2px solid #3f51b5',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3f51b5',
      border: '2px solid #3f51b5',
    },
  },
  viewButton: {
    borderRadius: '0.5rem',
    backgroundColor: '#fff',
    color: '#3f51b5',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
    marginBottom: '1rem',
    opacity: '0.7',
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '1',
    },
  },
}));
