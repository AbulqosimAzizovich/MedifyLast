import React from 'react';
import {
  StyledChatContentScreen,
  StyledChatNoScreen,
  RightChatFlexUser,
  ChatFlexUser,
} from './index.styled';
import PropTypes from 'prop-types';
import {NoUserScreen} from '@crema/modules/apps/Chat';
import MessagesScreen from './ChatViewContainer';
import {Avatar, Divider} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './style.scss';
const ChatContent = ({selectedUser, setSelectedUser}) => {
  return (
    <>
      {selectedUser ? (
        <>
          <ChatFlexUser>
            <StyledChatContentScreen>
              <MessagesScreen
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            </StyledChatContentScreen>
            <RightChatFlexUser>
              <div style={{margin: '0 auto'}}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #ebedf0',
                    paddingBottom: '20px',
                  }}
                >
                  <div style={{marginRight: '20px'}}>
                    <Avatar size={64} icon={<UserOutlined />} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '5px',
                      }}
                    >
                      Name
                    </p>
                    <p style={{fontSize: '16px'}}>SurName</p>
                  </div>
                </div>

                <div style={{marginTop: '20px'}}>
                  <Divider>Personal Information</Divider>
                  <div>
                    <p style={{fontSize: '16px', marginBottom: '10px'}}>
                      Yashash manzili:
                    </p>
                    <p style={{fontSize: '14px', color: '#666'}}>
                      Macabi bla Lorem, ipsum dolor.
                    </p>
                  </div>

                  <div style={{marginTop: '10px'}}>
                    <p style={{fontSize: '16px', marginBottom: '10px'}}>
                      Telefon raqami:
                    </p>
                    <p style={{fontSize: '14px', color: '#666'}}>
                      +998 90 900 90 90
                    </p>
                  </div>

                  <div style={{marginTop: '10px'}}>
                    <p style={{fontSize: '16px', marginBottom: '10px'}}>
                      Asosiy doktori:
                    </p>
                    <p style={{fontSize: '14px', color: '#666'}}>
                      Kimdirov Kimdir Kimdirovich
                    </p>
                  </div>

                  <div style={{marginTop: '10px'}}>
                    <p style={{fontSize: '16px', marginBottom: '10px'}}>
                      Asosiy doktori raqami:
                    </p>
                    <p style={{fontSize: '14px', color: '#666'}}>
                      +998 77 700 70 70
                    </p>
                  </div>
                </div>

                <div style={{marginTop: '20px'}}>
                  <Divider>Files and Folders</Divider>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {'1234567'.split('').map((e, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '4px',
                            backgroundColor: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <i
                            className='bx bxs-file-doc'
                            style={{fontSize: '20px', color: '#fff'}}
                          ></i>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: '16px',
                              fontWeight: 'bold',
                              marginBottom: '5px',
                            }}
                          >
                            Tashxis nomi,Lorem ipsum dolor sit
                          </p>
                          <p style={{fontSize: '14px', color: '#666'}}>
                            Dorilar ro'yxati, Lorem, ipsum.....
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RightChatFlexUser>
          </ChatFlexUser>
        </>
      ) : (
        <StyledChatNoScreen>
          <NoUserScreen />
        </StyledChatNoScreen>
      )}
    </>
  );
};

export default ChatContent;
ChatContent.propTypes = {
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
