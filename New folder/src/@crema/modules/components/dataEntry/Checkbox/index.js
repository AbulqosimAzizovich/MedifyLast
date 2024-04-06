import React from 'react';
import {Col} from 'antd';

import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import Disabled from './Disabled';
import DisabledSource from '!!raw-loader!./Disabled';
import ControlledCheckbox from './ControlledCheckbox';
import ControlledCheckboxSource from '!!raw-loader!./ControlledCheckbox';
import CheckboxGroups from './CheckboxGroups';
import CheckboxGroupsSource from '!!raw-loader!./CheckboxGroups';
import UseWithGrid from './UseWithGrid';
import UseWithGridSource from '!!raw-loader!./UseWithGrid';
import CheckAll from './CheckAll';
import CheckAllSource from '!!raw-loader!./CheckAll';

const Checkbox = () => {
  return (
    <>
      <AppComponentHeader
        title='Checkbox'
        refUrl='https://ant.design/components/checkbox/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='checkbox-a'>
          <AppComponentCard
            title='Basic'
            description='The simplest usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='checkbox-b'>
          <AppComponentCard
            title='Controlled Checkbox'
            description="Set a target for 'Affix', which is listen to scroll event of target element (default is window)."
            component={ControlledCheckbox}
            source={ControlledCheckboxSource}
          />
        </Col>
        <Col xs={24} lg={12} key='checkbox-c'>
          <AppComponentCard
            title='Disabled'
            description='The simplest usage.'
            component={Disabled}
            source={DisabledSource}
          />
        </Col>
        <Col xs={24} lg={12} key='checkbox-d'>
          <AppComponentCard
            title='Use With Grid'
            description='Callback with affixed state.'
            component={UseWithGrid}
            source={UseWithGridSource}
          />
        </Col>
        <Col span={24} key='checkbox-e'>
          <AppComponentCard
            title='Checkbox Groups'
            description='Callback with affixed state.'
            component={CheckboxGroups}
            source={CheckboxGroupsSource}
          />
        </Col>
        <Col span={24} key='checkbox-f'>
          <AppComponentCard
            title='Check All'
            description='Callback with affixed state.'
            component={CheckAll}
            source={CheckAllSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Checkbox;
