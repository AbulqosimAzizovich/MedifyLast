import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import HalfStar from './HalfStar';
import HalfStarSource from '!!raw-loader!./HalfStar';
import ShowCopywrite from './ShowCopywrite';
import ShowCopywriteSource from '!!raw-loader!./ShowCopywrite';
import ReadOnly from './ReadOnly';
import ReadOnlySource from '!!raw-loader!./ReadOnly';
import ClearStar from './ClearStar';
import ClearStarSource from '!!raw-loader!./ClearStar';
import OtherCharactor from './OtherCharactor';
import OtherCharactorSource from '!!raw-loader!./OtherCharactor';
import CustomizeCharacter from './CustomizeCharacter';
import CustomizeCharacterSource from '!!raw-loader!./CustomizeCharacter';

class Rate extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Rate'
          refUrl='https://ant.design/components/rate/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='rate-a'>
            <AppComponentCard
              title='Basic'
              description='The simplest usage.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='rate-b'>
            <AppComponentCard
              title='Half Star'
              description='Support select half star.'
              component={HalfStar}
              source={HalfStarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='rate-c'>
            <AppComponentCard
              title='Other Charactor'
              description='Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.'
              component={OtherCharactor}
              source={OtherCharactorSource}
            />
          </Col>
          <Col xs={24} lg={12} key='rate-d'>
            <AppComponentCard
              title='Read Only'
              description='Read only, cant use mouse to interact.'
              component={ReadOnly}
              source={ReadOnlySource}
            />
          </Col>
          <Col xs={24} lg={12} key='rate-e'>
            <AppComponentCard
              title='Clear Star'
              description='Support set allow to clear star when click again.'
              component={ClearStar}
              source={ClearStarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='rate-f'>
            <AppComponentCard
              title='Show Copy write'
              description='Add copywriting in rate components.'
              component={ShowCopywrite}
              source={ShowCopywriteSource}
            />
          </Col>
          <Col xs={24} lg={12} key='rate-g'>
            <AppComponentCard
              title='Customize Character'
              description='Can customize each character using (RateProps) => ReactNode.'
              component={CustomizeCharacter}
              source={CustomizeCharacterSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Rate;
