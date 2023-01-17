import { createSlice } from '@reduxjs/toolkit';
import { getContacts, createContact, deleteContact } from './operations';

const setIsLoading = state => {
  state.isLoading = true;
};

const setError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [getContacts.pending]: setIsLoading,
    [createContact.pending]: setIsLoading,
    [deleteContact.pending]: setIsLoading,
    [getContacts.rejected]: setError,
    [createContact.rejected]: setError,
    [deleteContact.rejected]: setError,
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [createContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = [payload, ...state.items];
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
