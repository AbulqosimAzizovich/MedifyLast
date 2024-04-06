import styled from 'styled-components';

export const StyledTimelineImage = styled.div`
  width: 100%;

  @media screen and (max-width: ${({theme}) => theme.breakpoints.sm}px) {
    padding-bottom: 16px;
  }

  & .rt-backing {
    border-radius: 0px;
    ${({theme}) => theme.cardRadius};
    background-color: ${({theme}) => theme.palette.background.paper};
    color: ${({theme}) => theme.palette.text.primary};
    padding: 20px;
    box-shadow: none;
  }

  & .rt-header-container {
    background-color: transparent;
  }

  & .rt-title {
    color: ${({theme}) => theme.palette.text.primary};
  }

  & .rt-title {
    font-size: ${({theme}) => theme.font.size.lg};
    font-weight: ${({theme}) => theme.font.weight.bold} !important;
  }

  & .rt-date {
    font-weight: ${({theme}) => theme.font.weight.regular} !important;
  }

  & .rt-text-container {
    font-family: ${({theme}) => theme.font.family};
    font-weight: ${({theme}) => theme.font.weight.regular};

    & p:last-child {
      margin-bottom: 0;
    }
  }

  & .rt-footer-container {
    border-top: 1px solid ${({theme}) => theme.palette.borderColor};
    margin-left: -20px;
    margin-right: -20px;
  }

  & .rt-label {
    background-color: ${({theme}) => theme.palette.secondary.main};
    width: 60px;
    height: 60px;
    font-size: 20px;
  }

  & .rt-btn {
    color: ${({theme}) => theme.palette.secondary.main};
    background-color: transparent;
    border: 0 none;
    font-weight: ${({theme}) => theme.font.weight.regular} !important;
    padding-bottom: 0;
    font-size: ${({theme}) => theme.font.size.base};
  }

  & .rt-event {
    width: 50%;
    padding-left: 45px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 45px;
      float: left;
      clear: left;
    }

    & .rt-svg-container .rt-arrow {
      color: ${({theme}) => theme.palette.background.paper};
      left: -39px;

      [dir='rtl'] & {
        left: auto;
        right: -39px;
        transform: rotate(0deg);
      }
    }

    & .rt-dot {
      background-color: ${({theme}) => theme.palette.background.paper};
      color: ${({theme}) => theme.palette.secondary.main};
      border: solid 2px ${({theme}) => theme.palette.secondary.main};
      left: -80px;
      width: 30px;
      height: 30px;
      border-radius: 0px;
      ${({theme}) => theme.sizes.borderRadius.circle};

      [dir='rtl'] & {
        left: auto;
        right: -80px;
      }
    }
  }

  & .rt-event:nth-of-type(2n) {
    padding-left: 0;
    padding-right: 45px;

    [dir='rtl'] & {
      padding-left: 45px;
      padding-right: 0;
    }

    & .rt-svg-container .rt-arrow {
      right: -39px;
      left: auto;

      [dir='rtl'] & {
        right: auto;
        left: -39px;
        transform: rotate(180deg);
      }
    }

    & .rt-dot {
      right: -80px;

      [dir='rtl'] & {
        right: auto;
        left: -80px;
      }
    }
  }

  .rt-timeline-container {
    padding: 1em;
    font-family: 'Be Vietnam', serif !important;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .rt-timeline {
    max-width: 1600px;
    width: 100%;
    padding: 0;
    list-style-type: none;
    position: relative;

    &:after {
      left: calc(50% - 0.5px);
      top: 1px;
      z-index: 1;
      width: 1px;
      height: 100%;
      content: '';
      position: absolute;
      background-color: #d5d6d8;

      [dir='rtl'] & {
        left: auto;
        right: calc(50% - 0.5px);
      }
    }
  }

  .rt-label-container {
    clear: both;
    margin: 1em auto 1em auto;
    display: flex;
    justify-content: center;

    &:first-of-type {
      margin-top: 0 !important;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .rt-label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 0px;
    ${({theme}) => theme.sizes.borderRadius.circle};
    font-size: 24px;
    font-weight: ${({theme}) => theme.font.weight.medium}!important;
    width: 3em;
    height: 3em;
    position: relative;
    z-index: 3;
  }

  .rt-clear {
    clear: both;
  }

  .rt-backing {
    padding: 20px;
  }

  .rt-event {
    position: relative;
    float: right;
    clear: right;
    width: 50%;
    margin-top: 2em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 65px;
    list-style-type: none;
    display: block;
    min-height: 700px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 65px;
    }
  }

  .rt-event .rt-dot {
    position: absolute;
    margin-top: 20px;
    left: -101px;
    right: auto;
    fill: currentcolor;
    font-size: ${({theme}) => theme.font.size.base};
    width: 30px;
    height: 30px;
    border-radius: 0px;
    z-index: 100;

    [dir='rtl'] & {
      left: auto;
      right: -101px;
    }
  }

  .rt-event .rt-svg-container {
    position: relative;
  }

  .rt-event .rt-svg-container svg {
    transform: scale(-1, 1);
  }

  .rt-event .rt-svg-container .rt-arrow {
    z-index: 100;
    position: absolute;
    margin-top: 20px;
    left: -42px;
    right: auto;
    fill: currentcolor;
    width: 23px;

    [dir='rtl'] & {
      left: auto;
      right: -42px;
    }
  }

  .rt-event:nth-of-type(2n) {
    float: left;
    clear: left;
    text-align: right;
    padding-left: 0;
    padding-right: 65px;

    [dir='rtl'] & {
      float: right;
      clear: right;
      text-align: left;
      padding-left: 65px;
      padding-right: 0;
    }
  }

  .rt-event:nth-of-type(2n) svg {
    transform: scale(1, 1);
  }

  .rt-event:nth-of-type(2n) .rt-arrow {
    left: auto;
    right: -42px;

    [dir='rtl'] & {
      left: -42px;
      right: auto;
    }
  }

  .rt-event:nth-of-type(2n) .rt-dot {
    left: auto;
    right: -101px;

    [dir='rtl'] & {
      left: -101px;
      right: auto;
    }
  }

  .rt-timeline li:nth-child(3) {
    margin-top: 400px;
  }

  .rt-title {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: var(--medium) !important;
  }

  .rt-date {
    margin: 0;
    color: #a8a8a8;
    font-weight: var(--medium) !important;
    font-size: ${({theme}) => theme.font.size.base};
  }

  .rt-header-container {
    margin-bottom: 30px;
  }

  .rt-image-container {
    margin-bottom: 15px;
  }

  .rt-image {
    vertical-align: top;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: auto;
    max-width: 100vw;
    max-height: 250px;
    object-fit: cover;
  }

  .rt-footer-container {
    margin: 15px -20px -20px;
    padding: 20px;
    text-align: center;
  }

  .rt-btn {
    text-align: center;
    font-size: ${({theme}) => theme.font.size.lg};
    font-weight: var(--medium) !important;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    text-transform: capitalize;
  }

  .rt-text-container {
    max-height: 200px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    content: '';
    position: relative;
    text-align: left;

    [dir='rtl'] & {
      text-align: right;
    }
  }

  @media all and (max-width: 1919px) {
    .rt-label {
      font-size: 20px;
    }

    .rt-event {
      padding-left: 45px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 45px;
      }
    }

    .rt-event:nth-of-type(2n) {
      padding-right: 45px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 45px;
      }
    }

    .rt-event .rt-dot {
      left: -81px;

      [dir='rtl'] & {
        left: auto;
        right: -81px;
      }
    }

    .rt-event:nth-of-type(2n) .rt-dot {
      right: -81px;

      [dir='rtl'] & {
        right: auto;
        left: -81px;
      }
    }

    .rt-header-container {
      margin-bottom: 20px;
    }

    .rt-title {
      font-size: ${({theme}) => theme.font.size.lg};
    }
  }

  @media all and (max-width: 767px) {
    .rt-timeline-container {
      padding: 0;
    }

    .timeline-image .rt-event {
      width: 100%;
      padding-left: 90px;
      min-height: 100px;
      margin-bottom: 30px;
      margin-top: 0;
      float: none;
      clear: none;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 90px;
        float: none;
        clear: none;
      }
    }

    .timeline-image .rt-event:nth-of-type(2n) {
      padding-right: 0;
      padding-left: 90px;
      text-align: left;
      float: none;
      clear: none;

      [dir='rtl'] & {
        padding-right: 90px;
        padding-left: 0;
        text-align: right;
      }
    }

    .rt-backing {
      padding: 20px;
    }

    .timeline-image .rt-event .rt-svg-container .rt-arrow {
      left: -43px;

      [dir='rtl'] & {
        left: auto;
        right: -43px;
      }
    }

    .timeline-image .rt-event:nth-of-type(2n) .rt-svg-container .rt-arrow {
      left: -43px;
      right: auto;
      transform: rotate(180deg);

      [dir='rtl'] & {
        left: auto;
        right: -43px;
        transform: rotate(0deg);
      }
    }

    .timeline-image .rt-event .rt-dot {
      left: -95px;

      [dir='rtl'] & {
        left: auto;
        right: -95px;
      }
    }

    .timeline-image .rt-event:nth-of-type(2n) .rt-dot {
      right: auto;
      left: -95px;

      [dir='rtl'] & {
        right: -95px;
        left: auto;
      }
    }

    .rt-label-container {
      justify-content: flex-start;
    }

    .rt-timeline:after {
      left: 30px;

      [dir='rtl'] & {
        left: auto;
        right: 30px;
      }
    }

    .rt-timeline li:nth-child(3) {
      margin-top: 0;
    }

    .rt-footer-container {
      margin: 15px -20px -20px;
      padding: 15px 20px;
    }

    .rt-label-container:last-of-type {
      margin-top: 0;
    }
  }

  @media all and (max-width: 499px) {
    .rt-timeline-container {
      padding: 12px;
      min-width: 300px;
      margin-left: -16px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: -16px;
      }
    }

    .timeline-image .rt-event:nth-of-type(2n),
    .timeline-image .rt-event {
      padding-left: 70px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 70px;
      }
    }

    .timeline-image .rt-event:nth-of-type(2n) .rt-dot,
    .timeline-image .rt-event .rt-dot {
      left: -80px;

      [dir='rtl'] & {
        left: auto;
        right: -80px;
      }
    }

    .rt-label {
      font-size: ${({theme}) => theme.font.size.lg};
    }

    .rt-timeline::after {
      left: 25px;

      [dir='rtl'] & {
        left: auto;
        right: 25px;
      }
    }

    .rt-event,
    .rt-event:nth-of-type(2n) {
      padding-left: 70px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 70px;
      }
    }

    .rt-event .rt-dot,
    .rt-event:nth-of-type(2n) .rt-dot {
      left: -80px;

      [dir='rtl'] & {
        left: auto;
        right: -80px;
      }
    }

    .rt-event .rt-svg-container .rt-arrow,
    .rt-event:nth-of-type(2n) .rt-arrow {
      left: -40px;

      [dir='rtl'] & {
        left: auto;
        right: -40px;
      }
    }

    .rt-title {
      font-size: 18px;
    }

    .rt-header-container {
      margin-bottom: 10px;
    }
  }
`;
