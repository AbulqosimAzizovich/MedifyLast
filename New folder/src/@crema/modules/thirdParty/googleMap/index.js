import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppComponentCard from '@crema/components/AppComponentCard';
import SimpleMap from './Simple';
import SimpleMapSource from '!raw-loader!././Simple';
import MapDirections from './Directions';
import MapDirectionsSource from '!raw-loader!././Directions';
import DrawingView from './DrawingView';
import DrawingViewSource from '!raw-loader!././DrawingView';
import MapKmLayer from './KmLayer';
import KmLayerSource from '!raw-loader!././KmLayer';
import MapClustering from './MapClustering';
import MapClusteringSource from '!raw-loader!././MapClustering';
import PopUpInfo from './PopUpInfo';
import PopUpInfoSource from '!raw-loader!././PopUpInfo';
import StreetViewMap from './StreetView';
import StreetViewMapSource from '!raw-loader!././StreetView';
import TrafficLayer from './TrafficLayer';
import TrafficLayerSource from '!raw-loader!././TrafficLayer';
import Styled from './Styled';
import StyledSource from '!raw-loader!././Styled';
import AppRowContainer from '@crema/components/AppRowContainer';
import {Col} from 'antd';

const GoogleMap = () => {
  return (
    <>
      <AppComponentHeader
        title='Google Map'
        description='A wrapper around google.maps.Map'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map/'
      />

      <AppRowContainer>
        <Col xs={24}>
          <AppComponentCard
            title='Simple Map'
            component={SimpleMap}
            source={SimpleMapSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Marker Clusterer Map'
            component={MapClustering}
            source={MapClusteringSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='StreetView Map'
            component={StreetViewMap}
            source={StreetViewMapSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Traffic Map'
            component={TrafficLayer}
            source={TrafficLayerSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Styled Map'
            component={Styled}
            source={StyledSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Directions Map'
            component={MapDirections}
            source={MapDirectionsSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Drawing View Map'
            component={DrawingView}
            source={DrawingViewSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='KmlLayer Map'
            component={MapKmLayer}
            source={KmLayerSource}
          />
        </Col>
        <Col xs={24}>
          <AppComponentCard
            title='Google Map InfoWindow'
            component={PopUpInfo}
            source={PopUpInfoSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default GoogleMap;
