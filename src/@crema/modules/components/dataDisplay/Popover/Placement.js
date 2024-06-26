import React from 'react';
import {Button, Popover, Space} from 'antd';
import {
  StyledPopOverLeft,
  StyledPopOverPlacement,
  StyledPopOverRight,
} from './Placement.styled';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

const Placement = () => {
  return (
    <Space>
      <StyledPopOverPlacement>
        <div style={{marginLeft: buttonWidth, whiteSpace: 'nowrap'}}>
          <Popover
            placement='topLeft'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>TL</Button>
          </Popover>
          <Popover
            placement='top'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>Top</Button>
          </Popover>
          <Popover
            placement='topRight'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>TR</Button>
          </Popover>
        </div>
        <StyledPopOverLeft style={{width: buttonWidth, float: 'left'}}>
          <Popover
            placement='leftTop'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>LT</Button>
          </Popover>
          <Popover
            placement='left'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>Left</Button>
          </Popover>
          <Popover
            placement='leftBottom'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>LB</Button>
          </Popover>
        </StyledPopOverLeft>
        <StyledPopOverRight
          style={{width: buttonWidth, marginLeft: buttonWidth * 4 + 24}}
        >
          <Popover
            placement='rightTop'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>RT</Button>
          </Popover>
          <Popover
            placement='right'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>Right</Button>
          </Popover>
          <Popover
            placement='rightBottom'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>RB</Button>
          </Popover>
        </StyledPopOverRight>
        <div
          style={{
            marginLeft: buttonWidth,
            clear: 'both',
            whiteSpace: 'nowrap',
          }}
        >
          <Popover
            placement='bottomLeft'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>BL</Button>
          </Popover>
          <Popover
            placement='bottom'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>Bottom</Button>
          </Popover>
          <Popover
            placement='bottomRight'
            title={text}
            content={content}
            trigger='click'
          >
            <Button>BR</Button>
          </Popover>
        </div>
      </StyledPopOverPlacement>
    </Space>
  );
};

export default Placement;
