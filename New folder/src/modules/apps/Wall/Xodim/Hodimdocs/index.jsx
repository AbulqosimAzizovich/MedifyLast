import React, {useState, useEffect, useRef} from 'react';
import './style.scss';
import {Dropdown, Space} from 'antd';
import DocViewer, {DocViewerRenderers} from '@cyntler/react-doc-viewer';

import gif from '../gif.gif';

const items = [
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm0 14c-4.322 0-6.25-1.927-6.25-6.25 0-4.322 1.928-6.25 6.25-6.25 4.323 0 6.25 1.928 6.25 6.25 0 4.323-1.927 6.25-6.25 6.25Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='M11.75 8a.75.75 0 1 0 .75.75.71.71 0 0 0-.75-.75ZM11 10.405V15.5h1.5v-5.095a3.01 3.01 0 0 1-1.5 0Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Folder Info</p>
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M18.814 10H14.5V2.695L5.185 14H9.5v7.31L18.814 10Zm-10.45 2.5L13 6.875V11.5h2.636L11 17.13V12.5H8.364Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Folder Activity</p>
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='m18.84 8.04-2.878-2.878a2.253 2.253 0 0 0-3.181 0L11.19 6.748l1 1-1.94 1.94-.91-.91a2.25 2.25 0 0 0-3.182 0l-1.97 1.968 4 4-3.218 3.22 1.06 1.061 3.22-3.22 4 4 1.97-1.968a2.253 2.253 0 0 0 0-3.182l-.908-.907 1.938-1.941 1 1 1.59-1.585a2.25 2.25 0 0 0 0-3.183Zm-1.059 2.121-.531.527-1-1-4.06 4.062 1.969 1.969a.75.75 0 0 1 0 1.06l-.909.907-6.939-6.94.909-.908a.768.768 0 0 1 1.06 0l1.97 1.97 4.062-4.058-1-1 .528-.526a.749.749 0 0 1 1.061 0l2.88 2.876a.75.75 0 0 1 0 1.059v.002Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p> Show pinned items</p>
      </a>
    ),
    key: '3',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M12 9.5A2.321 2.321 0 0 0 9.5 12a2.321 2.321 0 0 0 2.5 2.5 2.321 2.321 0 0 0 2.5-2.5A2.32 2.32 0 0 0 12 9.5Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='M20.177 11.678C20.067 11.446 17.412 6 12 6c-5.411 0-8.066 5.446-8.177 5.678L3.669 12l.154.322C3.933 12.554 6.589 18 12 18c5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.322ZM12 16.5c-3.77 0-6.03-3.42-6.65-4.5.62-1.081 2.879-4.5 6.65-4.5 3.771 0 6.029 3.418 6.65 4.5-.621 1.082-2.88 4.5-6.65 4.5Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p> Show deleted items</p>
      </a>
    ),
    key: '4',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='m13.22 11.22-2.72 2.72V12H9v4.5h4.5V15h-1.94l2.72-2.72-1.06-1.06Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='m17.341 6.03-1.372-1.37A2.265 2.265 0 0 0 14.38 4H5.5v16H18V7.621a2.265 2.265 0 0 0-.659-1.59ZM7 18.5v-13h7V8h2.5v10.5H7Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Request files</p>
      </a>
    ),
    key: '5',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M13 13V8h-1.5v3.5h-2V13H13Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='M11.75 4c-2.922 0-4.982.793-6.25 2.414V4.5H4V9h4.5V7.5H6.578c.974-1.354 2.639-2 5.172-2 4.323 0 6.25 1.928 6.25 6.25 0 4.323-1.927 6.25-6.25 6.25-2.38 0-4.016-.577-5.004-1.764l-1.153.959c1.29 1.551 3.305 2.305 6.157 2.305 5.215 0 7.75-2.535 7.75-7.75S16.965 4 11.75 4Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Rewind this folder</p>
      </a>
    ),
    key: '6',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M12 6c2.579 0 4.15 1.492 4.245 4.005 2.514.095 4.005 1.67 4.005 4.245 0 2.576-1.491 4.14-4 4.24v-1.507c1.652-.085 2.5-.997 2.5-2.733 0-1.825-.925-2.75-2.75-2.75h-1.25v-1.25c0-1.824-.925-2.75-2.75-2.75s-2.75.926-2.75 2.75v1.25H8c-1.825 0-2.75.925-2.75 2.75 0 1.736.847 2.648 2.5 2.733v1.508c-2.509-.099-4-1.663-4-4.241 0-2.579 1.491-4.15 4.004-4.245C7.85 7.492 9.421 6 12 6Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='m14.885 14.72-1.05 1.071-1.092-1.07v3.77h-1.5v-3.762l-1.075 1.06-1.053-1.067 2.876-2.839 2.894 2.837Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Add from Google Drive</p>
      </a>
    ),
    key: '7',
  },
];

const items1 = [
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm0 14c-4.322 0-6.25-1.927-6.25-6.25 0-4.322 1.928-6.25 6.25-6.25 4.323 0 6.25 1.928 6.25 6.25 0 4.323-1.927 6.25-6.25 6.25Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='M11.75 8a.75.75 0 1 0 .75.75.71.71 0 0 0-.75-.75ZM11 10.405V15.5h1.5v-5.095a3.01 3.01 0 0 1-1.5 0Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Folder Info</p>
      </a>
    ),
    key: '8',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M18.814 10H14.5V2.695L5.185 14H9.5v7.31L18.814 10Zm-10.45 2.5L13 6.875V11.5h2.636L11 17.13V12.5H8.364Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Folder Activity</p>
      </a>
    ),
    key: '9',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='m18.84 8.04-2.878-2.878a2.253 2.253 0 0 0-3.181 0L11.19 6.748l1 1-1.94 1.94-.91-.91a2.25 2.25 0 0 0-3.182 0l-1.97 1.968 4 4-3.218 3.22 1.06 1.061 3.22-3.22 4 4 1.97-1.968a2.253 2.253 0 0 0 0-3.182l-.908-.907 1.938-1.941 1 1 1.59-1.585a2.25 2.25 0 0 0 0-3.183Zm-1.059 2.121-.531.527-1-1-4.06 4.062 1.969 1.969a.75.75 0 0 1 0 1.06l-.909.907-6.939-6.94.909-.908a.768.768 0 0 1 1.06 0l1.97 1.97 4.062-4.058-1-1 .528-.526a.749.749 0 0 1 1.061 0l2.88 2.876a.75.75 0 0 1 0 1.059v.002Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p> Show pinned items</p>
      </a>
    ),
    key: '10',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M12 9.5A2.321 2.321 0 0 0 9.5 12a2.321 2.321 0 0 0 2.5 2.5 2.321 2.321 0 0 0 2.5-2.5A2.32 2.32 0 0 0 12 9.5Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='M20.177 11.678C20.067 11.446 17.412 6 12 6c-5.411 0-8.066 5.446-8.177 5.678L3.669 12l.154.322C3.933 12.554 6.589 18 12 18c5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.322ZM12 16.5c-3.77 0-6.03-3.42-6.65-4.5.62-1.081 2.879-4.5 6.65-4.5 3.771 0 6.029 3.418 6.65 4.5-.621 1.082-2.88 4.5-6.65 4.5Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p> Show deleted items</p>
      </a>
    ),
    key: '11',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='m13.22 11.22-2.72 2.72V12H9v4.5h4.5V15h-1.94l2.72-2.72-1.06-1.06Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='m17.341 6.03-1.372-1.37A2.265 2.265 0 0 0 14.38 4H5.5v16H18V7.621a2.265 2.265 0 0 0-.659-1.59ZM7 18.5v-13h7V8h2.5v10.5H7Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Request files</p>
      </a>
    ),
    key: '5',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M13 13V8h-1.5v3.5h-2V13H13Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='M11.75 4c-2.922 0-4.982.793-6.25 2.414V4.5H4V9h4.5V7.5H6.578c.974-1.354 2.639-2 5.172-2 4.323 0 6.25 1.928 6.25 6.25 0 4.323-1.927 6.25-6.25 6.25-2.38 0-4.016-.577-5.004-1.764l-1.153.959c1.29 1.551 3.305 2.305 6.157 2.305 5.215 0 7.75-2.535 7.75-7.75S16.965 4 11.75 4Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Rewind this folder</p>
      </a>
    ),
    key: '12',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href='#' className='setting__item'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='dig-UIIcon dig-UIIcon--standard'
          width='24'
          height='24'
          role='presentation'
          focusable='false'
        >
          <path
            d='M12 6c2.579 0 4.15 1.492 4.245 4.005 2.514.095 4.005 1.67 4.005 4.245 0 2.576-1.491 4.14-4 4.24v-1.507c1.652-.085 2.5-.997 2.5-2.733 0-1.825-.925-2.75-2.75-2.75h-1.25v-1.25c0-1.824-.925-2.75-2.75-2.75s-2.75.926-2.75 2.75v1.25H8c-1.825 0-2.75.925-2.75 2.75 0 1.736.847 2.648 2.5 2.733v1.508c-2.509-.099-4-1.663-4-4.241 0-2.579 1.491-4.15 4.004-4.245C7.85 7.492 9.421 6 12 6Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
          <path
            d='m14.885 14.72-1.05 1.071-1.092-1.07v3.77h-1.5v-3.762l-1.075 1.06-1.053-1.067 2.876-2.839 2.894 2.837Z'
            fill='currentColor'
            vectorEffect='non-scaling-stroke'
          ></path>
        </svg>
        <p>Add from Google Drive</p>
      </a>
    ),
    key: '13',
  },
];

const index = () => {
  const [hide, setHide] = useState(true);
  const [right, setRight] = useState(false);
  //
  const docs = [
    {
      uri: ' https://calibre-ebook.com/downloads/demos/demo.docx',
      fileType: 'docx',
      fileName: 'Another docx',
    },
    {
      uri: ' https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      fileType: 'pdf',
      fileName: 'anotherPdf.pdf',
    },
    {
      uri: ' https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls',
      fileType: 'xls',
      fileName: 'anotherxls.xls',
    },
  ];
  return (
    <section>
      <div className='container'>
        <div className='home__m'>
          <div className='home__wrapper'>
            <div className='all__docs'>
              <h3>Name</h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '10px',
                }}
              >
                <div className='doc__card' onClick={() => setRight(!right)}>
                  <div className='fr__doc'>
                    <img
                      src='https://www.computerhope.com/jargon/d/doc.png'
                      alt='Image'
                    />
                  </div>

                  <div className='doc__card--ff'>
                    <div>
                      <p>Document Name</p>
                      <span>XLSX • 31.04 KB</span>
                    </div>
                  </div>
                </div>

                <div className='doc__card' onClick={() => setRight(!right)}>
                  <div className='fr__doc'>
                    <img
                      src='https://www.computerhope.com/jargon/d/doc.png'
                      alt='Image'
                    />
                  </div>

                  <div className='doc__card--ff'>
                    <div>
                      <p>Document Name</p>
                      <span>XLSX • 31.04 KB</span>
                    </div>
                  </div>
                </div>

                <div className='doc__card' onClick={() => setRight(!right)}>
                  <div className='fr__doc'>
                    <img
                      src='https://www.computerhope.com/jargon/d/doc.png'
                      alt='Image'
                    />
                  </div>

                  <div className='doc__card--ff'>
                    <div>
                      <p>Document Name</p>
                      <span>XLSX • 31.04 KB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={right ? {width: '40%'} : {width: '0%', overflow: 'hidden'}}
            className='right__'
          >
            <div className='right__t'>
              <button className='close__rt' onClick={() => setRight(!right)}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='dig-UIIcon'
                  width='32'
                  height='32'
                  focusable='false'
                  aria-label='Close'
                >
                  <path
                    d='m17.5 6.5-11 11m11 0-11-11'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    vectorEffect='non-scaling-stroke'
                  ></path>
                </svg>
              </button>
              <div className='about__ff'>
                <h3>Document type</h3>
                <span>Type • Size | File information</span>
              </div>

              <div className='right__tfun'>
                <button>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    className='dig-UIIcon dig-UIIcon--standard'
                    width='24'
                    height='24'
                    role='presentation'
                    focusable='false'
                  >
                    <path
                      d='m20.836 9.911-6.105-.886L12 3.492 9.27 9.025l-6.106.886 4.43 4.319-.833 6.164L12 17.442l5.239 2.95-.834-6.162 4.43-4.319ZM12 15.72l-3.35 1.886.531-3.924-2.794-2.723 3.878-.564L12 6.882l1.735 3.514 3.878.563-2.795 2.724.532 3.924L12 15.72Z'
                      fill='currentColor'
                      vectorEffect='non-scaling-stroke'
                    ></path>
                  </svg>
                </button>

                <div className='btn__ff'>
                  <button>Share</button>
                  <button>Open</button>
                </div>
              </div>

              <div className='right__bfun'>
                <div>
                  <button>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      width='24'
                      height='24'
                      role='presentation'
                      focusable='false'
                    >
                      <path
                        d='M11.5 5v1.5h4.94l-5.579 5.579 1.06 1.06L17.5 7.561V12.5H19V5h-7.5Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                      <path
                        d='M17.5 16.75a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75H10V5H7.25A2.25 2.25 0 0 0 5 7.25v9.5A2.25 2.25 0 0 0 7.25 19h9.5A2.249 2.249 0 0 0 19 16.75V14h-1.5v2.75Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>
                    <p>Open</p>
                  </button>
                  <button>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      className='dig-UIIcon dig-UIIcon--standard'
                      width='24'
                      height='24'
                      role='presentation'
                      focusable='false'
                    >
                      <path
                        d='M15.982 2.526a2.417 2.417 0 0 1 1.726.718v.001l1.587 1.595.001.001a2.434 2.434 0 0 1 .713 1.729v11.922H7.517v-5.505h1.5v4.005h9.492V6.975h-2.97V4.026H9.05v4.475h-1.5V2.526h8.433Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                      <path
                        d='M12.34 10.025 11.269 8.91l1.082-1.04 2.793 2.905-2.793 2.905-1.082-1.04 1.073-1.115H6.005v8.495h10.01v1.5H4.505V10.017h1.5v.008h6.336Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>
                    <p>Save as</p>
                  </button>
                  <button>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      width='24'
                      height='24'
                      role='presentation'
                      focusable='false'
                    >
                      <path
                        d='m17.015 11.044-1.03-1.088-3.485 3.3V5.5H11v7.757L7.516 9.956l-1.032 1.088 5.266 4.989 5.265-4.989ZM19 17.5H4.5V19H19v-1.5Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>
                    <p>Download</p>
                  </button>
                  <button>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      className='dig-UIIcon dig-UIIcon--standard'
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
                    Manage permission
                  </button>
                </div>

                <div>
                  <button>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      className='dig-UIIcon dig-UIIcon--standard'
                      width='24'
                      height='24'
                      role='presentation'
                      focusable='false'
                    >
                      <path
                        d='M12 10a1.857 1.857 0 0 0-2 2 1.857 1.857 0 0 0 2 2 1.857 1.857 0 0 0 2-2 1.857 1.857 0 0 0-2-2Zm6 0a1.857 1.857 0 0 0-2 2 1.858 1.858 0 0 0 2 2 1.857 1.857 0 0 0 2-2 1.857 1.857 0 0 0-2-2ZM6 10a1.857 1.857 0 0 0-2 2 1.857 1.857 0 0 0 2 2 1.856 1.856 0 0 0 2-2 1.857 1.857 0 0 0-2-2Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>

                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      width='16'
                      height='16'
                      role='presentation'
                      focusable='false'
                      data-testid='digButtonDropdownIcon'
                    >
                      <path
                        d='m5.25 9.25 6.5 6.25 6.5-6.25'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className='right__c'>
              <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
                style={{height: '200vh'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
