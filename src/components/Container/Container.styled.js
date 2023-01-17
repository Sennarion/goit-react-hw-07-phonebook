import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.media.desktop};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing(8)};
  padding-right: ${({ theme }) => theme.spacing(8)};
`;
