import AppScrollbar from '../../AppScrollbar';
import {Alert, Drawer, Input, Layout} from 'antd';
import styled from 'styled-components';
import AppHorizontalNav from '../components/AppHorizontalNav';
import MainSidebar from '../components/MainSidebar';

const {Header} = Layout;
const {Search} = Input;

export const StyledAppHeaderHor = styled(Header)`
  color: ${({theme}) => theme.palette.text.primary} !important;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  width: 100% !important;
  height: auto !important;
  line-height: 1 !important;
  padding: 0;
  padding-inline: 0 !important;
  background-color: ${({theme}) => theme.palette.background.paper} !important;

  & .trigger {
    font-size: 24px;
    margin-right: 20px;
    padding: 5.5px;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      display: none;
    }

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }
`;

export const StyledHeaderHorMain = styled.div`
  position: relative;
  background-color: ${({theme}) => theme.palette.background.paper};
  border-bottom: 1px solid ${({theme}) => theme.palette.borderColor};
  min-height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    min-height: 71px;
  }

  & .cr-user-info {
    padding: 8px;
    background-color: transparent;
    min-height: auto;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
      padding-left: 12px;
      padding-right: 12px;
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }
  }

  & .cr-user-info-content {
    display: none;
    padding-right: 0;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      display: flex;
      flex-direction: column;
    }
  }

  & .cr-user-name {
    font-size: 15px;
    color: ${({theme}) => theme.palette.text.primary};
    line-height: 1.5;
  }

  & .cr-user-designation {
    margin-top: 2px;
    font-size: 13px;
  }

  & .cr-user-arrow {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xl}px) {
    max-width: 1140px;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    max-width: 1440px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1720px;
  }
`;

export const StyledHeaderHorMainFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeaderSearchHor = styled(Search)`
  position: relative;
  max-width: 140px;
  min-height: 36px;
  margin-left: auto;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-left: 10px;
    margin-right: auto;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
    margin-right: 20px;
    max-width: 165px;

    [dir='rtl'] & {
      margin-right: auto;
      margin-left: 20px;
    }
  }

  & .ant-input-wrapper {
    top: 50%;
    right: 0;
    z-index: 1;
    position: absolute;
    transform: translateY(-50%);

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
    transition: all 0.2s ease;
    width: 104px;

    &:focus {
      width: 135px;
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
      width: 129px;

      &:focus {
        width: 165px;
      }
    }
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }

  &.ant-input-search-rtl
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-radius: 0px;
    ${({theme}) => theme.sizes.borderRadius.base} 0 0
      ${({theme}) => theme.sizes.borderRadius.base};
  }
`;

export const StyledAppHeaderHorDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledHeaderHorMobile = styled.div`
  display: block;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
    display: none;
  }

  & .ant-dropdown-link {
    font-size: 24px;
    color: ${({theme}) => theme.palette.text.primary};

    & svg {
      display: block;
    }
  }
`;

export const StyledHeaderNavHor = styled.div`
  display: none;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({theme}) => theme.palette.borderColor};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    display: block;
  }
`;

export const StyledAppHorizontalNav = styled(AppHorizontalNav)`
  background-color: inherit;
  color: inherit;
  border-bottom: 0 none;

  &.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  &.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    padding: 0 10px;
    border-radius: 0px;
    ${({theme}) => theme.sizes.borderRadius.base};
  }

  & .ant-menu-submenu .ant-menu-submenu-title {
    padding: 12px 10px;
  }

  &.ant-menu-horizontal > .ant-menu-item::after,
  &.ant-menu-horizontal > .ant-menu-submenu::after {
    display: none;
  }

  &.ant-menu-horizontal:not(.ant-menu-dark) {
    & > .ant-menu-item:hover,
    & > .ant-menu-submenu:hover,
    & > .ant-menu-item-active,
    & > .ant-menu-submenu-active,
    & > .ant-menu-item-open,
    & > .ant-menu-submenu-open,
    & > .ant-menu-item-selected,
    & > .ant-menu-submenu-selected {
      color: inherit;
      border-bottom: 0 none;
    }
  }

  & .ant-menu-submenu-title {
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  &.ant-menu-horizontal > .ant-menu-item,
  &.ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: 0 none;
  }
`;

export const StyledAppHorDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 17.5rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }
`;

export const StyledAppSidebarHorScrollbar = styled(AppScrollbar)`
  height: calc(100vh - 56px) !important;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    height: calc(100vh - 71px) !important;
  }
`;

export const StyledHorMainSidebar = styled(MainSidebar)`
  &.ant-layout-sider {
    flex: 0 0 auto !important;
    max-width: none !important;
    min-width: 0 !important;
    width: 17.5rem !important;
    transition: all 0.1s linear;
    background-color: ${({theme}) => theme.sidebar.light.sidebarBgColor};
    color: ${({theme}) => theme.palette.text.primary};
    position: fixed;
    left: 0;
    top: 0;

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      width: 17.5rem !important;
    }
  }

  & .ant-layout-sider-trigger {
    display: none;
  }

  &.ant-layout-sider-has-trigger {
    padding-bottom: 0;
  }

  // Sidebar Collapsed
  &.ant-layout-sider-collapsed {
    width: 0 !important;
    transition: all 200ms linear;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
      width: 4rem !important;
    }

    & + .app-layout-main {
      width: 100% !important;
      transition: all 200ms linear;

      @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
        width: calc(100% - 4rem) !important;
      }
    }

    & .cr-user-info {
      padding-left: 12px;
      padding-right: 12px;
    }

    & .cr-user-info-content {
      opacity: 0;
      visibility: hidden;
      width: 0;
      padding-left: 0;
      padding-right: 0;
    }

    & .ant-menu-item-group-title {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
      padding: 0;
    }
  }

  &.hor-sidebar-img-background {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
      z-index: 1;
      opacity: 0.5;
    }

    & > div {
      position: relative;
      z-index: 3;
    }

    & .ant-menu.ant-menu-dark,
    .ant-menu-dark .ant-menu-sub,
    .ant-menu.ant-menu-dark .ant-menu-sub {
      background-color: transparent;
      color: inherit;
    }

    & .app-main-sidebar-menu.ant-menu-dark .ant-menu-item-group-title,
    & .app-main-sidebar-menu .ant-menu-item a {
      color: inherit;
    }
  }
`;

export const StyledAppLayoutHorMain = styled(Layout)`
  width: 100% !important;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({theme}) => theme.palette.background.default} !important;

  & .ant-layout-content {
    // background-color: transparent;
    bacground: rgba(255, 255, 255, 0.5);
  }

  & .main-content-view {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const StyledAppLayoutHor = styled(Layout)`
  min-height: 100vh;
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column !important;

  & .customizer-option {
    position: fixed;
    top: 205px;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}) {
      top: 225px;
    }
  }

  &.appMainFixedFooter {
    padding-bottom: 46px;

    & .app-main-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9;
      width: 100%;
    }
  }
`;

export const StyledHeaderAlert = styled(Alert)`
  text-align: center;
  border: 0 none;
  border-radius: 0px;
  border-bottom: 1px solid ${({theme}) => theme.palette.borderColor};
  padding: 10.6px 20px;
  background-color: ${({theme}) => theme.palette.background.default};
  color: ${({theme}) => theme.palette.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  & .ant-alert-content {
    flex: inherit;
  }

  & .ant-alert-close-icon {
    [dir='rtl'] & {
      margin-right: 8px;
      margin-left: 8px;
    }
  }
`;
