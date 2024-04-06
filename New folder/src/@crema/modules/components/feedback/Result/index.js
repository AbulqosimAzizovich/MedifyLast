import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';
import Success from './Success';
import SuccessSource from '!!raw-loader!./Success';
import Info from './Info';
import InfoSource from '!!raw-loader!./Info';
import Warning from './Warning';
import WarningSource from '!!raw-loader!./Warning';
import Error403 from './Error403';
import Error403Source from '!!raw-loader!./Error403';
import Error404 from './Error404';
import Error404Source from '!!raw-loader!./Error404';
import Error500 from './Error500';
import Error500Source from '!!raw-loader!./Error500';
import ErrorIcon from './ErrorIcon';
import ErrorIconSource from '!!raw-loader!./ErrorIcon';
import CustomIcon from './CustomIcon';
import CustomIconSource from '!!raw-loader!./CustomIcon';

class Result extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Result'
          refUrl='https://ant.design/components/result/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='result-a'>
            <AppComponentCard
              title='Success'
              description='Show successful results.'
              component={Success}
              source={SuccessSource}
            />
          </Col>
          <Col xs={24} lg={12} key='result-b'>
            <AppComponentCard
              title='Info'
              description='Show processing results.'
              component={Info}
              source={InfoSource}
            />
          </Col>
          <Col xs={24} lg={12} key='result-c'>
            <AppComponentCard
              title='Warning'
              description='The result of the warning.'
              component={Warning}
              source={WarningSource}
            />
          </Col>
          <Col xs={24} lg={12} key='result-d'>
            <AppComponentCard
              title='Custom Icon'
              description='Custom icon.'
              component={CustomIcon}
              source={CustomIconSource}
            />
          </Col>
          <Col xs={24} lg={12} key='result-e'>
            <AppComponentCard
              title='Error 403'
              description='you are not authorized to access this page.'
              component={Error403}
              source={Error403Source}
            />
          </Col>
          <Col xs={24} lg={12} key='result-f'>
            <AppComponentCard
              title='Error 404'
              description='The page you visited does not exist.'
              component={Error404}
              source={Error404Source}
            />
          </Col>
          <Col xs={24} lg={12} key='result-g'>
            <AppComponentCard
              title='Error 500'
              description='Something went wrong on server.'
              component={Error500}
              source={Error500Source}
            />
          </Col>
          <Col xs={24} lg={12} key='result-h'>
            <AppComponentCard
              title='Error Icon'
              description='Complex error feedback.'
              component={ErrorIcon}
              source={ErrorIconSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Result;
