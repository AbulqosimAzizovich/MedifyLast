import React from 'react';
import {PortfolioTabs} from '@crema/modules/extraPages/Portfolio';
import {portfolioData} from '@crema/mockapi/fakedb/extraPages';

const PortFolioPage = () => {
  return <PortfolioTabs portfolio={portfolioData.portfolio} />;
};

export default PortFolioPage;
