import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledWidCountryCard = styled(AppCard)`
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledWidCountryMapChart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
