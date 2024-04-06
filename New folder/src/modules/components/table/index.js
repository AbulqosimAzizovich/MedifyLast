import React from 'react';

const Basic = React.lazy(() => import('./Basic'));
const Data = React.lazy(() => import('./Data'));

export const tableComponentConfigs = [
  {
    path: '/components/table/basic-table',
    element: <Basic />,
  },
  {
    path: '/components/table/data',
    element: <Data />,
  },
];
