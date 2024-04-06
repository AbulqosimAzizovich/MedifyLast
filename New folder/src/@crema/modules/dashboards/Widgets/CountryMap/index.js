import React from 'react';
import MapChart from './MapChart';
import {useIntl} from 'react-intl';
import {StyledWidCountryCard, StyledWidCountryMapChart} from './index.styled';

const CountryMap = () => {
  const {messages} = useIntl();
  return (
    <StyledWidCountryCard
      heightFull
      title={messages['dashboard.usa']}
      extra={<a href='#/'>{messages['common.next']}</a>}
    >
      <StyledWidCountryMapChart>
        <MapChart />
      </StyledWidCountryMapChart>
    </StyledWidCountryCard>
  );
};

export default CountryMap;
