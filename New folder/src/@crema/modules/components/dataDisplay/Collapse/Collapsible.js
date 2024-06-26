import {Collapse, Space} from 'antd';
import React from 'react';

const {Panel} = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Collapsible = () => {
  return (
    <Space direction='vertical'>
      <Collapse collapsible='header' defaultActiveKey={['1']}>
        <Panel
          header='This panel can only be collapsed by clicking text'
          key='1'
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Collapse collapsible='disabled'>
        <Panel header="This panel can't be collapsed" key='1'>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Space>
  );
};

export default Collapsible;
