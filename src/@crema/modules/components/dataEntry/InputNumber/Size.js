import React from 'react';
import {InputNumber, Space} from 'antd';

const Size = () => {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Space>
      <InputNumber
        size='large'
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
      <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber
        size='small'
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
    </Space>
  );
};

export default Size;
