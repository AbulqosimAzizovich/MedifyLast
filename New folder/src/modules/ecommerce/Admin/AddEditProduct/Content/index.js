import React from 'react';
import AppCard from '@crema/components/AppCard';
import ImgUpload from './ImageUpload';
import AppScrollbar from '@crema/components/AppScrollbar';
import {StyledDetailTextarea, StyledTextMb} from './index.styled';
import {Form, Col, Input} from 'antd';
import PropTypes from 'prop-types';

const ProductContent = ({uploadedFiles, setUploadedFiles}) => {
  return (
    <Col xs={24} lg={16}>
      <AppScrollbar style={{height: '700px'}}>
        <AppCard>
          <Form.Item label='Product Name' name='title'>
            <Input placeholder='Product Name' />
          </Form.Item>

          <Form.Item label='Description' name='description'>
            <StyledDetailTextarea theme='snow' placeholder='Description here' />
          </Form.Item>
          <StyledTextMb>Images</StyledTextMb>
          <ImgUpload
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </AppCard>
      </AppScrollbar>
    </Col>
  );
};

ProductContent.propTypes = {
  uploadedFiles: PropTypes.array,
  setUploadedFiles: PropTypes.func,
};
export default ProductContent;
