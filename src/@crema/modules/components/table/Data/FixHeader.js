import React from 'react';
import {Space, Table} from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const FixHeader = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{pageSize: 50}}
        scroll={{y: 240}}
      />
    </Space>
  );
};

export default FixHeader;
