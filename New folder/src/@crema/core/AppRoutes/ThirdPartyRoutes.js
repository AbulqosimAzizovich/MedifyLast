import React from 'react';
import {rechartsConfigs} from './RechartRoutes';
import ColorPicker from '../../modules/thirdParty/reactColor';
import GoogleMap from '../../modules/thirdParty/googleMap';
import ReactNotificationEx from '../../modules/thirdParty/reactNotification';
import ReactDropzone from '../../modules/thirdParty/reactDropzone';
import ReactPlayer from '../../modules/thirdParty/reactPlayer';
import Calendar from '../../modules/thirdParty/calendar';
import ReactSlick from '../../modules/thirdParty/reactSlick';
import Timeline from '../../modules/thirdParty/timeLine';
import Timeline1 from '../../modules/thirdParty/timeLine/About';
import Timeline2 from '../../modules/thirdParty/timeLine/Shared';
import FroalaEditor from '../../modules/thirdParty/froalaEditor';
import FileStack from '../../modules/thirdParty/filestack';
import FusionCharts from '../../modules/thirdParty/fusionCharts';
import ReactPhotoGallery from '../../modules/thirdParty/reactPhotoGallery';
import ReactBeautifulDnd from '../../modules/thirdParty/reactBeautifulDnd';

export const thirdPartyConfigs = [
  ...rechartsConfigs,
  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party/google-map',
    element: <GoogleMap />,
  },
  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party/google-map',
    element: <GoogleMap />,
  },
  {
    path: '/third-party/react-notification',
    element: <ReactNotificationEx />,
  },
  {
    path: '/third-party/react-gallery',
    element: <ReactPhotoGallery />,
  },
  {
    path: '/third-party/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party/react-dnd',
    element: <ReactBeautifulDnd />,
  },
  {
    path: '/third-party/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party/slider',
    element: <ReactSlick />,
  },
  {
    path: '/third-party/froala-editor',
    element: <FroalaEditor />,
  },
  {
    path: '/third-party/filestack',
    element: <FileStack />,
  },
  {
    path: '/third-party/fusion-charts',
    element: <FusionCharts />,
  },
  {
    path: '/third-party/time-line',
    element: <Timeline />,
  },
  {
    path: '/third-party/time-line/1',
    element: <Timeline1 />,
  },
  {
    path: '/third-party/time-line/2',
    element: <Timeline2 />,
  },
];
