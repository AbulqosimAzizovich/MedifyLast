import React from 'react';
import {Col} from 'antd';

import SimpleList from './SimpleList';
import SimpleListSource from '!!raw-loader!./SimpleList';
import BasicList from './BasicList';
import BasicListSource from '!!raw-loader!./BasicList';
import Vertical from './Vertical';
import VerticalSource from '!!raw-loader!./Vertical';
import Grid from './Grid';
import GridSource from '!!raw-loader!./Grid';
import ResponsiveGridList from './ResponsiveGridList';
import ResponsiveGridListSource from '!!raw-loader!./ResponsiveGridList';
import ScrollingLoaded from './ScrollingLoaded';
import ScrollingLoadedSource from '!!raw-loader!./ScrollingLoaded';

import AppRowContainer from '@crema/components/AppRowContainer';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';

const Lists = () => {
  return (
    <>
      <AppComponentHeader
        title='List'
        refUrl='https://ant.design/components/list/'
      />
      <AppRowContainer>
        <Col span={24} key='list-a'>
          <AppComponentCard
            title='Simple List'
            description='Ant Design supports a default list size as well as a large and small size.'
            component={SimpleList}
            source={SimpleListSource}
          />
        </Col>
        <Col span={24} key='list-b'>
          <AppComponentCard
            title='Basic List'
            description='Basic list.'
            component={BasicList}
            source={BasicListSource}
          />
        </Col>
        <Col span={24} key='list-c'>
          <AppComponentCard
            title='Vertical'
            description='Set the itemLayout property to vertical to create a vertical list.'
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col span={24} key='list-e'>
          <AppComponentCard
            title='Grid'
            description='Create a grid layout by setting the grid property of List.'
            component={Grid}
            source={GridSource}
          />
        </Col>
        <Col span={24} key='list-f'>
          <AppComponentCard
            title='Responsive Grid List'
            description='Responsive grid list. The size property the is as same as Layout Grid.'
            component={ResponsiveGridList}
            source={ResponsiveGridListSource}
          />
        </Col>
        <Col span={24} key='list-g'>
          <AppComponentCard
            title='Scrolling Loaded'
            description='The example of infinite load with react-infinite-scroll-component.'
            component={ScrollingLoaded}
            source={ScrollingLoadedSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Lists;
