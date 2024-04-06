import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';

import {
  PackageFour,
  PackageOne,
  PackageThree,
  PackageTwo,
} from '@crema/modules/extraPages/Pricing';
import {pricingData} from '@crema/mockapi/fakedb/extraPages';
import {Col} from 'antd';

const Pricing = () => {
  return (
    <AppRowContainer>
      <Col xs={24}>
        <PackageOne pricing={pricingData.pricingOne} />
      </Col>
      <Col xs={24}>
        <PackageTwo pricing={pricingData.pricingTwo} />
      </Col>
      <Col xs={24}>
        <PackageThree pricing={pricingData.pricingFour} />
      </Col>
      <Col xs={24}>
        <PackageFour pricing={pricingData.pricingFour} />
      </Col>
    </AppRowContainer>
  );
};

export default Pricing;
