import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledOrderId = styled.span`
  text-decoration: underline;
  color: ${({theme}) => theme.palette.primary.main};
`;

export const StyledOrderTable = styled(AppTableContainer)`
  & .ant-table table {
    table-layout: auto !important;
  }

  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    font-weight: ${({theme}) => theme.font.weight.bold};
    background-color: transparent;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }

    &.order-table-action {
      text-align: center;
      background-color: ${({theme}) =>
        theme.palette.background.paper} !important;
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 12px 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }

    &.order-table-action {
      text-align: center;
      background-color: ${({theme}) =>
        theme.palette.background.paper} !important;
    }
  }
  ō & .badge {
    padding: 3px 10px;
    border-radius: 0px;
    ${({theme}) => theme.cardRadius};
    display: inline-block;
  }
`;
