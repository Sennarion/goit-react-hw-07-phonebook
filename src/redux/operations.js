import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63aab4e1fdc006ba604972c1.mockapi.io/contacts';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const res = await axios.post('/', newContact);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/${contactId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
