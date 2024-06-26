import React from 'react';
import {Slider, Space, Switch} from 'antd';

class Basic extends React.Component {
  state = {
    disabled: false,
  };
  handleDisabledChange = (disabled) => {
    this.setState({disabled});
  };

  render() {
    const {disabled} = this.state;
    return (
      <Space direction='vertical' style={{width: '100%'}}>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled:{' '}
        <Switch
          size='small'
          checked={disabled}
          onChange={this.handleDisabledChange}
        />
      </Space>
    );
  }
}

export default Basic;
