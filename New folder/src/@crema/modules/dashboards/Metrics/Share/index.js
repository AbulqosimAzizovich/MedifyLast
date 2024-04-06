import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import AppGrid from '@crema/components/AppGrid';
import {AiFillYoutube, AiOutlineGoogle, AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF, FaVimeoV} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import {GrLinkedinOption} from 'react-icons/gr';
import {ImTumblr} from 'react-icons/im';
import {StyledShareBadge} from './index.styled';

const Share = (props) => {
  const {data} = props;

  const getIconByName = (icon) => {
    switch (icon) {
      case 'facebook':
        return <FaFacebookF />;
      case 'twitter':
        return <AiOutlineTwitter />;
      case 'dribbble':
        return <FiDribbble />;
      case 'vimeo':
        return <FaVimeoV />;
      case 'tumblr':
        return <ImTumblr />;
      case 'youtube':
        return <AiFillYoutube />;
      case 'linkedin':
        return <GrLinkedinOption />;
      case 'google':
        return <AiOutlineGoogle />;
      default:
        return <AiOutlineGoogle />;
    }
  };
  return (
    <AppCard heightFull title='Share'>
      <AppGrid
        data={data}
        itemPadding={5}
        responsive={{
          xs: 4,
          sm: 5,
          md: 5,
          lg: 5,
          xl: 3,
          xxl: 4,
        }}
        renderItem={(data, index) => (
          <StyledShareBadge style={{backgroundColor: data.color}} key={index}>
            {getIconByName(data.icon)}
            <span>{data.value}</span>
          </StyledShareBadge>
        )}
      />
    </AppCard>
  );
};

export default Share;

Share.propTypes = {
  data: PropTypes.array.isRequired,
};
