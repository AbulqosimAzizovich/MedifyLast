import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import SwitchDisabled from './SwitchDisabled';
import SwitchDisabledSource from '!!raw-loader!./SwitchDisabled';
import SwitchTextIcon from './SwitchTextIcon';
import SwitchTextIconSource from '!!raw-loader!./SwitchTextIcon';
import SwitchSize from './SwitchSize';
import SwitchSizeSource from '!!raw-loader!./SwitchSize';
import SwitchLoading from './SwitchLoading';
import SwitchLoadingSource from '!!raw-loader!./SwitchLoading';

class Switches extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Switches'
          refUrl='https://ant.design/components/switches/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='switch-a'>
            <AppComponentCard
              title='Basic'
              description='The most basic usage.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='switch-b'>
            <AppComponentCard
              title='Switch Disabled'
              description='Disabled state of Switch.'
              component={SwitchDisabled}
              source={SwitchDisabledSource}
            />
          </Col>
          <Col xs={24} lg={12} key='switch-c'>
            <AppComponentCard
              title='Switch Text Icon'
              description='With text and icon.'
              component={SwitchTextIcon}
              source={SwitchTextIconSource}
            />
          </Col>
          <Col xs={24} lg={12} key='switch-d'>
            <AppComponentCard
              title='Switch Two Size'
              description='size="small" represents a small sized switch.'
              component={SwitchSize}
              source={SwitchSizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='switch-e'>
            <AppComponentCard
              title='Switch Loading'
              description='Mark a pending state of switch.'
              component={SwitchLoading}
              source={SwitchLoadingSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Switches;
