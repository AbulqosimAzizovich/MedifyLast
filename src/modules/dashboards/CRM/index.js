import React from 'react';
import {Table, Tag} from 'antd';
import {Link, NavLink} from 'react-router-dom';

const invoices = [
  {
    key: (
      <>
        <Link to='/dashboards/crm/another'>Abdulqosim</Link>
      </>
    ),
    date: '23 Jan 2019, 10:45pm',
    surname: 'Tulqinov',
    amount: '$2300.00',
    status: 'Complete',
    picture: (
      <>
        <img src='https://picsum.photos/seed/picsum/80/60' alt='rasm' />
      </>
    ),
  },
  {
    key: (
      <>
        <Link to='/dashboards/crm/another'>Abdulqosim</Link>
      </>
    ),
    date: '12 Jan 2020, 10:45pm',
    surname: 'Tulqinov',
    amount: '$120.00',
    status: 'Pending',
    picture: (
      <>
        <img src='https://picsum.photos/seed/picsum/80/60' alt='rasm' />
      </>
    ),
  },

  {
    key: (
      <>
        <Link to='/dashboards/crm/another'>Abdulqosim</Link>
      </>
    ),
    date: '12 Jan 2020, 10:45pm',
    surname: 'Tulqinov',
    amount: '210.00',
    status: 'Pending',
    picture: (
      <>
        <img src='https://picsum.photos/seed/picsum/80/60' alt='rasm' />
      </>
    ),
  },
  {
    key: (
      <>
        <Link to='/dashboards/crm/another'>Abdulqosim</Link>
      </>
    ),
    date: '26 Dec 2019, 12:15 pm',
    surname: 'Tulqinov',
    amount: '560.00',
    status: 'Complete',
    picture: (
      <>
        <img src='https://picsum.photos/seed/picsum/80/60' alt='rasm' />
      </>
    ),
  },
  {
    key: (
      <>
        <Link to='/dashboards/crm/another'>Abdulqosim</Link>
      </>
    ),
    date: '21 Jan 2019, 6:12 am',
    surname: 'Tulqinov',
    amount: '3660.00',
    status: 'Cancelled',
    picture: (
      <>
        <img src='https://picsum.photos/seed/picsum/80/60' alt='rasm' />
      </>
    ),
  },
  {
    key: (
      <>
        <Link to='/dashboards/crm/another'>Abdulqosim</Link>
      </>
    ),
    date: '21 Jan 2019, 6 :12 am',
    surname: 'Tulqinov',
    amount: '350.00',
    status: 'Complete',
    picture: (
      <>
        <img src='https://picsum.photos/seed/picsum/80/60' alt='rasm' />
      </>
    ),
  },
];

const columns = [
  {
    title: <p className='title__Color'> Picture</p>,
    dataIndex: 'picture',
    key: 'picture',
    with: 20,
  },
  {
    title: <p className='title__Color'> Name</p>,
    dataIndex: 'key',
    key: 'key',
    with: 20,
  },
  {
    title: <p className='title__Color'> Surname</p>,
    dataIndex: 'surname',
    key: 'surname',
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
