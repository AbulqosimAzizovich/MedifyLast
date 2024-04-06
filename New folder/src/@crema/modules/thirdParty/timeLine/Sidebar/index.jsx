import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Dropdown, Space} from 'antd';
import {CloudFilled} from '@ant-design/icons';
import './style.scss';

const items = [
  {
    label: <Link to='/third-party/time-line/2'>Folder1</Link>,
    key: '0',
  },
  {
    label: <Link to='/third-party/time-line/2'>Folder2</Link>,
    key: '1',
  },
  {
    label: 'Folder3',
    key: '3',
  },
];
const index = () => {
  return (
    <div className='aside__main'>
      <ul className='ul__'>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <CloudFilled style={{color: '#2997ff', fontSize: '24px'}} />
          <h1>Medify </h1>
        </div>
        <li>
          <NavLink to='/third-party/time-line' className='navlink__'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='dig-UIIcon dig-UIIcon--standard _navIcon_10jct_1'
              width='24'
              height='24'
              role='presentation'
              focusable='false'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 5v6.5H12V5H5.5Zm8 2.5v9h6v-9h-6Zm-9 11V13H12v5.5H4.5Z'
                fill='currentColor'
                vectorEffect='non-scaling-stroke'
              ></path>
            </svg>
            <p>Загрузить файл</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/third-party/time-line/1' className='navlink__'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='dig-UIIcon dig-UIIcon--standard _navIcon_10jct_1'
              width='24'
              height='24'
              role='presentation'
              focusable='false'
            >
              <path
                d='M10 11.5a1.392 1.392 0 0 0 1.5-1.5A1.392 1.392 0 0 0 10 8.5 1.393 1.393 0 0 0 8.5 10a1.393 1.393 0 0 0 1.5 1.5Z'
                fill='currentColor'
                vectorEffect='non-scaling-stroke'
              ></path>
              <path
                d='m19.01 12.915-.01-.008V5H5v14h14v-6.075l.01-.01ZM17.5 6.5v5.015l-.091-.085a3.254 3.254 0 0 0-4.596 0l-2.171 2.17a.77.77 0 0 1-1.06 0l-.38-.38a2.25 2.25 0 0 0-2.7-.354V6.5H17.5Zm-11 11v-2.636l.58-.58a.75.75 0 0 1 1.06 0l.38.38a2.25 2.25 0 0 0 3.181 0l2.172-2.172a1.76 1.76 0 0 1 2.495.02L17.5 13.56v3.94h-11Z'
                fill='currentColor'
                vectorEffect='non-scaling-stroke'
              ></path>
            </svg>
            <p>Храняемые Файлы</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/third-party/time-line/2' className='navlink__'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='dig-UIIcon dig-UIIcon--standard _navIcon_10jct_1'
              width='24'
              height='24'
              role='presentation'
              focusable='false'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 15.5h5.25L9 14H4.5v-1.352a2.128 2.128 0 0 1 2.125-2.125h4.174l.736-1.473c.186-.492.26-1.043.26-1.618 0-1.063-.254-2.047-.995-2.72C10.08 4.06 9.215 4 8.75 4c-.465 0-1.33.059-2.05.713-.74.672-.995 1.656-.995 2.719 0 .587.077 1.15.271 1.65A3.628 3.628 0 0 0 3 12.646V15.5Zm7.296-8.068c0 .838-.198 1.319-.485 1.59-.299.284-.694.342-1.061.342s-.762-.058-1.061-.341c-.286-.272-.484-.753-.484-1.591 0-1.713.826-1.932 1.545-1.932.72 0 1.546.22 1.546 1.932ZM21.01 20H9.532v-2.85a3.622 3.622 0 0 1 2.967-3.559c-.193-.497-.27-1.058-.27-1.642 0-1.061.254-2.044.994-2.715.72-.654 1.583-.712 2.048-.712.464 0 1.327.058 2.047.712.74.671.994 1.654.994 2.715 0 .584-.077 1.145-.27 1.642a3.622 3.622 0 0 1 2.968 3.559V20Zm-7.859-4.968a2.122 2.122 0 0 0-2.12 2.12V18.5h8.479v-1.349a2.121 2.121 0 0 0-2.12-2.12h-4.239Zm3.182-1.5c.284-.272.48-.751.48-1.583 0-1.708-.825-1.927-1.542-1.927-.718 0-1.542.219-1.542 1.927 0 .832.196 1.31.48 1.583.298.286.694.344 1.062.344.368 0 .764-.058 1.062-.344Z'
                fill='currentColor'
                vectorEffect='non-scaling-stroke'
              ></path>
            </svg>
            <p>Работы с Файлами</p>
          </NavLink>
        </li>
      </ul>
      <Dropdown
        className='dropdown__'
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='dig-UIIcon dig-UIIcon--standard _sectionHeaderChevron_4oe73_86'
              width='15'
              height='15'
              role='presentation'
              focusable='false'
            >
              <path
                d='m5.25 9.25 6.5 6.25 6.5-6.25'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                vectorEffect='non-scaling-stroke'
              ></path>
            </svg>
            Храняемые Файлы
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default index;
