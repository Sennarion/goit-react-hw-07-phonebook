import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/operations';
import { getAllContacts } from 'redux/selectors';
import { StyledForm, Input, LabelName } from './Form.styled';
import { Button } from 'components';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(createContact({ name, number }));
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <label>
        <LabelName>Name</LabelName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <LabelName>Number</LabelName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
}
