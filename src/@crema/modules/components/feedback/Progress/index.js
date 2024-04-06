import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import CircularBar from './CircularBar';
import CircularBarSource from '!!raw-loader!./CircularBar';
import MiniSizeBar from './MiniSizeBar';
import MiniSizeBarSource from '!!raw-loader!./MiniSizeBar';
import MiniSizeCircularBar from './MiniSizeCircularBar';
import MiniSizeCircularBarSource from '!!raw-loader!./MiniSizeCircularBar';
import DynamicCircularBar from './DynamicCircularBar';
import DynamicCircularBarSource from '!!raw-loader!./DynamicCircularBar';
import DynamicBar from './DynamicBar';
import DynamicBarSource from '!!raw-loader!./DynamicBar';
import CustomTextBar from './CustomTextBar';
import CustomTextBarSource from '!!raw-loader!./CustomTextBar';
import DashboardBar from './DashboardBar';
import DashboardBarSource from '!!raw-loader!./DashboardBar';
import SuccessSegment from './SuccessSegment';
import SuccessSegmentSource from '!!raw-loader!./SuccessSegment';
import ProgressBar from './ProgressBar';
import ProgressBarSource from '!!raw-loader!./ProgressBar';
import ProgressBarWithSuccess from './ProgressBarWithSuccess';
import ProgressBarWithSuccessSource from '!!raw-loader!./ProgressBarWithSuccess';
import SquareLineCaps from './SquareLineCaps';
import SquareLineCapsSource from '!!raw-loader!./SquareLineCaps';
import CustomLineGradient from './CustomLineGradient';
import CustomLineGradientSource from '!!raw-loader!./CustomLineGradient';
import ProgressBarWithSteps from './ProgressBarWithSteps';
import ProgressBarWithStepsSource from '!!raw-loader!./ProgressBarWithSteps';

class Progress extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Progress'
          refUrl='https://ant.design/components/progress/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='progress-a'>
            <AppComponentCard
              title='Basic'
              description='A standard basic bar.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-b'>
            <AppComponentCard
              title='Mini Size Bar'
              description='Appropriate for a narrow area.'
              component={MiniSizeBar}
              source={MiniSizeBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-c'>
            <AppComponentCard
              title='Success Segment'
              description=''
              component={SuccessSegment}
              source={SuccessSegmentSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-d'>
            <AppComponentCard
              title='Dynamic Bar'
              description='A dynamic progress bar is better.'
              component={DynamicBar}
              source={DynamicBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-e'>
            <AppComponentCard
              title='Circular Bar'
              description='A circular progress bar.'
              component={CircularBar}
              source={CircularBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-f'>
            <AppComponentCard
              title='MiniSize Circular Bar'
              description='A smaller circular progress bar.'
              component={MiniSizeCircularBar}
              source={MiniSizeCircularBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-g'>
            <AppComponentCard
              title='Dynamic Circular Bar'
              description='A dynamic progress bar is better.'
              component={DynamicCircularBar}
              source={DynamicCircularBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-h'>
            <AppComponentCard
              title='Custom Text Bar'
              description='You can set a custom text by setting the format prop.'
              component={CustomTextBar}
              source={CustomTextBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-i'>
            <AppComponentCard
              title='Dashboard Bar'
              description='By setting type=dashboard, you can get a dashboard style of progress easily.'
              component={DashboardBar}
              source={DashboardBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-j'>
            <AppComponentCard
              title='Progress Bar'
              description='A standard progress bar.'
              component={ProgressBar}
              source={ProgressBarSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-k'>
            <AppComponentCard
              title='Progress Bar With Success'
              description='A standard progress bar. Doesnt support trail color when type="circle|dashboard".'
              component={ProgressBarWithSuccess}
              source={ProgressBarWithSuccessSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-l'>
            <AppComponentCard
              title='Square Line Caps'
              description='By setting strokeLinecap="square", you can change the linecaps from round to square.'
              component={SquareLineCaps}
              source={SquareLineCapsSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-m'>
            <AppComponentCard
              title='Custom Line Gradient'
              description='A package of linear-gradient. It is recommended to only pass two colors.'
              component={CustomLineGradient}
              source={CustomLineGradientSource}
            />
          </Col>
          <Col xs={24} lg={12} key='progress-n'>
            <AppComponentCard
              title='Progress Bar With Steps'
              description='A progress bar with steps.'
              component={ProgressBarWithSteps}
              source={ProgressBarWithStepsSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Progress;
