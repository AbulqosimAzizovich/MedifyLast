import styled from 'styled-components';

export const StyledShareBadge = styled.div`
  width: 50px;
  color: white;
  padding: 6px 5px;
  border-radius: 0px;
  ${({theme}) => theme.sizes.borderRadius.base};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    width: 65px;
  }

  & span {
    margin-left: 4px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }
`;
