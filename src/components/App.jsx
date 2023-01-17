import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Filter, ContactsList, Container, Section, Header } from './';

export default function App() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Filter />
          <ContactsList />
        </Container>
      </Section>
      <GlobalStyleComponent />
    </>
  );
}
