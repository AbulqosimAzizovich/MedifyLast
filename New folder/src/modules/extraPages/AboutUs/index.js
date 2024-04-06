import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import AppAnimate from '@crema/components/AppAnimate';

import {
  Clients,
  Introduction,
  OfficeCultureCard,
  Sections,
  Team,
} from '@crema/modules/extraPages/AboutUs';
import {aboutUsData} from '@crema/mockapi/fakedb/extraPages';
import {Col} from 'antd';
import {StyledTypographyWrapper} from './index.styled';

const AboutUs = () => {
  return (
    <StyledTypographyWrapper>
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <AppRowContainer>
          <Col xs={24} md={12} lg={18}>
            <Introduction introduction={aboutUsData.introduction} />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <OfficeCultureCard officeCulture={aboutUsData.officeCulture} />
          </Col>
          {aboutUsData.aboutUsSection.map((data, index) => (
            <Col xs={24} sm={12} lg={6} key={'section-' + index}>
              <Sections data={data} />
            </Col>
          ))}
          <Col xs={24}>
            <Team team={aboutUsData.team} />
          </Col>
          <Col xs={24}>
            <Clients client={aboutUsData.client} />
          </Col>
        </AppRowContainer>
      </AppAnimate>
    </StyledTypographyWrapper>
  );
};

export default AboutUs;
