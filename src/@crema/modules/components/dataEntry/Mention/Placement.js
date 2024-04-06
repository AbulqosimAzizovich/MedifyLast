import {Mentions} from 'antd';
import React from 'react';

const {Option} = Mentions;
const Placement = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    placement='top'
  >
    <Option value='afc163'>afc163</Option>
    <Option value='zombieJ'>zombieJ</Option>
    <Option value='yesmeck'>yesmeck</Option>
  </Mentions>
);
export default Placement;
