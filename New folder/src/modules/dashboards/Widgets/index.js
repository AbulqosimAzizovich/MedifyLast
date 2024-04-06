import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import {Col} from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import {
  AddTags,
  BirthdayCard,
  Categories,
  CityInfo,
  Colors,
  CountryMap,
  CremaCard,
  DateSelector,
  Formats,
  Header,
  HollywoodMovie,
  IllustrationDesign,
  Messages,
  Price,
  Profile,
  RecentActivity,
  Reviews,
  Subscribe,
  TaskList,
  TemperatureCard,
  VisitorAnalysis,
  WallPaper,
} from '@crema/modules/dashboards/Widgets';
import {FaFacebookF} from 'react-icons/fa';
import {TwitterOutlined} from '@ant-design/icons';
import {blue, geekblue} from '@ant-design/colors';
import AppPageMeta from '@crema/components/AppPageMeta';

const Widgets = () => {
  const [{apiData: widgetsData}] = useGetDataApi('/dashboard/widgets');

  return (
    <>
      <AppPageMeta title='Widgets' />
      {widgetsData ? (
        <>
          <h2 className='card-outer-title'>
            <IntlMessages id='dashboard.widgets' />
          </h2>

          <AppRowContainer>
            <Col xs={24} lg={12} key={'a'}>
              <WallPaper />
            </Col>
            <Col xs={24} lg={12} key={'b'}>
              <HollywoodMovie />
            </Col>
            <Col xs={24} lg={8} key={'c'}>
              <TemperatureCard temperatures={widgetsData.temperatures} />
            </Col>
            <Col xs={24} lg={8} key={'d'}>
              <DateSelector />
            </Col>
            <Col xs={24} lg={8} key={'e'}>
              <VisitorAnalysis />
            </Col>
            <Col xs={24} lg={8} key={'f'}>
              <BirthdayCard />
            </Col>
            <Col xs={24} lg={8} key={'g'}>
              <CountryMap />
            </Col>
            <Col xs={24} lg={8} key={'h'}>
              <RecentActivity data={widgetsData.recentActivity} />
            </Col>
            <Col xs={24} lg={8} key={'i'}>
              <IllustrationDesign />
            </Col>
            <Col xs={24} lg={8} key={'j'}>
              <CityInfo cityData={widgetsData.cityData} />
            </Col>
            <Col xs={24} lg={8} key={'k'}>
              <Categories data={widgetsData.categories} />
            </Col>
            <Col xs={24} lg={14} key={'l'}>
              <Header />
            </Col>
            <Col xs={24} lg={10} key={'m'}>
              <Subscribe />
            </Col>
            <Col xs={24} lg={8} key={'n'}>
              <Profile data={widgetsData.profile} />
            </Col>
            <Col xs={24} lg={8} key={'o'}>
              <Messages data={widgetsData.messages} />
            </Col>
            <Col xs={24} lg={8} key={'p'}>
              <TaskList data={widgetsData.taskList} />
            </Col>
            <Col xs={24} lg={6} key={'q'}>
              <Colors data={widgetsData.colorsList} />
            </Col>
            <Col xs={24} lg={10} key={'r'}>
              <Reviews data={widgetsData.reviewsList} />
            </Col>
            <Col xs={24} lg={8} key={'s'}>
              <AppRowContainer>
                <Col xs={24} key={'t'}>
                  <AddTags data={widgetsData.tagsList} />
                </Col>
                <Col xs={24} className='mb-0' key={'u'}>
                  <Price />
                </Col>
              </AppRowContainer>
            </Col>

            <Col xs={24} lg={8} key={'v'}>
              <CremaCard
                data={widgetsData.mateInfo.facebookInfo}
                bgColor={geekblue[6]}
                icon={<FaFacebookF />}
              />
            </Col>

            <Col xs={24} lg={8} key={'w'}>
              <CremaCard
                data={widgetsData.mateInfo.twitterInfo}
                bgColor={blue[6]}
                icon={<TwitterOutlined />}
              />
            </Col>

            <Col xs={24} lg={8} key={'x'}>
              <Formats data={widgetsData.formatList} />
            </Col>
          </AppRowContainer>
        </>
      ) : null}
    </>
  );
};

export default Widgets;
