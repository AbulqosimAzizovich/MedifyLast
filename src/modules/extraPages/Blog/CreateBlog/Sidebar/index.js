import React from 'react';
import {Button, Col, Form, Input, Select, Space, Switch} from 'antd';
import AppCard from '@crema/components/AppCard';
import {StyledFormWrapper} from '../index.styled';
import PropTypes from 'prop-types';

const {TextArea} = Input;
const TagList = [
  {
    value: 1,
    label: 'Fashion',
  },
  {
    value: 2,
    label: 'Hotel',
  },
  {
    value: 3,
    label: 'Event',
  },
];
const BlogSidebar = ({selectedTags, setSelectedTags}) => {
  return (
    <Col xs={24} lg={8}>
      <AppCard title='Blog Details'>
        <StyledFormWrapper>
          <Form.Item name='publish' valuePropName='checked'>
            <span className='mr-10'>Publish</span> <Switch />
          </Form.Item>
          <Form.Item name='showComments' valuePropName='checked'>
            <span className='mr-10'>Comments</span>
            <Switch />
          </Form.Item>

          <Select
            mode='multiple'
            allowClear
            placeholder='Tags'
            value={selectedTags}
            onChange={(value) => setSelectedTags(value)}
            options={TagList}
          />

          <Form.Item label='Meta Title' name='metatitle'>
            <Input placeholder='Meta Title' />
          </Form.Item>
          <Form.Item label='Meta Description' name='metadesc'>
            <TextArea rows={4} placeholder='Meta Description' />
          </Form.Item>

          <Form.Item label='Meta Keywords' name='keywords'>
            <Input placeholder='Meta Keywords' />
          </Form.Item>
        </StyledFormWrapper>
      </AppCard>

      <Space
        style={{display: 'flex', justifyContent: 'flex-end', marginTop: 16}}
      >
        <Button
          style={{
            display: 'block',
            minWidth: 100,
          }}
          type='primary'
          htmlType='submit'
        >
          Publish
        </Button>
      </Space>
    </Col>
  );
};

export default BlogSidebar;

BlogSidebar.propTypes = {
  selectedTags: PropTypes.array,
  setSelectedTags: PropTypes.func,
};
