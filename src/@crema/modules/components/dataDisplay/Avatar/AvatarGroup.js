import React from 'react';
import {Avatar, Divider, Tooltip} from 'antd';
import {AntDesignOutlined, UserOutlined} from '@ant-design/icons';

const AvatarGroup = () => (
  <>
    <Avatar.Group>
      <Avatar src='https://joeschmoe.io/api/v1/random' />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title='Ant User' placement='top'>
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src='https://joeschmoe.io/api/v1/random' />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title='Ant User' placement='top'>
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size='large'
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src='https://joeschmoe.io/api/v1/random' />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title='Ant User' placement='top'>
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
  </>
);
export default AvatarGroup;
