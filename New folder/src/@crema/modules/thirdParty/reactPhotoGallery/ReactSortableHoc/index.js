import React, {useEffect, useState} from 'react';
import Gallery from 'react-photo-gallery';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import Photo from './Photo';
import AppInfoView from '@crema/components/AppInfoView';
import {StyledReactGalleryPhoto} from '../index.styled';
import {arrayMoveImmutable} from 'array-move';
import {photos} from '@crema/mockapi/fakedb';

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({items}) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

const ReactSortableHoc = () => {
  const [items, setItems] = useState(photos);

  useEffect(() => {
    if (photos.length > 0) {
      setItems(photos);
    }
  }, [photos]);

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <StyledReactGalleryPhoto>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={'xy'} />
      <AppInfoView />
    </StyledReactGalleryPhoto>
  );
};
export default ReactSortableHoc;
