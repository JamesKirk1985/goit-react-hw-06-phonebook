import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/AddContact', evt => {
  return {
    payload: {
      name: '',
      number: '',
      id: nanoid(),
    },
  };
});
export const deleteContact = createAction('contact/deleteContact', id => {
  return {
    payload: id,
  };
});
export const addFilter = createAction('filter/addFilter');
