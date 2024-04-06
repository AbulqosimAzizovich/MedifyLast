import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import {Button, Form, Input} from 'antd';
import {useIntl} from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import {ReactComponent as Logo} from '../../../../assets/icon/comingsoon.svg';
import {
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorForm,
  StyledErrorFormComing,
  StyledErrorImageLg,
  StyledErrorPara,
} from '../index.styled';

const ComingSoon = () => {
  const {messages} = useIntl();
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <AppPageMeta title='Coming Soon' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledErrorContainer key='coming_soon'>
          <StyledErrorImageLg>
            <Logo />
          </StyledErrorImageLg>
          <div>
            <StyledErrorContent>
              <h3>
                <IntlMessages id='error.comingSoon' />!
              </h3>
              <StyledErrorPara>
                <p className='mb-0'>
                  <IntlMessages id='error.comingSoonMessage1' />
                </p>
                <p className='mb-0'>
                  <IntlMessages id='error.comingSoonMessage2' />
                </p>
              </StyledErrorPara>
            </StyledErrorContent>
            {/* <StyledErrorFormComing>
              <StyledErrorForm
                name='basic'
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name='email'
                  className='form-field'
                  rules={[
                    {required: true, message: 'Please enter Email Address!'},
                  ]}
                >
                  <Input placeholder={messages['common.emailAddress']} />
                </Form.Item>

               
              </StyledErrorForm>
            </StyledErrorFormComing> */}
          </div>
          {/*<AppInfoView />*/}
        </StyledErrorContainer>
      </AppAnimate>
    </>
  );
};

export default ComingSoon;
