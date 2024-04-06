import React from 'react';

import Simple from './Simple';
import SimpleSource from '!!raw-loader!./Simple';
import Horizontal from './Horizontal';
import HorizontalSource from '!!raw-loader!./Horizontal';
import MultipleDrop from './MultipleDrop';
import MultipleDropSource from '!!raw-loader!./MultipleDrop';
import WithHooks from './WithHooks';
import WithHooksSource from '!!raw-loader!./WithHooks';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import {Col, Row} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';

const ReactBeautifulDnd = () => {
  return (
    <>
      <AppComponentHeader
        title='React Beautiful Dnd'
        description='Beautiful and accessible drag and drop for lists with React'
        refUrl='https://react-beautiful-dnd.netlify.com/?path=/story/single-vertical-list--basic'
      />

      <Row gutter={{xs: 16, sm: 16, md: 32}}>
        <Col xs={24} xl={12} key='dnd-a'>
          <AppComponentCard
            title='Simple'
            component={Simple}
            source={SimpleSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dnd-b'>
          <AppComponentCard
            title='WithHooks'
            component={WithHooks}
            source={WithHooksSource}
          />
        </Col>
        <Col span={24} key='dnd-c'>
          <AppComponentCard
            title='MultipleDrop'
            component={MultipleDrop}
            source={MultipleDropSource}
          />
        </Col>
        <Col span={24} key='dnd-d'>
          <AppComponentCard
            title='Horizontal'
            component={Horizontal}
            source={HorizontalSource}
          />
        </Col>
      </Row>
    </>
  );
};

export default ReactBeautifulDnd;
