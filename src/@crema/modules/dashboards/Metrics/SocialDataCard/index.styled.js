import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledSocialDataCard = styled(AppCard)`
  position: relative;

  & .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledSocialData = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const StyledSocialDataItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  width: 50%;

  & h3 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: ${({theme}) => theme.font.weight.medium};
  }

  & p {
    color: ${({theme}) => theme.palette.text.secondary};
    margin-bottom: 4px;
    font-weight: ${({theme}) => theme.font.weight.regular};
  }

  & .anticon {
    color: ${({theme}) => theme.palette.primary.main};
    font-size: 22px;
    margin-bottom: 12px;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
      font-size: 28px;
    }
  }
`;

export const StyledSocialDataLike = styled(StyledSocialDataItem)`
  border-right: ${({theme}) => theme.sizes.borderRadius.base} solid
    ${({theme}) => theme.palette.gray[200]};

  [dir='rtl'] & {
    border-right: 0 none;
    border-left: ${({theme}) => theme.sizes.borderRadius.base} solid
      ${({theme}) => theme.palette.gray[200]};
  }

  & .anticon {
    color: ${({theme}) => theme.palette.secondary.main};
  }
`;
