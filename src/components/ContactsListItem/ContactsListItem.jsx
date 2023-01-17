import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, Text, Buttons } from './ContactsListItem.styled';
import { Button } from 'components';
import { theme } from '../../styles/theme';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdAutorenew } from 'react-icons/md';

function ContactsListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Text>
        <FaUserAlt color={theme.colors.accent} size={theme.spacing(8)} />
        {name}
      </Text>
      <Text>
        <FaPhoneAlt color={theme.colors.accent} size={theme.spacing(8)} />
        {number}
      </Text>
      <Buttons>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          <MdAutorenew size={theme.spacing(6)} />
          Delete
        </Button>
      </Buttons>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
