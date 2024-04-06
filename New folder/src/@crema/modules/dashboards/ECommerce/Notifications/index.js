import React from 'react';
import AppCard from '@crema/components/AppCard';
import NotificationCell from './NotificationCell';
import {List} from 'antd';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppMenu from '@crema/components/AppMenu';
import {StyledNotificationScrollbar} from './index.styled';

const NotificationsEcom = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.notifications']}
      extra={<AppMenu />}
    >
      <StyledNotificationScrollbar>
        <List
          itemLayout='horizontal'
          dataSource={props.notifications}
          renderItem={(item) => <NotificationCell key={item.id} item={item} />}
        />
      </StyledNotificationScrollbar>
    </AppCard>
  );
};

export default NotificationsEcom;

NotificationsEcom.propTypes = {
  notifications: PropTypes.array,
};
