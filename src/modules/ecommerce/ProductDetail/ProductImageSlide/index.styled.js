import styled from 'styled-components';

export const StyledProductImageSlide = styled.div`
  position: relative;
`;

export const StyledProductImageSlideRoot = styled.div`
  position: relative;
  display: flex;

  & .BrainhubCarousel__container {
    margin-left: 10px;
    border-radius: 0px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 10px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.sm}px) {
      margin-bottom: 20px;
    }

    & .BrainhubCarousel {
      height: 100%;
    }
  }

  & .BrainhubCarousel__dots {
    flex-direction: column;

    @media screen and (max-width: ${({theme}) => theme.breakpoints.sm}px) {
      display: none;
    }

    & .BrainhubCarousel__thumbnail {
      opacity: 1;
      background-color: transparent;
      border-radius: 0px;
      margin-bottom: 10px;
      border: 1px solid ${({theme}) => theme.palette.borderColor};

      &.BrainhubCarousel__thumbnail--selected {
        border: solid 2px ${({theme}) => theme.palette.gray[600]};
      }
    }

    & img {
      height: 80px;
    }
  }
`;

export const StyledProductFav = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 20px;
  cursor: pointer;

  [dir='rtl'] & {
    right: auto;
    left: 10px;
  }
`;

export const StyledProductImageSlideAction = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    padding-left: 20px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 20px;
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    padding-left: 60px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 60px;
    }
  }
`;
