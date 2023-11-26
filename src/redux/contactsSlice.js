import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneContacts = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact },
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
