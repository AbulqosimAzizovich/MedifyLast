import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, List} from 'antd';
import {StyledNoticationCell} from './index.styled';

const NotificationCell = ({item}) => {
  return (
    <StyledNoticationCell>
      <List.Item.Meta
        avatar={<Avatar src={item.image} />}
        title={item.type}
        description={
          <p>
            <span> {item.name}</span>
            {item.message}
          </p>
        }
      />
    </StyledNoticationCell>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  item: PropTypes.object.isRequired,
};
