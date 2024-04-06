import React from 'react';

const AppInfoViewContext = React.lazy(() => import('./ContextView'));
const AppInfoViewRedux = React.lazy(() => import('./ReduxView'));

const AppInfoView = () => {
  if (process.env.REACT_APP_STATE_TYPE === 'context') {
    return <AppInfoViewContext />;
  }
  return <AppInfoViewRedux />;
};

export default AppInfoView;
