import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import Static from './Static';
import StaticSource from '!!raw-loader!./Static';

const Anchor = () => {
  return (
    <>
      <AppComponentHeader
        title='Anchor'
        refUrl='https://ant.design/components/anchor/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='anchor-a'>
          <AppComponentCard
            title='Basic'
            description='The simplest usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='anchor-b'>
          <AppComponentCard
            title='Static'
            description='Do not change state when page is scrolling.'
            component={Static}
            source={StaticSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Anchor;
