import React from 'react';
import {useNavigate} from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import AppPageMeta from '@crema/components/AppPageMeta';
import {ReactComponent as Logo} from '../../../../assets/icon/500.svg';
import {
  StyledErrorButton,
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorImage,
  StyledErrorPara,
} from '../index.styled';

const Error500 = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (
    <>
      <AppPageMeta title='Server Error' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledErrorContainer key='a'>
          <StyledErrorImage>
            <Logo />
          </StyledErrorImage>
          <StyledErrorContent>
            <h3>
              <IntlMessages id='error.500Error' />.
            </h3>
            <StyledErrorPara>
              <p className='mb-0'>
                <IntlMessages id='error.500Message1' />
              </p>
              <p className='mb-0'>
                <IntlMessages id='error.500Message2' />
              </p>
            </StyledErrorPara>
            <StyledErrorButton type='primary' onClick={onGoBackToHome}>
              <IntlMessages id='error.goBackToHome' />
            </StyledErrorButton>
          </StyledErrorContent>
        </StyledErrorContainer>
      </AppAnimate>
    </>
  );
};

export default Error500;
