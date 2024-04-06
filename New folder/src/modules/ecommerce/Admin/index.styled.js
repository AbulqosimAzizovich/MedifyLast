import styled from 'styled-components';

export const StyledTitle5 = styled.h5`
  color: ${({theme}) => theme.palette.text.primary};
  font-weight: ${({theme}) => theme.font.weight.bold};
  margin-bottom: 0;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    margin-bottom: 16px;
  }
`;
