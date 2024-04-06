import {Breadcrumb} from 'antd';
import React from 'react';

const items = [
  {
    key: 1,
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.alipay.com/'
      >
        General
      </a>
    ),
  },
  {
    key: 2,
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.taobao.com/'
      >
        Layout
      </a>
    ),
  },
  {
    key: 3,
    label: (
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        Navigation
      </a>
    ),
  },
];

const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href=''>Component</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item menu={{items}}>
        <a href=''>General</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Button</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
