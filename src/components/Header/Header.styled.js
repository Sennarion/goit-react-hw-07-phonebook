import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.max};
  font-weight: 700;
`;
