import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import Size from './Size';
import SizeSource from '!!raw-loader!./Size';
import Container from './Container';
import ContainerSource from '!!raw-loader!./Container';
import Customize from './Customize';
import CustomizeSource from '!!raw-loader!./Customize';
import Embedded from './Embedded';
import EmbeddedSource from '!!raw-loader!./Embedded';
import Custom from './Custom';
import CustomSource from '!!raw-loader!./Custom';
import Delay from './Delay';
import DelaySource from '!!raw-loader!./Delay';

class Spin extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Spin'
          refUrl='https://ant.design/components/spin/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='spin-a'>
            <AppComponentCard
              title='Basic'
              description='A simple loading status.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='spin-b'>
            <AppComponentCard
              title='Size'
              description='A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.'
              component={Size}
              source={SizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='spin-c'>
            <AppComponentCard
              title='Container'
              description='Spin in a container.'
              component={Container}
              source={ContainerSource}
            />
          </Col>
          <Col xs={24} lg={12} key='spin-d'>
            <AppComponentCard
              title='Customize'
              description='Customized description content.'
              component={Customize}
              source={CustomizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='spin-e'>
            <AppComponentCard
              title='Embedded'
              description='Embedding content into Spin will set it into loading state.'
              component={Embedded}
              source={EmbeddedSource}
            />
          </Col>
          <Col xs={24} lg={12} key='spin-f'>
            <AppComponentCard
              title='Custom'
              description='Use custom loading indicator.'
              component={Custom}
              source={CustomSource}
            />
          </Col>
          <Col xs={24} lg={12} key='spin-g'>
            <AppComponentCard
              title='Delay'
              description='Specifies a delay for loading state. If spinning ends during delay, loading status wont appear.'
              component={Delay}
              source={DelaySource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Spin;
