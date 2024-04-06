import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';

import {HeartFilled, MessageOutlined} from '@ant-design/icons';
import {
  StyledSocialData,
  StyledSocialDataCard,
  StyledSocialDataItem,
  StyledSocialDataLike,
} from './index.styled';

const SocialDataCard = ({data}) => {
  return (
    <StyledSocialDataCard heightFull>
      <StyledSocialData>
        <StyledSocialDataLike>
          <HeartFilled />
          <h3>{data.likes}</h3>
          <p className='text-truncate'>
            <IntlMessages id='common.likes' />
          </p>
        </StyledSocialDataLike>

        <StyledSocialDataItem>
          <MessageOutlined />
          <h3>{data.comments}</h3>
          <p className='text-truncate'>
            <IntlMessages id='common.comments' />
          </p>
        </StyledSocialDataItem>
      </StyledSocialData>
    </StyledSocialDataCard>
  );
};

export default SocialDataCard;

SocialDataCard.defaultProps = {};

SocialDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};
