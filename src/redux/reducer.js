import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, addFilter } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    });
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(addFilter, (state, action) => {
    return action.payload.toString();
  });
});
