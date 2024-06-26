import React from 'react';
import {Button, message, Popconfirm} from 'antd';
import {
  StyledPopConfirmLeft,
  StyledPopConfirmPlacement,
  StyledPopConfirmRight,
} from './Placement.styled';

const text = 'Are you sure delete this task?';

const Placement = () => {
  function confirm() {
    message.info('Click on Yes.');
  }

  return (
    <StyledPopConfirmPlacement>
      <div style={{marginLeft: 70, whiteSpace: 'nowrap'}}>
        <Popconfirm
          placement='topLeft'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement='top'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement='topRight'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>TR</Button>
        </Popconfirm>
      </div>
      <StyledPopConfirmLeft style={{width: 70, float: 'left'}}>
        <Popconfirm
          placement='leftTop'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>LT</Button>
        </Popconfirm>
        <Popconfirm
          placement='left'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>Left</Button>
        </Popconfirm>
        <Popconfirm
          placement='leftBottom'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>LB</Button>
        </Popconfirm>
      </StyledPopConfirmLeft>
      <StyledPopConfirmRight style={{width: 70, marginLeft: 304}}>
        <Popconfirm
          placement='rightTop'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>RT</Button>
        </Popconfirm>
        <Popconfirm
          placement='right'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>Right</Button>
        </Popconfirm>
        <Popconfirm
          placement='rightBottom'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>RB</Button>
        </Popconfirm>
      </StyledPopConfirmRight>
      <div style={{marginLeft: 70, clear: 'both', whiteSpace: 'nowrap'}}>
        <Popconfirm
          placement='bottomLeft'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement='bottom'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement='bottomRight'
          title={text}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button>BR</Button>
        </Popconfirm>
      </div>
    </StyledPopConfirmPlacement>
  );
};

export default Placement;
