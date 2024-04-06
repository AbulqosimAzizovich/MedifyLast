import React from 'react';
import PropTypes from 'prop-types';
import {AiFillHeart} from 'react-icons/ai';
import Tag from '../../BlogContent/Tag';
import BlogPost from './BlogPost';
import Social from './Social';
import renderHTML from 'react-render-html';
import {
  StyledBlogPostWrapper,
  StyledCard,
  StyledFlexWrapper,
  StyledIconWrapper,
} from './index.styled';
import {StyledFlex} from '../index.styled';

const BlogDetailContent = ({blogDetailContent}) => {
  return (
    <StyledCard
      cover={<img src={blogDetailContent.cardMedia} alt='Blog Details' />}
    >
      <p style={{marginBottom: 28}}>{blogDetailContent.description}</p>
      <div> {renderHTML(blogDetailContent.content)}</div>
      <StyledFlex>
        <div style={{marginBottom: 8}}>
          <Tag tag={blogDetailContent.tag} />
        </div>

        <StyledIconWrapper>
          <AiFillHeart /> {blogDetailContent.likeCount} Likes
        </StyledIconWrapper>
      </StyledFlex>

      <StyledBlogPostWrapper>
        <BlogPost post={blogDetailContent.post} />
      </StyledBlogPostWrapper>

      <StyledFlexWrapper>
        <Social />
      </StyledFlexWrapper>
    </StyledCard>
  );
};

export default BlogDetailContent;

BlogDetailContent.propTypes = {
  blogDetailContent: PropTypes.object,
};
