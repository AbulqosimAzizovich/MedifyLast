import React, {useState} from 'react';
import dayjs from 'dayjs';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';
import {MailOutlined} from '@ant-design/icons';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledMailModal,
  StyledMailModalContent,
  StyledMailModalSuffix,
  StyledMailModalTextArea,
  StyledMailModalTo,
  StyledMainForm,
  StyledMainModalBtn,
  StyledMainModalFooter,
  StyledMainModalScrollbar,
} from './index.styled';
import {postDataApi} from '@crema/hooks/APIHooks';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {generateRandomUniqueNumber} from '@crema/helpers/Common';

export const isValidEmail = (value) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const ComposeMail = (props) => {
  const {isComposeMail, onCloseComposeMail} = props;
  const infoViewActionsContext = useInfoViewActionsContext();

  const [isShowBcc, onShowBcc] = useState(false);

  const [isShowCC, onShowCC] = useState(false);

  const {messages} = useIntl();

  const onFinish = (values) => {
    const mail = {
      id: generateRandomUniqueNumber(),
      isChecked: false,
      isStarred: false,
      label: {
        id: 211,
        name: 'Crema',
        alias: 'crema',
        icon: <MailOutlined />,
      },
      messages: [
        {
          description: values.content ? values.content : 'No Message',
          sender: {
            name: values.displayName ? values.displayName : values.username,
            email: values.username,
            profilePic: '',
          },
          to: [
            {
              id: 1,
              name: 'Crema',
              email: 'info@cremawork.com',
              profilePic: '',
            },
          ],
          cc: [],
          bcc: [],
          messageId: generateRandomUniqueNumber(),
          sentOn: dayjs().format('ddd, MMM DD, YYYY'),
          isRead: false,
          isStarred: false,
        },
      ],
      hasAttachments: false,
      isRead: true,
      folderValue: 122,
      sentOn: dayjs().format('llll'),
      subject: values.subject !== '' ? values.subject : 'No Subject',
    };
    postDataApi('/api/mailApp/compose', infoViewActionsContext, {mail})
      .then(() => {
        infoViewActionsContext.showMessage('Mail Sent Successfully');
        onCloseComposeMail(false);
      })
      .catch((error) => {
        onCloseComposeMail(false);
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledMailModal
      title={messages['mailApp.compose']}
      open={isComposeMail}
      width={800}
      onOk={isComposeMail}
      onCancel={() => onCloseComposeMail(false)}
      footer={false}
    >
      <StyledMainModalScrollbar>
        <StyledMainForm
          name='basic'
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <StyledMailModalContent>
            <StyledMailModalTo
              name='username'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input email!',
                },
              ]}
            >
              <Input
                prefix={
                  <span className='mail-modal-prefix'>
                    <IntlMessages id='common.to' />
                  </span>
                }
                suffix={
                  <StyledMailModalSuffix>
                    <span onClick={() => onShowCC(!isShowCC)}>
                      <IntlMessages id='common.cc' />
                    </span>

                    <span onClick={() => onShowBcc(!isShowBcc)}>
                      <IntlMessages id='common.bcc' />
                    </span>
                  </StyledMailModalSuffix>
                }
              />
            </StyledMailModalTo>

            {isShowCC ? (
              <Form.Item
                name='cc'
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your cc!',
                  },
                ]}
              >
                <Input placeholder={messages['common.cc']} />
              </Form.Item>
            ) : null}

            {isShowBcc ? (
              <Form.Item
                name='bcc'
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your bcc!',
                  },
                ]}
              >
                <Input placeholder={messages['common.bcc']} />
              </Form.Item>
            ) : null}
            <Form.Item
              name='subject'
              rules={[{required: true, message: 'Please input your Subject!'}]}
            >
              <Input placeholder={messages['common.subject']} />
            </Form.Item>

            <Form.Item name='content'>
              <StyledMailModalTextArea
                theme='snow'
                placeholder={messages['common.writeContent']}
              />
            </Form.Item>
          </StyledMailModalContent>

          <StyledMainModalFooter>
            <StyledMainModalBtn type='primary' htmlType='submit'>
              <IntlMessages id='common.send' />
            </StyledMainModalBtn>
          </StyledMainModalFooter>
        </StyledMainForm>
      </StyledMainModalScrollbar>
    </StyledMailModal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
};
