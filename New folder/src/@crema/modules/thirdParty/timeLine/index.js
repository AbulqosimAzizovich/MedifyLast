// import React from 'react';
// // import {Col} from 'antd';

// // import AppComponentCard from '@crema/components/AppComponentCard';
// // import AppComponentHeader from '@crema/components/AppComponentHeader';

// // import Custom from './Custom';
// // import CustomSource from '!!raw-loader!./Custom';

// // import ReactImageTimeline from './ReactImageTimeline';
// // import ReactImageTimelineSource from '!!raw-loader!./ReactImageTimeline';
// // import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

// import './index.css';
// import {Dropdown, Space} from 'antd';

// const Timeline = () => {
//   const items = [
//     {
//       label: <a href='https://www.antgroup.com'>1st menu item</a>,
//       key: '0',
//     },
//     {
//       label: <a href='https://www.aliyun.com'>2nd menu item</a>,
//       key: '1',
//     },
//     {
//       type: 'divider',
//     },
//     {
//       label: '3rd menu item',
//       key: '3',
//     },
//   ];
//   return (
//     <>
//       {/* <AppComponentHeader
//         title='Timeline'
//         description='A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.'
//         refUrl='https://cookpete.com/react-player/'
//       />

//       <AppRowContainer>
//         <Col span={24}>
//           <AppComponentCard
//             title='Custom'
//             maxHeight={700}
//             component={Custom}
//             source={CustomSource}
//           />
//         </Col>
//         <Col span={24}>
//           <AppComponentCard
//             title='React Image Timeline'
//             maxHeight={700}
//             component={ReactImageTimeline}
//             source={ReactImageTimelineSource}
//           />
//         </Col>
//       </AppRowContainer> */}
//       <div>
//         <div className='container'>
//           <div className='file_wrapper'>
//             <h1 className='file_title'>Home</h1>

//             <div className='first__'>
//               <h3>Quick Access</h3>
//               <div className='folders'>
//                 {'12345'.split('').map((e, id) => {
//                   return (
//                     <>
//                       <div key={id} className='folder_card'>
//                         <div className='picture'>
//                           <svg
//                             xmlns='http://www.w3.org/2000/svg'
//                             x='0px'
//                             y='0px'
//                             viewBox='0 0 72 72'
//                           >
//                             <path
//                               fill='#6C87FE'
//                               d='M57.5,31h-23c-1.4,0-2.5-1.1-2.5-2.5v-10c0-1.4,1.1-2.5,2.5-2.5h23c1.4,0,2.5,1.1,2.5,2.5v10	C60,29.9,58.9,31,57.5,31z'
//                             ></path>
//                             <path
//                               fill='#8AA3FF'
//                               d='M59.8,61H12.2C8.8,61,6,58,6,54.4V17.6C6,14,8.8,11,12.2,11h18.5c1.7,0,3.3,1,4.1,2.6L38,24h21.8	c3.4,0,6.2,2.4,6.2,6v24.4C66,58,63.2,61,59.8,61z'
//                             ></path>
//                             <path
//                               display='none'
//                               fill='#8AA3FF'
//                               d='M62.1,61H9.9C7.8,61,6,59.2,6,57c0,0,0-31.5,0-42c0-2.2,1.8-4,3.9-4h19.3	c1.6,0,3.2,0.2,3.9,2.3l2.7,6.8c0.5,1.1,1.6,1.9,2.8,1.9h23.5c2.2,0,3.9,1.8,3.9,4v31C66,59.2,64.2,61,62.1,61z'
//                             ></path>
//                             <path
//                               fill='#798BFF'
//                               d='M7.7,59c2.2,2.4,4.7,2,6.3,2h45c1.1,0,3.2,0.1,5.3-2H7.7z'
//                             ></path>
//                           </svg>
//                         </div>
//                         <p>UI Design</p>

//                         <div className='card__close'></div>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className='first__'>
//               <h3>Recent Files</h3>
//               <p className='ff_2'>Folders</p>
//               <div className='folders1'>
//                 {'1234'.split('').map((e, id) => {
//                   return (
//                     <>
//                       <div className='card__2'>
//                         <div className='frdr_1'>
//                           <div className='frdr_2'>
//                             <div className='picture'>
//                               <svg
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 x='0px'
//                                 y='0px'
//                                 viewBox='0 0 72 72'
//                               >
//                                 <path
//                                   fill='#6C87FE'
//                                   d='M57.5,31h-23c-1.4,0-2.5-1.1-2.5-2.5v-10c0-1.4,1.1-2.5,2.5-2.5h23c1.4,0,2.5,1.1,2.5,2.5v10	C60,29.9,58.9,31,57.5,31z'
//                                 ></path>
//                                 <path
//                                   fill='#8AA3FF'
//                                   d='M59.8,61H12.2C8.8,61,6,58,6,54.4V17.6C6,14,8.8,11,12.2,11h18.5c1.7,0,3.3,1,4.1,2.6L38,24h21.8	c3.4,0,6.2,2.4,6.2,6v24.4C66,58,63.2,61,59.8,61z'
//                                 ></path>
//                                 <path
//                                   display='none'
//                                   fill='#8AA3FF'
//                                   d='M62.1,61H9.9C7.8,61,6,59.2,6,57c0,0,0-31.5,0-42c0-2.2,1.8-4,3.9-4h19.3	c1.6,0,3.2,0.2,3.9,2.3l2.7,6.8c0.5,1.1,1.6,1.9,2.8,1.9h23.5c2.2,0,3.9,1.8,3.9,4v31C66,59.2,64.2,61,62.1,61z'
//                                 ></path>
//                                 <path
//                                   fill='#798BFF'
//                                   d='M7.7,59c2.2,2.4,4.7,2,6.3,2h45c1.1,0,3.2,0.1,5.3-2H7.7z'
//                                 ></path>
//                               </svg>
//                             </div>
//                             <p>Projects</p>
//                           </div>

//                           <Dropdown
//                             menu={{
//                               items,
//                             }}
//                             trigger={['click']}
//                             className='dots'
//                           >
//                             <a onClick={(e) => e.preventDefault()}>
//                               <svg
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 width='24'
//                                 height='24'
//                                 viewBox='0 0 24 24'
//                               >
//                                 <path d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
//                               </svg>
//                             </a>
//                           </Dropdown>
//                         </div>

//                         <p className='frdr_3'>Today 4.5 MB 3 Members</p>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>

//               <p className='ff_2'>Files</p>
//               <div className='folders1'>
//                 {'12345667890123456'.split('').map((e, id) => {
//                   return (
//                     <>
//                       <div className='card__2'>
//                         <div className='frdr_1'>
//                           <div className='frdr_2'>
//                             <div className='picture'>
//                               <svg
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 width='24'
//                                 height='24'
//                                 viewBox='0 0 24 24'
//                               >
//                                 <path d='M12.186 14.552c-.617 0-.977.587-.977 1.373 0 .791.371 1.35.983 1.35.617 0 .971-.588.971-1.374 0-.726-.348-1.349-.977-1.349z'></path>
//                                 <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.155 17.454c-.426.354-1.073.521-1.864.521-.475 0-.81-.03-1.038-.06v-3.971a8.16 8.16 0 0 1 1.235-.083c.768 0 1.266.138 1.655.432.42.312.684.81.684 1.522 0 .775-.282 1.309-.672 1.639zm2.99.546c-1.2 0-1.901-.906-1.901-2.058 0-1.211.773-2.116 1.967-2.116 1.241 0 1.919.929 1.919 2.045-.001 1.325-.805 2.129-1.985 2.129zm4.655-.762c.275 0 .581-.061.762-.132l.138.713c-.168.084-.546.174-1.037.174-1.397 0-2.117-.869-2.117-2.021 0-1.379.983-2.146 2.207-2.146.474 0 .833.096.995.18l-.186.726a1.979 1.979 0 0 0-.768-.15c-.726 0-1.29.438-1.29 1.338 0 .809.48 1.318 1.296 1.318zM14 9h-1V4l5 5h-4z'></path>
//                                 <path d='M7.584 14.563c-.203 0-.335.018-.413.036v2.645c.078.018.204.018.317.018.828.006 1.367-.449 1.367-1.415.006-.84-.485-1.284-1.271-1.284z'></path>
//                               </svg>
//                             </div>
//                             <p>Projects</p>
//                           </div>

//                           <Dropdown
//                             menu={{
//                               items,
//                             }}
//                             trigger={['click']}
//                             className='dots'
//                           >
//                             <a onClick={(e) => e.preventDefault()}>
//                               <svg
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 width='24'
//                                 height='24'
//                                 viewBox='0 0 24 24'
//                               >
//                                 <path d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
//                               </svg>
//                             </a>
//                           </Dropdown>
//                         </div>

//                         <p className='frdr_3'>Today 4.5 MB 3 Members</p>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Timeline;

import React from 'react';
import {Outlet} from 'react-router-dom';
import Home from './Home';
import Sidebar from './Sidebar';
import {Layout, Flex} from 'antd';
const {Sider, Content} = Layout;
import './style.scss';

const index = () => {
  return (
    <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
      <Layout style={{height: '100vh', gap: '15px'}}>
        <Sider width='15%' className='sidebar__'>
          <Sidebar />
        </Sider>

        <Layout className='main__'>
          <Content>
            <Home />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default index;
