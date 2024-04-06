import React from 'react';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import FirebaseAuthProvider from '@crema/services/auth/firebase/FirebaseAuthProvider';
import PropTypes from 'prop-types';

const AppAuthProvider = ({children}) => {
  const {fetchStart, fetchSuccess, fetchError, showMessage} =
    useInfoViewActionsContext();

  return (
    <FirebaseAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
      showMessage={showMessage}
    >
      {children}
    </FirebaseAuthProvider>
  );
};

AppAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppAuthProvider;
