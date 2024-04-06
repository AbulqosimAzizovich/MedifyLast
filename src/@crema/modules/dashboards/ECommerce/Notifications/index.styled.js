import AppScrollbar from '@crema/components/AppScrollbar';
import {List} from 'antd';
import styled from 'styled-components';

export const StyledNotificationScrollbar = styled(AppScrollbar)`
  height: 400px;
`;

export const StyledNoticationCell = styled(List.Item)`
  position: relative;
  padding: 8px 20px !important;

  & .ant-list-item-meta {
    align-items: center;
  }

  & .ant-list-item-meta-avatar {
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-avatar {
    width: 48px;
    height: 48px;
  }

  & h4 {
    color: ${({theme}) => theme.palette.text.primary};
    margin-bottom: 2px;
    font-size: ${({theme}) => theme.font.size.base};
    font-weight: ${({theme}) => theme.font.weight.medium};
  }

  & p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: ${({theme}) => theme.font.size.base};
    color: ${({theme}) => theme.palette.text.secondary};
    margin-bottom: 0;

    & span {
      display: block;
      margin-right: 8px;
      color: ${({theme}) => theme.palette.primary.main};

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 8px;
      }
    }
  }
`;
