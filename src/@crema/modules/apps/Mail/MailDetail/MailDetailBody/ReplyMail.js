import React, {useState} from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {Form, Input} from 'antd';
import {useIntl} from 'react-intl';
// import '../../../../../shared/styles/vendors/ql-editor.css';
import AppIconButton from '@crema/components/AppIconButton';
import {AiOutlineDelete} from 'react-icons/ai';
import {
  StyledMailDetailBtn,
  StyledMailDetailForm,
  StyledMailDetailFormFooter,
  StyledMailDetailInput,
  StyledMailDetailTextarea,
  StyledMailFormFooter,
  StyledMailModalSuffix,
} from '../index.styled';
import {getFormattedDate} from '@crema/helpers/DateHelper';
import {generateUniqueID} from '@crema/helpers/StringHelper';

const ReplyMail = (props) => {
  const [isShowCC, onShowCC] = useState(false);
  const [isShowBcc, onShowBcc] = useState(false);

  const {messages} = useIntl();
  const {message, isForward, index, onSubmitMail, onDeleteDraft} = props;

  const onFinish = (values) => {
    onSubmitMail(
      {
        messageId: generateUniqueID(),
        sender: getSender(),
        description: values.description,
        to: [message.sender],
        cc: values.cc,
        bcc: values.bcc,
        isStarred: false,
        sentOn: getFormattedDate(),
      },
      index,
    );
  };

  const getSender = () => {
    if (message.sender.id === 1) {
      return message.to[0];
    } else {
      return message.sender;
    }
  };
  return (
    <StyledMailDetailForm
      name='basic'
      initialValues={{
        username: isForward ? '' : getSender().email,
        ...message,
        description: '',
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <StyledMailDetailInput
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
      </Form.Item>

      {isShowCC ? (
        <Form.Item
          name='cc'
          rules={[{required: true, message: 'Please input your cc!'}]}
        >
          <StyledMailDetailInput placeholder={messages['common.cc']} />
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
        className='form-field'
        name='description'
        rules={[{required: true, message: 'Please input your Content!'}]}
      >
        <StyledMailDetailTextarea
          theme='snow'
          placeholder={messages['common.writeContent']}
        />
      </Form.Item>

      <StyledMailFormFooter>
        <StyledMailDetailBtn type='primary' htmlType='submit'>
          <IntlMessages id='common.send' />
        </StyledMailDetailBtn>
        <StyledMailDetailFormFooter>
          <AppIconButton
            title={<IntlMessages id='common.trash' />}
            icon={<AiOutlineDelete />}
            onClick={onDeleteDraft}
          />
        </StyledMailDetailFormFooter>
      </StyledMailFormFooter>
    </StyledMailDetailForm>
  );
};

export default ReplyMail;

ReplyMail.propTypes = {
  message: PropTypes.object.isRequired,
  onSubmitMail: PropTypes.func,
  onDeleteDraft: PropTypes.func,
  isForward: PropTypes.bool,
  index: PropTypes.number,
};
