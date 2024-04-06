import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import LocaleText from './LocaleText';
import LocaleTextSource from '!!raw-loader!./LocaleText';
import Placement from './Placement';
import PlacementSource from '!!raw-loader!./Placement';
import ConditionalTrigger from './ConditionalTrigger';
import ConditionalTriggerSource from '!!raw-loader!./ConditionalTrigger';
import AsynchronouslyCloseOnPromise from './AsynchronouslyCloseOnPromise';
import AsynchronouslyCloseOnPromiseSource from '!!raw-loader!./AsynchronouslyCloseOnPromise';

class Popconfirm extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='PopConfirm'
          refUrl='https://ant.design/components/popconfirm/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='confirm-a'>
            <AppComponentCard
              title='Basic'
              description='The basic example.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='confirm-b'>
            <AppComponentCard
              title='LocaleText'
              description='Set okText and cancelText props to customize the buttons labels.'
              component={LocaleText}
              source={LocaleTextSource}
            />
          </Col>
          <Col xs={24} lg={12} key='confirm-c'>
            <AppComponentCard
              title='Conditional Trigger'
              description='Make it pop up under some conditions.'
              component={ConditionalTrigger}
              source={ConditionalTriggerSource}
            />
          </Col>
          <Col xs={24} lg={12} key='confirm-d'>
            <AppComponentCard
              title='Asynchronously Close On Promise'
              description='Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.'
              component={AsynchronouslyCloseOnPromise}
              source={AsynchronouslyCloseOnPromiseSource}
            />
          </Col>
          <Col xs={24} lg={12} key='confirm-e'>
            <AppComponentCard
              title='Placement'
              description='There are 12 placement options available. Use arrowPointAtCenter if you want the arrow to point at the center of target.'
              component={Placement}
              source={PlacementSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Popconfirm;
