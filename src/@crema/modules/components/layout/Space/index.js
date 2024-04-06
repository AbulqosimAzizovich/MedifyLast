import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';
import BasicUsage from './BasicUsage';
import BasicUsageSource from '!!raw-loader!./BasicUsage';
import SpaceLayout from './SpaceLayout';
import SpaceLayoutSource from '!!raw-loader!./SpaceLayout';
import Align from './Align';
import AlignSource from '!!raw-loader!./Align';
import CustomizeSize from './CustomizeSize';
import CustomizeSizeSource from '!!raw-loader!./CustomizeSize';
import Wrap from './Wrap';
import WrapSource from '!!raw-loader!./Wrap';
import Split from './Split';
import SplitSource from '!!raw-loader!./Split';
import VerticalSpace from './VerticalSpace';
import VerticalSpaceSource from '!!raw-loader!./VerticalSpace';

class Space extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Space'
          refUrl='https://ant.design/components/space/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='space-a'>
            <AppComponentCard
              title='Basic Usage'
              description='Crowded components horizontal spacing.'
              component={BasicUsage}
              source={BasicUsageSource}
            />
          </Col>
          <Col xs={24} lg={12} key='space-b'>
            <AppComponentCard
              title='Split'
              description='Crowded components split.'
              component={Split}
              source={SplitSource}
            />
          </Col>

          <Col xs={24} lg={12} key='space-c'>
            <AppComponentCard
              title='Space Size'
              description='large, middle and small preset sizes.'
              component={SpaceLayout}
              source={SpaceLayoutSource}
            />
          </Col>
          <Col xs={24} lg={12} key='space-d'>
            <AppComponentCard
              title='CustomizeSize'
              description='Custom spacing size.'
              component={CustomizeSize}
              source={CustomizeSizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='space-e'>
            <AppComponentCard
              title='Vertical Space'
              description='Crowded components vertical spacing.'
              component={VerticalSpace}
              source={VerticalSpaceSource}
            />
          </Col>
          <Col xs={24} lg={12} key='space-f'>
            <AppComponentCard
              title='Align'
              description='large, middle and small preset sizes.'
              component={Align}
              source={AlignSource}
            />
          </Col>

          <Col xs={24} lg={12} key='space-g'>
            <AppComponentCard
              title='Wrap'
              description='Auto wrap line.'
              component={Wrap}
              source={WrapSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Space;
