import {Button, List} from 'antd';
import styled from 'styled-components';

export const StyledPricingWrapper = styled.div`
  padding-top: 10px;
  position: relative;

  & .tag {
    position: absolute;
    left: 30px;
    top: 0;
    z-index: 1;
    padding: 2px 5px;
    min-width: 70px;
    font-size: 12px;
    font-weight: ${({theme}) => theme.font.weight.bold};
    text-transform: uppercase;
    text-align: center;
    border-radius: 0px;
    ${({theme}) => theme.sizes.borderRadius.base};

    [dir='rtl'] & {
      left: auto;
      right: 30px;
    }
  }
`;

export const StyledPricingOneCard = styled.div`
  padding: 20px 30px;
  border-radius: 0px;
  ${({theme}) => theme.cardRadius};
  border: 1px solid ${({theme}) => theme.palette.borderColor};
  position: relative;

  & .popular {
    position: absolute;
    right: -30px;
    top: -50px;
    z-index: 0;
    display: 'flex';
    color: ${({theme}) => theme.palette.primary.main};
    & .popularText {
      position: relative;
      top: -10px;
      left: 5px;
      @media screen and (min-width: ${({theme}) => theme.breakpoints.xs}px) {
        font-size: ${({theme}) => theme.font.size.sm};
      }

      @media screen and (min-width: ${({theme}) => theme.breakpoints.xl}px) {
        font-size: ${({theme}) => theme.font.size.base};
      }
    }
    &:before {
      content: '""';
      position: absolute;
      right: -50px;
      bottom: -30px;
      z-index: -1px;
      width: 200px;
      height: 200px;
      border-radius: 0px;
    }
  }

  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledPricingOneCardHeader = styled.div`
  position: relative;
  padding-right: 20px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 20px;
  }
`;
export const StyledPricingOneCardHeaderTitle = styled.h3`
  font-weight: ${({theme}) => theme.font.weight.bold};
  font-size: 20px;
  margin-bottom: 6px;
  position: relative;
  z-index: 3;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    font-size: 32px;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    font-size: 36px;
  }
`;

export const StyledPricingOneCardHeaderSubtitle = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 3;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    font-size: 22px;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    font-size: 24px;
    margin-bottom: 30px;
  }

  & span {
    font-weight: ${({theme}) => theme.font.weight.bold};
  }
`;

export const StyledPricingOneBtnView = styled.div`
  margin-bottom: 30px;
`;

export const StyledPricingOneBtn = styled(Button)`
  width: 100%;
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.palette.text.primary};
  max-height: 46px;
  border-radius: 0px;
  border: solid 2px transparent;
  background: ${({theme}) => theme.palette.background.paper};

  &:hover,
  &:focus {
    color: ${({theme}) => theme.palette.text.primary} !important;
  }
`;

export const StyledPricingOneCardList = styled(List)`
  position: relative;

  & li {
    padding: 0 !important;
    margin-bottom: 16px;
    justify-content: flex-start !important;
    border-bottom: 0 none !important;

    & .icon {
      margin-right: 14px;
      font-size: 16px;
      color: ${({theme}) => theme.palette.secondary.main};
      margin-top: 4px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 14px;
      }
    }

    & p {
      margin-bottom: 0;
    }
  }
`;
