import React from 'react';

import {HiUser} from 'react-icons/hi';
import {AiFillLock} from 'react-icons/ai';
import {FaBandcamp, FaNetworkWired} from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io';
import IntlMessages from '@crema/helpers/IntlMessages';
import {BellOutlined} from '@ant-design/icons';
import {
  StyledUserProfileContainer,
  StyledUserProfileTabs,
} from './index.styled';
import AppAnimate from '@crema/components/AppAnimate';
import {accountData} from '@crema/mockapi/fakedb';
import {
  ChangePassword,
  Information,
  PersonalInfo,
  SocialLink,
  Notification,
} from '@crema/modules/profile/UserProfile';

const items = [
  {
    label: (
      <span className='user-profile-icon'>
        <HiUser className='icon' />
        <span>
          <IntlMessages id='userProfile.personalInfo' />
        </span>
      </span>
    ),
    key: '01',
    children: <PersonalInfo />,
  }, // remember to pass the key prop
  {
    label: (
      <span className='user-profile-icon'>
        <AiFillLock className='icon' />
        <span>
          <IntlMessages id='userProfile.changePassword' />
        </span>
      </span>
    ),
    key: '02',
    children: <ChangePassword />,
  },
  {
    label: (
      <span className='user-profile-icon'>
        <FaBandcamp className='icon' />
        <span>
          <IntlMessages id='userProfile.information' />
        </span>
      </span>
    ),
    key: '03',
    children: <Information />,
  },
  {
    label: (
      <span className='user-profile-icon'>
        <FaNetworkWired className='icon' />
        <span>
          <IntlMessages id='userProfile.social' />
        </span>
      </span>
    ),
    key: '04',
    children: <SocialLink socialLink={accountData.member} />,
  },
  {
    label: (
      <span className='user-profile-icon'>
        <IoMdNotifications className='icon' />
        <span>
          <IntlMessages id='userProfile.notification' />
        </span>
      </span>
    ),
    key: '05',
    children: <Notification notification={accountData.notification} />,
  },
];

const UserProfile = () => {
  return (
    <StyledUserProfileContainer>
      {/* <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserProfileTabs
          key='1'
          defaultActiveKey='01'
          tabPosition='left'
          items={items}
        />
      </AppAnimate> */}
      <div style={{padding: '10px 10px 40px 10px'}}>
        <h2
          style={{
            fontSize: '28px',
            fontFamily: 'sans-serif',
            fontWeight: '600',
            marginBottom: '40px',
          }}
        >
          Полное информация об Администраторе клиники Akfa Medline{' '}
        </h2>
        <PersonalInfo />
      </div>

      <div
        style={{
          width: '100%',
          padding: '10px',
          display: 'flex',
          alignItems: 'start',
          gap: '240px',
          borderBottom: '1px solid grey',
          paddingBottom: '40px',
        }}
      >
        <div style={{width: '20%'}}>
          <h2
            style={{
              fontFamily: 'sans-serif',
              fontWeight: '600',
              marginBottom: '40px',
              color: 'grey',
            }}
          >
            Информация Администратора
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  flexDirection: 'column',
                }}
              >
                <p>Имя</p>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Sunatilla
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  flexDirection: 'column',
                }}
              >
                <p>Фамилия</p>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Zokirjonov
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  flexDirection: 'column',
                }}
              >
                <p>Телефон</p>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                  }}
                >
                  +998 90 990 40 44
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  flexDirection: 'column',
                }}
              >
                <p>Дата рождение</p>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                  }}
                >
                  07.10.2003
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{width: '20%'}}>
          <h2
            style={{
              fontFamily: 'sans-serif',
              fontWeight: '600',
              marginBottom: '40px',
              color: 'grey',
            }}
          >
            Режим дня
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                    padding: '2px 4px',
                    border: '1px solid #00000039',
                    borderRadius: '5px',
                    width: '160px',
                  }}
                >
                  Понедельник
                </span>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                    padding: '2px 4px',
                    border: '1px solid #00000039',
                    borderRadius: '5px',
                    width: '160px',
                  }}
                >
                  Среда
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          padding: '10px',
          display: 'flex',
          alignItems: 'start',
          gap: '240px',
          borderBottom: '1px solid grey',
          paddingBottom: '40px',
        }}
      >
        <div style={{padding: '10px 10px 40px 10px'}}>
          <h2
            style={{
              fontFamily: 'sans-serif',
              fontWeight: '600',
              marginBottom: '40px',
              color: 'grey',
            }}
          >
            Социальная связь
          </h2>
          <Notification notification={accountData.notification} />
        </div>

        <div style={{width: '20%'}}>
          <h2
            style={{
              fontFamily: 'sans-serif',
              fontWeight: '600',
              marginBottom: '40px',
              color: 'grey',
            }}
          >
            Время обеда
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <BellOutlined style={{fontSize: '24px'}} />
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'sans-serif',
                padding: '2px 4px',
                border: '1px solid #00000039',
                borderRadius: '5px',
                width: '160px',
              }}
            >
              10:30
            </span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'sans-serif',
                padding: '2px 4px',
                border: '1px solid #00000039',
                borderRadius: '5px',
                width: '160px',
              }}
            >
              12:30
            </span>
          </div>
        </div>
      </div>
    </StyledUserProfileContainer>
  );
};

export default UserProfile;
