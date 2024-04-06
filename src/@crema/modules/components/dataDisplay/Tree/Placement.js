import {Radio, TreeSelect} from 'antd';
import React, {useState} from 'react';

const {TreeNode} = TreeSelect;
const Placement = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <div>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value='topLeft'>topLeft</Radio.Button>
        <Radio.Button value='topRight'>topRight</Radio.Button>
        <Radio.Button value='bottomLeft'>bottomLeft</Radio.Button>
        <Radio.Button value='bottomRight'>bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300,
        }}
        placeholder='Please select'
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
      >
        <TreeNode value='parent 1' title='parent 1'>
          <TreeNode value='parent 1-0' title='parent 1-0'>
            <TreeNode value='leaf1' title='leaf1' />
            <TreeNode value='leaf2' title='leaf2' />
          </TreeNode>
          <TreeNode value='parent 1-1' title='parent 1-1'>
            <TreeNode
              value='leaf3'
              title={
                <b
                  style={{
                    color: '#08c',
                  }}
                >
                  leaf3
                </b>
              }
            />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </div>
  );
};
export default Placement;
