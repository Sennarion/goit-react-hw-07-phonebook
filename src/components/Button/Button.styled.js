import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme, red }) =>
    red ? theme.colors.red : theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;
