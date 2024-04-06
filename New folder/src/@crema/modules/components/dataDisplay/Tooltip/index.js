import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import Placement from './Placement';
import PlacementSource from '!!raw-loader!./Placement';
import ArrowPoint from './ArrowPoint';
import ArrowPointSource from '!!raw-loader!./ArrowPoint';
import ColorfulTooltip from './ColorfulTooltip';
import ColorfulTooltipSource from '!!raw-loader!./ColorfulTooltip';

const Tooltip = () => {
  return (
    <>
      <AppComponentHeader
        title='Tooltip'
        refUrl='https://ant.design/components/tooltip/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='tooltip-a'>
          <AppComponentCard
            title='Basic'
            description='The simplest usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tooltip-b'>
          <AppComponentCard
            title='ArrowPoint'
            description='By specifying arrowPointAtCenter prop, the arrow will point to the center of the target element.'
            component={ArrowPoint}
            source={ArrowPointSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tooltip-c'>
          <AppComponentCard
            title='Placement'
            description='There are 12 placement options available.'
            component={Placement}
            source={PlacementSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tooltip-d'>
          <AppComponentCard
            title='ColorfulTooltip'
            description='We preset a series of colorful Tooltip styles for use in different situations.'
            component={ColorfulTooltip}
            source={ColorfulTooltipSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tooltip;
