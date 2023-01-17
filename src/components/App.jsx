import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Filter, ContactsList, Container, Section, Header } from './';
import {
  getAllContacts,
  getErrorStatus,
  getLoadingStatus,
} from 'redux/selectors';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getAllContacts);
  const errorStatus = useSelector(getErrorStatus);
  const loadingStatus = useSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {loadingStatus && <Loader />}
          {contacts.length > 0 && (
            <>
              <Filter />
              <ContactsList />
            </>
          )}
          {errorStatus && <h2>{errorStatus}</h2>}
        </Container>
      </Section>
      <GlobalStyleComponent />
    </>
  );
}
