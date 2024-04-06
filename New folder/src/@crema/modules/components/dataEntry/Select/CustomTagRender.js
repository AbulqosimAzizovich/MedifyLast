import {Select, Tag} from 'antd';
import React from 'react';

const options = [
  {value: 'gold'},
  {value: 'lime'},
  {value: 'green'},
  {value: 'cyan'},
];

function tagRender(props) {
  const {label, value, closable, onClose} = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{marginRight: 3}}
    >
      {label}
    </Tag>
  );
}

const CustomTagRender = () => {
  return (
    <Select
      mode='multiple'
      showArrow
      tagRender={tagRender}
      defaultValue={['gold', 'cyan']}
      style={{width: '100%'}}
      options={options}
    />
  );
};

export default CustomTagRender;
