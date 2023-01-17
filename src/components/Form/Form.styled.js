import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const LabelName = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Input = styled.input`
  display: block;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(1)};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: transparent;
  }
`;
