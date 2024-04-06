import React from 'react';
import {Col} from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import AppAnimate from '@crema/components/AppAnimate';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import {
  AgeOfAudience,
  Browser,
  BudgetStatistic,
  MarketingCampaign,
  NewCustomers,
  PopularProducts,
  RecentOrders,
  ReportCard,
  Revenue,
  RevenueGraph,
  SalesReport,
  StateCard,
  TopInquiries,
  WeeklyBestSellers,
} from '@crema/modules/dashboards/ECommerce';
import AppLoader from '@crema/components/AppLoader';

const ECommerce = () => {
  const [{apiData: ecommerceData, loading}] = useGetDataApi(
    '/dashboard/ecommerce',
  );

  return loading ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppRowContainer>
        {ecommerceData.stateData.map((state) => (
          <Col key={state.id} xs={24} sm={12} lg={6}>
            <StateCard data={state} />
          </Col>
        ))}
        <Col xs={24} lg={18}>
          <SalesReport />
        </Col>
        <Col xs={24} lg={6}>
          <BudgetStatistic />
        </Col>
        {ecommerceData.reportData.map((report, index) => (
          <Col xs={24} md={6} key={index}>
            <ReportCard data={report} />
          </Col>
        ))}

        <Col xs={24} md={12} lg={10} xl={8}>
          <TopInquiries topInquiries={ecommerceData.topInquiries} />
        </Col>
        <Col xs={24} md={12} lg={8} xl={8}>
          <WeeklyBestSellers data={ecommerceData.bestSellers} />
        </Col>
        <Col xs={24} md={24} lg={6} xl={8}>
          <RevenueGraph revenueData={ecommerceData.revenueData} />
        </Col>

        <Col xs={24} lg={16} xl={18}>
          <RecentOrders recentOrders={ecommerceData.recentOrders} />
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AgeOfAudience audienceData={ecommerceData.audienceData} />
        </Col>

        <Col xs={24} md={12}>
          <MarketingCampaign
            marketingCampaign={ecommerceData.marketingCampaign}
          />
        </Col>
        <Col xs={24} md={12}>
          <PopularProducts popularProducts={ecommerceData.popularProducts} />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Revenue />
        </Col>

        <Col xs={24} md={12}>
          <NewCustomers newCustomers={ecommerceData.newCustomers} />
        </Col>

        <Col xs={24} lg={6}>
          <Browser browserData={ecommerceData.browser} />
        </Col>
      </AppRowContainer>
    </AppAnimate>
  );
};

export default ECommerce;
