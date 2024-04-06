import React from 'react';
import PropTypes from 'prop-types';
import {useSidebarContext} from '@crema/context/AppContextProvider/SidebarContextProvider';
import {StyledAppLogo} from './index.styled';

const AppLogo = ({hasSidebarColor}) => {
  const {sidebarColorSet} = useSidebarContext();
  return (
    <StyledAppLogo>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <h1 style={{color: '#2997ff'}}>
          Medify Workspace Akfa Medline Chilonzor
        </h1>
      ) : (
        <h1 style={{color: '#2997ff'}}>
          Medify Workspace Akfa Medline Chilonzor
        </h1>
      )}
    </StyledAppLogo>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
