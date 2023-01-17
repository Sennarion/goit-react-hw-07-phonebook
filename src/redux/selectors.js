export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);

  return contacts.filter(contact =>
    contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
  );
};

export const getLoadingStatus = state => state.contacts.isLoading;

export const getErrorStatus = state => state.contacts.error;
