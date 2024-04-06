import React from 'react';
import {Col} from 'antd';

import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowSimpleContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';
import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import EventPropagation from './EventPropagation';
import EventPropagationSource from '!!raw-loader!./EventPropagation';
import StylingDropzone from './StylingDropzone';
import StylingDropzoneSource from '!!raw-loader!./StylingDropzone';
import SpecificFileTypes from './SpecificFileTypes';
import SpecificFileTypesSource from '!!raw-loader!./SpecificFileTypes';
import DialogProgrammatically from './DialogProgrammatically';
import DialogProgrammaticallySource from '!!raw-loader!./DialogProgrammatically';
import Previews from './Previews';
import PreviewsSource from '!!raw-loader!./Previews';
import ClassComponents from './ClassComponents';
import ClassComponentsSource from '!!raw-loader!./ClassComponents';

const ReactDropzone = () => {
  return (
    <>
      <AppComponentHeader
        title='React Dropzone'
        description='Simple React hook to create a HTML5-compliant dragndrop zone for files.'
        refUrl='https://react-dropzone.netlify.com/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12} key='dropzone-a'>
          <AppComponentCard
            title='Basic'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dropzone-b'>
          <AppComponentCard
            title='Event Propagation'
            component={EventPropagation}
            source={EventPropagationSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dropzone-c'>
          <AppComponentCard
            title='Specific`File Types'
            component={SpecificFileTypes}
            source={SpecificFileTypesSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dropzone-d'>
          <AppComponentCard
            title='Dialog Programmatically'
            component={DialogProgrammatically}
            source={DialogProgrammaticallySource}
          />
        </Col>
        <Col xs={24} xl={12} key='dropzone-e'>
          <AppComponentCard
            title='Styling Dropzone'
            component={StylingDropzone}
            source={StylingDropzoneSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dropzone-f'>
          <AppComponentCard
            title='Previews'
            component={Previews}
            source={PreviewsSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dropzone-g'>
          <AppComponentCard
            title='Class Components'
            component={ClassComponents}
            source={ClassComponentsSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactDropzone;
