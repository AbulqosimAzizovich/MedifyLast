import React, {useState} from 'react';
import './style.scss';
import {Dropdown, Space} from 'antd';
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
const index = () => {
  const UploadFiles = () => {
    document.getElementById('upload__').click();
  };
  return (
    <section>
      <div className='container'>
        <div className='home__wrapper'>
          <input
            className='search__'
            placeholder='Search for keywords, people, and tags'
          />

          <div className='home__crud'>
            <div className='crud__card opacity__'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='dig-UIIcon dig-UIIcon--standard _browseActionBarSimpleButton--icon_1y8yi_11'
                width='24'
                height='24'
                role='presentation'
                focusable='false'
              >
                <path
                  d='M11.75 4.5V19M19 11.75H4.5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  vectorEffect='non-scaling-stroke'
                ></path>
              </svg>
              <p>Create</p>
            </div>

            <div className='crud__card opacity__1'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='dig-UIIcon dig-UIIcon--standard _browseActionBarSimpleButton--icon_1y8yi_11'
                width='24'
                height='24'
                role='presentation'
                focusable='false'
              >
                <path
                  d='M11 8.244V16h1.5V8.244l3.485 3.3 1.03-1.088-5.265-4.989-5.266 4.989 1.032 1.088L11 8.244Zm8 9.256H4.5V19H19v-1.5Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
              </svg>
              <p>Upload</p>
            </div>

            <div className='crud__card opacity__1'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='dig-UIIcon dig-UIIcon--standard _browseActionBarSimpleButton--icon_1y8yi_11'
                width='24'
                height='24'
                role='presentation'
                focusable='false'
              >
                <path
                  d='M9 13.75v-1.5h2v-2h1.5v2h2v1.5h-2v2H11v-2H9Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
                <path
                  d='M17.75 19h-12a2.25 2.25 0 0 1-2.25-2.25V5h4.573a2.238 2.238 0 0 1 2.012 1.244l.378.756H20v9.75A2.25 2.25 0 0 1 17.75 19ZM5 6.5v10.25a.75.75 0 0 0 .75.75h12a.75.75 0 0 0 .75-.75V8.5H9.537l-.793-1.585a.745.745 0 0 0-.671-.415H5Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
              </svg>
              <p>Create Folder</p>
            </div>

            <div className='crud__card opacity__1'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='dig-UIIcon dig-UIIcon--standard _browseActionBarSimpleButton--icon_1y8yi_11'
                width='24'
                height='24'
                role='presentation'
                focusable='false'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.042 16.958C7.983 17.9 9.529 18.5 12 18.5s4.017-.6 4.958-1.542C17.9 16.017 18.5 14.471 18.5 12s-.6-4.017-1.542-4.958C16.017 6.1 14.471 5.5 12 5.5s-4.017.6-4.958 1.542C6.1 7.983 5.5 9.529 5.5 12s.6 4.017 1.542 4.958ZM4 12c0 5.383 2.617 8 8 8s8-2.617 8-8-2.617-8-8-8-8 2.617-8 8Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
                <path
                  d='M12 15.5c-2.355 0-3.5-1.145-3.5-3.5S9.645 8.5 12 8.5s3.5 1.145 3.5 3.5-1.145 3.5-3.5 3.5Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
              </svg>
              <p>Record</p>
            </div>

            <div className='crud__card opacity__1'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='dig-UIIcon dig-UIIcon--standard _browseActionBarSimpleButton--icon_1y8yi_11'
                width='24'
                height='24'
                role='presentation'
                focusable='false'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.988 7.139c0 .597-.236 1.169-.657 1.591l-7.114 7.109-4.25.691.692-4.25 7.111-7.11a2.252 2.252 0 0 1 3.182 0l.378.379c.422.422.659.994.659 1.591Zm-1.718-.53-.378-.379a.752.752 0 0 0-1.063 0l-.796.796 1.45 1.43.787-.787a.75.75 0 0 0 0-1.06ZM8.062 13l-.28 1.717 1.718-.279 4.923-4.919-1.45-1.43L8.062 13Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
                <path
                  d='M5 18h14v1.5H5V18Z'
                  fill='currentColor'
                  vectorEffect='non-scaling-stroke'
                ></path>
              </svg>
              <p>Edit Doc</p>
            </div>

            <div className='crud__card opacity__1'>
              <svg
                viewBox='0 0 64 64'
                fill='none'
                className='dig-UIIcon dig-UIIcon--standard _browseActionBarSimpleButton--icon_1y8yi_11'
                width='24'
                height='24'
                role='presentation'
                focusable='false'
              >
                <path
                  d='M13.813 56V8.005h24.693a5 5 0 0 1 3.52 1.45l3.137 3.11 2.638 2.507a7 7 0 0 1 2.177 5.073V32.01l-.017 2.198h-4l.017-2.206v-10.99H36.97v-9.007H17.813V52h28.015v-.01h4l-.03 4.01H13.812Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M32.583 45.138H25.37v-4h7.213v4Zm9.95 0h-7.214v-4h7.214v4Zm2.719 0h7.214v-4h-7.214v4Zm-11.613-12.63 3.094-3.094-2.828-2.828-3.095 3.094-3.094-3.094-2.828 2.828 3.094 3.094-3.094 3.095 2.828 2.828 3.095-3.094 3.094 3.094 2.828-2.828-3.094-3.095Z'
                  fill='currentColor'
                ></path>
              </svg>
              <p>Get signatures</p>
            </div>
          </div>

          {/* <div className='all__files'>
            <div className='settings__'>
              <p>All files</p>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
                className='dr__'
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      className='dig-UIIcon dig-UIIcon--standard'
                      width='24'
                      height='24'
                      focusable='false'
                      aria-label='Folder settings'
                    >
                      <path
                        d='M12 9a2.811 2.811 0 0 0-3 3 2.811 2.811 0 0 0 3 3 2.81 2.81 0 0 0 3-3 2.813 2.813 0 0 0-3-3Zm0 4.5a1.344 1.344 0 0 1-1.5-1.5 1.344 1.344 0 0 1 1.5-1.5 1.345 1.345 0 0 1 1.5 1.5 1.346 1.346 0 0 1-1.5 1.5Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                      <path
                        d='M18 12c0-.15-.005-.3-.015-.463l1.389-1.764-1.758-3.045-1.989.286a5.438 5.438 0 0 0-1.09-.565L13.758 4.5h-3.516l-.78 1.95a5.44 5.44 0 0 0-1.09.565l-1.989-.286-1.758 3.045 1.39 1.765a7.405 7.405 0 0 0 0 .925l-1.39 1.764 1.758 3.045 1.989-.286a5.47 5.47 0 0 0 1.09.565l.78 1.948h3.515l.78-1.95a5.44 5.44 0 0 0 1.09-.565l1.99.287 1.757-3.045-1.389-1.766c.01-.161.015-.311.015-.461Zm-1.532-.624a6.276 6.276 0 0 1 0 1.248l-.029.3 1.128 1.434-.742 1.285-1.6-.23-.25.195c-.371.283-.79.498-1.236.636l-.339.106-.658 1.65h-1.484l-.658-1.65-.337-.108a3.974 3.974 0 0 1-1.236-.635l-.25-.195-1.6.23-.743-1.285 1.128-1.433-.028-.3a5.976 5.976 0 0 1-.002-1.248l.028-.3-1.128-1.434.743-1.285 1.6.23.25-.195c.371-.283.79-.498 1.236-.635l.339-.107.658-1.65h1.485l.657 1.65.337.107c.446.138.864.353 1.236.636l.25.195 1.6-.23.742 1.285-1.128 1.433.031.3Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>

          <div className='activity__'>
            <button className='activiy__card'>Recents</button>
            <button className='activiy__card'>Starred</button>
          </div> */}
        </div>
        <div className='uploads__'>
          <div className='drop__'>
            <svg
              viewBox='0 0 64 64'
              fill='none'
              className='dig-PictogramIcon _emptyStateViewIcon_a086g_304'
              width='64'
              height='64'
              focusable='false'
              role='presentation'
            >
              <path
                d='M29.9958 9.51428V9.52105C29.2619 13.3607 25.2045 21.7001 15.3122 25.1569L16.6317 28.933C22.9353 26.7302 27.2381 22.8234 29.9958 18.9291L29.9958 45.9903H33.9958L33.9958 18.9233C36.7535 22.8194 41.0574 26.7291 47.3641 28.933L48.6837 25.1569C38.7913 21.7001 34.7342 13.3606 34.0002 9.52101L33.9958 9.52185V9.51428H29.9958Z'
                fill='currentColor'
              ></path>
              <path
                d='M8 54.5237H56V50.5237H8V54.5237Z'
                fill='currentColor'
              ></path>
            </svg>
            <p>Drop files here to upload</p>
          </div>

          <button onClick={() => UploadFiles()} className='activiy__card1'>
            Uploads
          </button>
          <input type='file' id='upload__' style={{display: 'none'}} />
        </div>
      </div>
    </section>
  );
};

export default index;
