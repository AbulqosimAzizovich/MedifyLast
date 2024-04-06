import styled from 'styled-components';

export const StyledMenuColorCell = styled.div`
  border-radius: 0px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;
export const StyledMenuColorCellHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;
export const StyledMenuColorCellHeaderAvatar = styled.div`
  min-width: 30px;
  width: 30px;
  height: 30px;
  border-radius: 0px;
  ${({theme}) => theme.sizes.borderRadius.circle};
`;
export const StyledMenuColorCellHeaderContent = styled.div`
  width: 100%;
  padding-left: 16px;
`;

export const StyledMenuColorCellHeaderContentLine = styled.div`
  width: 50px;
  height: 4px;

  & + & {
    margin-top: 8px;
  }
`;

export const StyledMenuColorCellContent = styled.div`
  max-width: 200px;
  position: relative;
`;
export const StyledMenuColorCellItem = styled.div`
  width: 100%;
  min-height: 40px;
  padding: 10px 18px;
  white-space: nowrap;
  font-size: ${({theme}) => theme.font.size.sm};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    font-size: ${({theme}) => theme.font.size.base};
  }
`;

export const StyledMenuColorCellItemSelected = styled(StyledMenuColorCellItem)`
  padding: 10px;
  border-radius: 0px;
  width: calc(100% - 16px);
  position: relative;
  transition: all 0.4s ease;
  margin-left: 8px;
  margin-right: 8px;
  font-size: ${({theme}) => theme.font.size.sm};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xxl}px) {
    font-size: ${({theme}) => theme.font.size.base};
  }

  &.rounded-menu {
    margin-left: 0;
    margin-right: 8px;
    width: calc(100% - 8px);
    padding-left: 18px;
    padding-right: 10px;
    border-radius: 0px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
      padding-left: 10px;
      padding-right: 18px;
      border-radius: 0px;
    }
  }

  &.standard-menu {
    margin-left: 8px;
    margin-right: 8px;
    width: calc(100% - 16px);
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0px;
  }
  &.default-menu {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    padding-left: 18px;
    padding-right: 10px;
    border-radius: 0px;

    [dir='rtl'] & {
      padding-left: 10px;
      padding-right: 18px;
    }
  }

  &.rounded-menu-reverse {
    margin-left: 8px;
    margin-right: 0;
    width: calc(100% - 8px);
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0px;

    [dir='rtl'] & {
      margin-right: 8px;
      margin-left: 0;
      border-radius: 0px;
    }
  }

  &.curved-menu {
    width: calc(100% - 8px);
    margin-right: 0;
    margin-left: 8px;
    border-radius: 0px;
    position: relative;
    overflow: inherit;

    [dir='rtl'] & {
      margin-right: 8px;
      margin-left: 0;
      border-radius: 0px;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      right: 0;
      z-index: 0;
      height: 30px;
      width: 30px;
      background-color: transparent;
      border-radius: 0px;
      opacity: 0;
      display: block;
      border-right: 0 none;
    }

    &:before {
      top: -30px;
      box-shadow: 20px 20px 0 10px transparent;
    }

    &:after {
      bottom: -30px;
      box-shadow: 20px -20px 0 10px transparent;
      top: auto;
    }

    &.menu-color-cell-menu-item-selected {
      &:before {
        box-shadow: 20px 20px 0 10px
          ${({theme}) => theme.sidebar.light.sidebarMenuSelectedBgColor};
        opacity: 1;
      }

      &:after {
        box-shadow: 20px -20px 0 10px ${({theme}) =>
          theme.sidebar.light.sidebarMenuSelectedBgColor};
        opacity: 1;
      }
    }
  }

  &.active:after {
    display: none;
  }
`;
