import styled from 'styled-components';

export const StyledInvoiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    padding: 40px 32px;
    margin-bottom: 32px;
  }
`;
export const StyledInvoice2Header = styled(StyledInvoiceHeader)`
  flex-direction: column;

  & .invoice-logo {
    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      justify-content: center;
      margin-bottom: 32px;
      margin-right: 0;

      [dir='rtl'] & {
        margin-left: 0;
      }
    }
  }
`;

export const StyledInvoiceHeaderRow = styled.div`
  margin-left: -12px;
  margin-right: -12px;
  color: ${({theme}) => theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledInvoiceHeaderItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 12px;
  text-align: center;
  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
    margin-bottom: 0;
    text-align: left;

    [dir='rtl'] & {
      text-align: right;
    }
  }

  &:last-child {
    @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
      text-align: right;

      [dir='rtl'] & {
        text-align: left;
      }
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      text-align: left;

      [dir='rtl'] & {
        text-align: right;
      }
    }
  }

  & h3 {
    font-size: ${({theme}) => theme.font.size.lg};
    color: ${({theme}) => theme.palette.gray[700]};
    margin-bottom: 4px;
    font-weight: ${({theme}) => theme.font.weight.bold};
  }

  & p {
    margin-bottom: 4px;
  }
`;
