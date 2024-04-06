import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import MoreType from './MoreType';
import MoreTypeSource from '!!raw-loader!./MoreType';
import Closeable from './Closeable';
import CloseableSource from '!!raw-loader!./Closeable';
import Description from './Description';
import DescriptionSource from '!!raw-loader!./Description';
import Icon from './Icon';
import IconSource from '!!raw-loader!./Icon';
import SmoothlyUnmount from './SmoothlyUnmount';
import SmoothlyUnmountSource from '!!raw-loader!./SmoothlyUnmount';
import Banner from './Banner';
import BannerSource from '!!raw-loader!./Banner';

const Alert = () => {
  return (
    <>
      <AppComponentHeader
        title='Alert'
        refUrl='https://ant.design/components/alert/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='alert-a'>
          <AppComponentCard
            title='Basic'
            description='The simplest usage for short messages.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='alert-b'>
          <AppComponentCard
            title='Smoothly Unmount'
            description='Smoothly unmount Alert upon close.'
            component={SmoothlyUnmount}
            source={SmoothlyUnmountSource}
          />
        </Col>
        <Col xs={24} lg={12} key='alert-c'>
          <AppComponentCard
            title='More Type'
            description='There are 4 types of Alert: success, info, warning, error.'
            component={MoreType}
            source={MoreTypeSource}
          />
        </Col>
        <Col xs={24} lg={12} key='alert-d'>
          <AppComponentCard
            title='Banner'
            description='Display Alert as a banner at top of page.'
            component={Banner}
            source={BannerSource}
          />
        </Col>
        <Col xs={24} lg={12} key='alert-e'>
          <AppComponentCard
            title='Icon'
            description='A relevant icon will make information clearer and more friendly.'
            component={Icon}
            source={IconSource}
          />
        </Col>
        <Col xs={24} lg={12} key='alert-f'>
          <AppComponentCard
            title='Description'
            description='Additional description for alert message.'
            component={Description}
            source={DescriptionSource}
          />
        </Col>
        <Col xs={24} lg={12} key='alert-g'>
          <AppComponentCard
            title='Closeable'
            description='To show close button.'
            component={Closeable}
            source={CloseableSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Alert;
