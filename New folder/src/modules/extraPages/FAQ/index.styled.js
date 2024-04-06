import styled from 'styled-components';

export const StyledFaqSection = styled.div`
  width: 100%;
`;

export const StyledFaqHeader = styled.div`
  width: 100%;
  min-height: 224px;
  padding: 20px;
  margin-bottom: 32px;
  background-color: ${({theme}) => theme.palette.blue[5]};
  border-radius: 0px;
  ${({theme}) => theme.cardRadius};
  color: ${({theme}) => theme.palette.background.paper};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({theme}) => theme.font.size.lg};

  & h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: ${({theme}) => theme.font.weight.medium};
    color: ${({theme}) => theme.palette.background.paper};
  }
`;
