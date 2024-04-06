import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledOrdersCard = styled(AppCard)`
  position: relative;
  background-color: ${({theme}) => theme.palette.primary.main};
  color: white;

  & .recharts-label {
    fill: white;
  }

  & .ant-card-actions {
    padding: 16px 20px;
    border-top: 0 none;
    background-color: transparent;

    & li {
      margin: 0;
    }

    & > li > span:hover {
      color: white;
      cursor: inherit;
    }
  }

  & .ant-card-head {
    color: white;
  }
`;

export const StyledOrdersFooter = styled.div`
  width: 100%;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.font.weight.medium};
  color: ${({theme}) => theme.palette.text.primary};

  & p {
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.5);

    & span {
      margin-left: 8px;
      color: white;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 8px;
      }
    }
  }
`;
