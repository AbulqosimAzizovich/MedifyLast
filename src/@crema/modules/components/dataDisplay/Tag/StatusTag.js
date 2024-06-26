import {Divider, Tag} from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import React from 'react';

const StatusTag = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
      <Divider orientation='left'>Without icon</Divider>
      <div>
        <Tag color='success'>success</Tag>
        <Tag color='processing'>processing</Tag>
        <Tag color='error'>error</Tag>
        <Tag color='warning'>warning</Tag>
        <Tag color='default'>default</Tag>
      </div>
      <Divider orientation='left'>With icon</Divider>
      <div>
        <Tag icon={<CheckCircleOutlined />} color='success'>
          success
        </Tag>
        <Tag icon={<SyncOutlined spin />} color='processing'>
          processing
        </Tag>
        <Tag icon={<CloseCircleOutlined />} color='error'>
          error
        </Tag>
        <Tag icon={<ExclamationCircleOutlined />} color='warning'>
          warning
        </Tag>
        <Tag icon={<ClockCircleOutlined />} color='default'>
          waiting
        </Tag>
        <Tag icon={<MinusCircleOutlined />} color='default'>
          stop
        </Tag>
      </div>
    </div>
  );
};

export default StatusTag;
