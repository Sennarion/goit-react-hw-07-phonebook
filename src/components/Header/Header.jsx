import { Form } from '../';
import { StyledHeader, HeaderContent, Logo } from './Header.styled';
import { Container } from '../';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo>Phonebook</Logo>
          <Form />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}

export default Header;
