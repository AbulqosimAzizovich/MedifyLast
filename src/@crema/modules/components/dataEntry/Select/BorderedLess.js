import {Select} from 'antd';
import React from 'react';

const {Option} = Select;

const BorderedLess = () => {
  return (
    <>
      <Select defaultValue='lucy' style={{width: 120}} bordered={false}>
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='Yiminghe'>yiminghe</Option>
      </Select>
      <Select
        defaultValue='lucy'
        style={{width: 120}}
        disabled
        bordered={false}
      >
        <Option value='lucy'>Lucy</Option>
      </Select>
    </>
  );
};

export default BorderedLess;
