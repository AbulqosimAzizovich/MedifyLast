import React from 'react';
import {Cascader, Space} from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
          },
        ],
      },
    ],
  },
];

function handleAreaClick(e) {
  e.stopPropagation();
}

const CustomRender = () => {
  const displayRender = (labels, selectedOptions) =>
    labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (
            <a onClick={(e) => handleAreaClick(e, label, option)}>
              {option.code}
            </a>
            )
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });
  return (
    <Space>
      <Cascader
        options={options}
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        displayRender={displayRender}
        style={{width: '100%'}}
      />
    </Space>
  );
};

export default CustomRender;
