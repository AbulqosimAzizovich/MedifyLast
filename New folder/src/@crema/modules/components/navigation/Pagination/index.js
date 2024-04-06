import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import Changer from './Changer';
import ChangerSource from '!!raw-loader!./Changer';
import More from './More';
import MoreSource from '!!raw-loader!./More';
import MiniSize from './MiniSize';
import MiniSizeSource from '!!raw-loader!./MiniSize';
import SimpleMode from './SimpleMode';
import SimpleModeSource from '!!raw-loader!./SimpleMode';
import Controlled from './Controlled';
import ControlledSource from '!!raw-loader!./Controlled';
import TotalNumber from './TotalNumber';
import TotalNumberSource from '!!raw-loader!./TotalNumber';
import PrevAndNext from './PrevAndNext';
import PrevAndNextSource from '!!raw-loader!./PrevAndNext';
import Jumper from './Jumper';
import JumperSource from '!!raw-loader!./Jumper';
import ShowAll from './ShowAll';
import ShowAllSource from '!!raw-loader!./ShowAll';

class Pagination extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Pagination'
          refUrl='https://ant.design/components/pagination/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='pagination-a'>
            <AppComponentCard
              title='Basic'
              description='The simplest usage.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-b'>
            <AppComponentCard
              title='More'
              description='More Pages.'
              component={More}
              source={MoreSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-c'>
            <AppComponentCard
              title='Changer'
              description='Change pageSize.'
              component={Changer}
              source={ChangerSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-d'>
            <AppComponentCard
              title='Jumper'
              description='Jump to a page directly.'
              component={Jumper}
              source={JumperSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-e'>
            <AppComponentCard
              title='Mini Size'
              description='Mini size pagination.'
              component={MiniSize}
              source={MiniSizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-f'>
            <AppComponentCard
              title='TotalNumber'
              description='You can show the total number of data by setting showTotal.'
              component={TotalNumber}
              source={TotalNumberSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-g'>
            <AppComponentCard
              title='Simple Mode'
              description='Simple mode'
              component={SimpleMode}
              source={SimpleModeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-h'>
            <AppComponentCard
              title='Controlled'
              description='Controlled page number.'
              component={Controlled}
              source={ControlledSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-i'>
            <AppComponentCard
              title='PrevAndNext'
              description='Use text link for prev and next button.'
              component={PrevAndNext}
              source={PrevAndNextSource}
            />
          </Col>
          <Col xs={24} lg={12} key='pagination-j'>
            <AppComponentCard
              title='ShowAll'
              description='Show all configured prop.'
              component={ShowAll}
              source={ShowAllSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Pagination;
