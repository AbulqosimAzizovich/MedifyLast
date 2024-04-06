import AppScrollbar from '@crema/components/AppScrollbar';
import {Card} from 'antd';
import styled from 'styled-components';

export const StyledKnowKbCard = styled(Card)`
  & .ant-card-body {
    padding: 20px;
  }

  & h5 {
    margin-bottom: 8px;
    font-size: ${({theme}) => theme.font.size.lg};
    font-weight: ${({theme}) => theme.font.weight.medium};
  }
`;

export const StyledKnowKbScrollbar = styled(AppScrollbar)`
  margin-bottom: 20px;
  height: 130px;
`;

export const StyledKnowBadgeGroup = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledKnowSection = styled.div`
  margin-bottom: 8px;

  & h3 {
    color: ${({theme}) => theme.palette.text.primary};
    margin-bottom: 16px;
    font-size: ${({theme}) => theme.font.size.lg};
    font-weight: ${({theme}) => theme.font.weight.bold};
    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledKnowSales = styled(StyledKnowSection)`
  margin-bottom: 16px;
  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    margin-bottom: 40px;
  }
`;

export const StyledKnowBadge = styled.span`
  font-size: ${({theme}) => theme.font.size.base};
  text-transform: uppercase;
  border-radius: 0px;
  border: 1px solid ${({theme}) => theme.palette.borderColor};
  margin: 8px;
  font-weight: ${({theme}) => theme.font.weight.medium};
  padding: 5px 12px;
`;
