import React, {useState} from 'react';
import {Button, Col, Form, Input} from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import {useDropzone} from 'react-dropzone';
import {useAuthUser} from '@crema/hooks/AuthHooks';
import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadBtnView,
  StyledInfoUploadContent,
} from './index.styled';
import {StyledUserProfileGroupBtn} from '../index.styled';

const PersonalInfo = () => {
  const {user} = useAuthUser();

  const [userImage, setUserImage] = useState('/assets/images/placeholder.jpg');

  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setUserImage('/assets/images/placeholder.jpg');
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        ...user,
        userImage: user.photoURL
          ? user.photoURL
          : '/assets/images/placeholder.jpg',
      }}
      style={{borderBottom: '1px solid grey', paddingBottom: '60px'}}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          width: '100%',
          gap: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <StyledInfoUploadAvatar src={userImage} />

          <StyledInfoUploadContent>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <label htmlFor='icon-button-file'>
                <Button
                  style={{width: '180px', marginTop: '15px'}}
                  type='primary'
                >
                  Upload
                </Button>
              </label>
            </div>

            <Button
              style={{width: '180px', marginTop: '15px'}}
              onClick={onReset}
            >
              Reset
            </Button>
          </StyledInfoUploadContent>
        </div>

        <div style={{}}>
          <p>Sunatilla Zokirjonov</p>
          <p>user@gmail.com</p>
          {/* <Col xs={24} md={12}>
            <Form.Item
              name='username'
              rules={[
                {required: true, message: 'Please input your User Name!'},
              ]}
            >
              <Input placeholder='User Name' />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name='email'
              rules={[
                {required: true, message: 'Please input your e-mail address!'},
              ]}
            >
              <Input type='text' placeholder='E-mail' />
            </Form.Item>
          </Col> */}
        </div>
      </div>

      {/* <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            name='displayName'
            rules={[{required: true, message: 'Please input your Full Name!'}]}
          >
            <Input placeholder='Full Name' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='company'
            rules={[{required: true, message: 'Please input your company!'}]}
          >
            <Input type='text' placeholder='Company' />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className='user-profile-group-btn'
          >
            <Button type='primary' htmlType='submit'>
              Save Changes
            </Button>
            <Button htmlType='cancel'>Cancel</Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </AppRowContainer> */}
    </Form>
  );
};

export default PersonalInfo;
