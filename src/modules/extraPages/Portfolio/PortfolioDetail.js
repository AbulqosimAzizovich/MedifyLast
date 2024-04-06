import React from 'react';
import {portfolioData} from '@crema/mockapi/fakedb/extraPages';
import {PortfolioDetail} from '@crema/modules/extraPages/Portfolio';

const PortFolioPage = () => {
  return <PortfolioDetail portfolioData={portfolioData} />;
};

export default PortFolioPage;
