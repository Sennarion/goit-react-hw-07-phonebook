import { useSelector } from 'react-redux';
import { ContactsListItem, SubTitle } from 'components';
import { List } from './ContactsList.styled';
import { getFilteredContacts } from 'redux/selectors';

function ContactsList() {
  const filteredContacts = useSelector(getFilteredContacts);

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
