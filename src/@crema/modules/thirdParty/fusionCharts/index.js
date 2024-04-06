// import React from 'react';
// import AppComponentHeader from '@crema/components/AppComponentHeader';
// import AppRowContainer from '@crema/components/AppRowContainer';
// import { Col } from 'antd';
// import AppComponentCard from '@crema/components/AppComponentCard';
// import SimpleChart from './SimpleChart';
// import SimpleChartSource from '!raw-loader!./SimpleChart';
// import SimpleGuage from './SimpleGuage';
// import SimpleGuageSource from '!raw-loader!./SimpleGuage';
// import WorldMap from './WorldMap';
// import WorldMapSource from '!raw-loader!./WorldMap';
// import StackedColumns from './StackedColumns';
// import StackedColumnsSource from '!raw-loader!./StackedColumns';
// import StackedNegative from './StackedNegative';
// import StackedNegativeSource from '!raw-loader!./StackedNegative';
// import StackedArea from './StackedArea';
// import StackedAreaSource from '!raw-loader!./StackedArea';
//
// const FusionCharts = () => {
//   return (
//     <>
//       <AppComponentHeader
//         title='FusionCharts'
//         description='Build beautiful web & mobile dashboards'
//         refUrl='https://www.fusioncharts.com/react-charts?framework=react/'
//       />
//
//       <AppRowContainer>
//         <Col xs={24} lg={12}>
//           <AppComponentCard
//             title='Stacked Columns'
//             component={StackedColumns}
//             source={StackedColumnsSource}
//           />
//         </Col>
//         <Col xs={24} lg={12}>
//           <AppComponentCard
//             title='Stacked Negative'
//             component={StackedNegative}
//             source={StackedNegativeSource}
//           />
//         </Col>
//         <Col xs={24} lg={12}>
//           <AppComponentCard
//             title='Stacked Area'
//             component={StackedArea}
//             source={StackedAreaSource}
//           />
//         </Col>
//         <Col xs={24} lg={12}>
//           <AppComponentCard
//             title='Simple Chart'
//             component={SimpleChart}
//             source={SimpleChartSource}
//           />
//         </Col>
//         <Col xs={24} lg={12}>
//           <AppComponentCard
//             title='Simple Guage'
//             component={SimpleGuage}
//             source={SimpleGuageSource}
//           />
//         </Col>
//         <Col xs={24} lg={12}>
//           <AppComponentCard
//             title='WorldMap'
//             component={WorldMap}
//             source={WorldMapSource}
//           />
//         </Col>
//       </AppRowContainer>
//     </>
//   );
// };
//
// export default FusionCharts;
// import React, {useState} from 'react';
// import {Table, Input, Space} from 'antd';
//

// const {Search} = Input;

// const dataSource = [
//   {
//     key: '1',
//     orderId: '#74dhajs',
//     date: '2024-03-02',
//     amount: '$100.00',
//     status: 'Processing',
//   },
//   {
//     key: '2',
//     orderId: '#7dfd',
//     date: '2024-03-04',
//     amount: '$100.00',
//     status: 'Processing2',
//   },
//   {
//     key: '3',
//     orderId: '#rsdfgdhajs',
//     date: '2024-03-03',
//     amount: '$102.00',
//     status: 'Processing3',
//   },
//   {
//     key: '4',
//     orderId: '#7524s',
//     date: '2024-03-01',
//     amount: '$130.00',
//     status: 'Processing4',
//   },
//   // Add more data as needed
// ];

// const columns = [
//   {
//     title: <p className='title__Color'> ORDER ID</p>,
//     dataIndex: 'orderId',
//     key: 'orderId',
//     width: 70,
//     sorter: (a, b) => a.orderId.localeCompare(b.orderId),
//     render: (text) => <a href='#'>{text}</a>,
//   },
//   {
//     title: <p className='title__Color'>DATE</p>,
//     dataIndex: 'date',
//     key: 'date',
//     width: 250,
//     sorter: (a, b) => new Date(a.date) - new Date(b.date),
//   },
//   {
//     title: <p className='title__Color'>AMOUNT</p>,
//     dataIndex: 'amount',
//     key: 'amount',
//     width: 50,
//   },
//   {
//     title: <p className='title__Color'>STATUS</p>,
//     dataIndex: 'status',
//     key: 'status',
//     width: 250,
//   },
// ];

// const Index = () => {
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = (value) => {
//     setSearchText(value);
//   };

//   const filteredDataSource = dataSource.filter((item) =>
//     item.orderId.toLowerCase().includes(searchText.toLowerCase()),
//   );

//   return (
//     <div>
//       <Space style={{marginBottom: 16}}>
//         <Search
//           placeholder='Search by ORDER ID'
//           onSearch={handleSearch}
//           style={{width: 200}}
//         />
//       </Space>
//       <Table
//         dataSource={filteredDataSource}
//         columns={columns}
//       />
//     </div>
//   );
// };

// export default Index;

import React from 'react';
import {Table, Tag} from 'antd';
import './index.css';

const invoices = [
  {
    key: '#746F5K2',
    date: '23 Jan 2019, 10:45pm',
    amount: '$2300.00',
    status: 'Complete',
  },
  {
    key: '#546H74W',
    date: '12 Jan 2020, 10:45pm',
    amount: '$120.00',
    status: 'Pending',
  },

  {
    key: '#546H74W',
    date: '12 Jan 2020, 10:45pm',
    amount: '210.00',
    status: 'Pending',
  },
  {
    key: '#87X6A44',
    date: '26 Dec 2019, 12:15 pm',
    amount: '560.00',
    status: 'Complete',
  },
  {
    key: '#986G531',
    date: '21 Jan 2019, 6:12 am',
    amount: '3660.00',
    status: 'Cancelled',
  },
  {
    key: '#326T4M9',
    date: '21 Jan 2019, 6 :12 am',
    amount: '350.00',
    status: 'Complete',
  },
  // ... rest of the invoices
];

const columns = [
  {
    title: <p className='title__Color'> ORDER ID</p>,
    dataIndex: 'key',
    key: 'key',
    with: 20,
  },
  {
    title: <p className='title__Color'>DATE</p>,
    dataIndex: 'date',
    key: 'date',
    with: 120,
  },
  {
    title: <p className='title__Color'>AMOUNT</p>,
    dataIndex: 'amount',
    key: 'amount',
    with: 10,
  },
  {
    title: <p className='title__Color'>STATUS</p>,
    key: 'status',
    dataIndex: 'status',
    with: 220,
    render: (status) => (
      <Tag color={status === 'Complete' ? 'green' : 'volcano'}>{status}</Tag>
    ),
  },
];

const Index = () => (
  <Table columns={columns} pagination={false} dataSource={invoices} />
);

export default Index;
