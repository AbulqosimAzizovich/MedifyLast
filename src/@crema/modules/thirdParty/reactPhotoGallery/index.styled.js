import styled from 'styled-components';

export const StyledReactGalleryPhoto = styled.div`
  position: relative;

  & img {
    border-radius: 0px;
    ${({theme}) => theme.cardRadius};
    object-fit: cover;
    max-height: 260px;
  }
`;
