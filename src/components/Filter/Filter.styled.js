import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const Input = styled.input`
  display: block;
  min-width: 400px;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(1)};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: transparent;
  }
`;
