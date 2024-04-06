import React from 'react';
import {Menu} from 'antd';
import './style.scss';
import {NavLink} from 'react-router-dom';
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <>
      <p className='sidebar2__item'>KOMPANIYASI</p>
    </>,
    'sub2',
    [
      getItem(
        <>
          <NavLink to={'/apps/wall/list'} className='sidebar2__item'>
            Xodimlar ro'yxati
          </NavLink>
        </>,
        '5',
      ),
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            Ish haqi to'lov qaydnomalari
          </NavLink>
        </>,
        '6',
      ),
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            {' '}
            Xodim hujjatlari
          </NavLink>
        </>,
        '7',
      ),
      //
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            {' '}
            Kompaniya hujjatlari 1
          </NavLink>
        </>,
        '8',
      ),
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            {' '}
            Kompaniya hujjatlari 2
          </NavLink>
        </>,
        '9',
      ),
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            {' '}
            Kompaniya hujjatlari 3
          </NavLink>
        </>,
        '10',
      ),
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            {' '}
            Kompaniya hujjatlari 4
          </NavLink>
        </>,
        '11',
      ),
      getItem(
        <>
          <NavLink to={'/apps/wall'} className='sidebar2__item'>
            {' '}
            Kompaniya hujjatlari 5
          </NavLink>
        </>,
        '12',
      ),
      // getItem('Submenu', 'sub3', null, [
      //   getItem('Option 7', '7'),
      //   getItem('Option 8', '8'),
      // ]),
    ],
  ),

  getItem('XODIM', 'sub3', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('DAVOMAT', 'sub4', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('ISHGA QABUL QILISH', 'sub5', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('REJA MENEJMENTI', 'sub6', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('ADAPTATSIYA JARAYONLARI', 'sub7', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className='aside___'>
      <h1>Kadrlar</h1>
      <Menu
        className=' h-[100vh]'
        onClick={onClick}
        style={{
          width: 200,
        }}
        mode='inline'
        items={items}
      />
    </div>
  );
};
export default App;
