import React, {useState} from 'react';
import {Affix, Button, Space} from 'antd';

const Basic = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <Space>
      <Affix offsetTop={top}>
        <Button type='primary' onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type='primary' onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </Space>
  );
};

export default Basic;
