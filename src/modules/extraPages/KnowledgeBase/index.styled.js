import {Divider, Input} from 'antd';
import styled from 'styled-components';

const {Search} = Input;
export const StyledKnowBase = styled.div`
  width: 100%;
`;

export const StyledKnowBaseHeader = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  & h2 {
    color: ${({theme}) => theme.palette.text.primary};
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: ${({theme}) => theme.font.weight.medium};
  }
`;

export const StyledKnowSearch = styled(Search)`
  & .ant-btn {
    [dir='rtl'] & {
      border-radius: 0px;
      ${({theme}) => theme.sizes.borderRadius.base} 0 0
        ${({theme}) => theme.sizes.borderRadius.base} !important;
    }
  }

  & .ant-input-group .ant-input {
    height: 36px;
  }
`;

export const StyledKnowDivider = styled(Divider)`
  margin-top: 16px;
  margin-bottom: 16px;
  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
