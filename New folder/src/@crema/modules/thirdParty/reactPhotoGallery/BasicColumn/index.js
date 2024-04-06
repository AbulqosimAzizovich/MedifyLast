import React from 'react';
import Gallery from 'react-photo-gallery';
import AppInfoView from '@crema/components/AppInfoView';
import {StyledReactGalleryPhoto} from '../index.styled';
import {photos} from '@crema/mockapi/fakedb';

const BasicColumn = () => {
  return (
    <StyledReactGalleryPhoto>
      <Gallery photos={photos} /*direction="column"*/ columns={4} />
      <AppInfoView />
    </StyledReactGalleryPhoto>
  );
};
export default BasicColumn;
