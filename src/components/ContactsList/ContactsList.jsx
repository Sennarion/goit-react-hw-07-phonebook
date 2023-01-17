import { useSelector } from 'react-redux';
import { ContactsListItem, SubTitle } from 'components';
import { List } from './ContactsList.styled';

function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .reverse();

  return (
    <>
      <SubTitle>Contacts</SubTitle>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
}

export default ContactsList;
