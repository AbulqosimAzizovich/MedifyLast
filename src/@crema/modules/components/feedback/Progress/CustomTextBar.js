import React from 'react';
import {Progress, Space} from 'antd';

const CustomTextBar = () => {
  return (
    <Space>
      <Progress
        type='circle'
        percent={75}
        format={(percent) => `${percent} Days`}
      />
      <Progress type='circle' percent={100} format={() => 'Done'} />
    </Space>
  );
};

export default CustomTextBar;
