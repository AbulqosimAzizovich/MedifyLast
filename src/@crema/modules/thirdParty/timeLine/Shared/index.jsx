import React, {useState, useEffect, useRef} from 'react';
import './style.scss';
import {Dropdown, Space} from 'antd';
import DocViewer, {DocViewerRenderers} from '@cyntler/react-doc-viewer';
import gif from '../gif.gif';
const index = () => {
  const [hide, setHide] = useState(true);
  const [right, setRight] = useState(false);
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
            <div className='folder__style'>
              <div className='fs__title'>
                <p>Suggested from your activity</p>

                <button onClick={() => setHide(!hide)}>
                  <div style={hide ? {display: 'none'} : {display: 'flex'}}>
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
                        d='M20.177 11.678a12.025 12.025 0 0 0-1.988-2.806l-1.073 1.072A11.293 11.293 0 0 1 18.65 12c-.62 1.082-2.879 4.5-6.65 4.5a5.95 5.95 0 0 1-1.291-.15l-1.227 1.227A7.68 7.68 0 0 0 12 18c5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.322ZM16.97 5.97l-1.074 1.073A7.782 7.782 0 0 0 12 6c-5.411 0-8.066 5.446-8.177 5.678L3.669 12l.154.322a12.032 12.032 0 0 0 3.024 3.77l-.877.878 1 1 11-11-1-1Zm-3.78 3.78A2.845 2.845 0 0 0 12 9.5 2.321 2.321 0 0 0 9.5 12c-.005.41.08.817.248 1.192l-1.823 1.822A10.744 10.744 0 0 1 5.35 12c.62-1.081 2.879-4.5 6.65-4.5a6.176 6.176 0 0 1 2.773.667L13.19 9.75Z'
                        fill='currentColor'
                        vectorEffect='non-scaling-stroke'
                      ></path>
                    </svg>
                  </div>

                  <div style={hide ? {display: 'flex'} : {display: 'none'}}>
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
                  </div>
                </button>
              </div>
              <div
                className=''
                style={hide ? {display: 'flex'} : {display: 'none'}}
              >
                <div className='fs__about--info1'>
                  <p>
                    As you use Dropbox, suggested items will automatically show
                    up here.
                  </p>
                </div>
              </div>
            </div>
            <div className='all__docs'>
              <h3>Name</h3>
              <div className='doc__card' onClick={() => setRight(!right)}>
                <div className='fr__doc'>
                  <img src={gif} alt='Image' />
                </div>

                <div className='doc__card--ff'>
                  <div>
                    <p>Document Name</p>
                    <span>XLSX • 31.04 KB</span>
                  </div>

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
                  <button>
                    {/* <Dropdown
                    menu={{
                      items1,
                    }}
                    trigger={['click']}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>Click me</Space>
                    </a>
                  </Dropdown> */}
                    Share
                  </button>
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
