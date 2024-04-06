import React from 'react';
import NoUserScreen from './NoUserScreen';
import MessagesScreen from './MessagesScreen';
import {StyledChatContentScreen, StyledChatNoScreen} from './index.styled';
import PropTypes from 'prop-types';

const ChatContent = ({selectedUser, setConnectionData, setSelectedUser}) => {
  return (
    <>
      {selectedUser ? (
        <StyledChatContentScreen>
          <MessagesScreen
            selectedUser={selectedUser}
            setConnectionData={setConnectionData}
            setSelectedUser={setSelectedUser}
          />
        </StyledChatContentScreen>
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
  setConnectionData: PropTypes.func,
  setSelectedUser: PropTypes.func,
};
