import React, {useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import SelectedImage from './SelectedImage';
import AppInfoView from '@crema/components/AppInfoView';
import {StyledReactGalleryPhoto} from '../index.styled';
import {photos} from '@crema/mockapi/fakedb';

const CustomImage = () => {
  const imageRenderer = useCallback(
    ({index, left, top, key, photo}) => (
      <SelectedImage
        key={key}
        margin={'2px'}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [],
  );

  return (
    <StyledReactGalleryPhoto>
      <Gallery photos={photos} renderImage={imageRenderer} />
      <AppInfoView />
    </StyledReactGalleryPhoto>
  );
};
export default CustomImage;
