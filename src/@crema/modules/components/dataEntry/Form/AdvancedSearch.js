import React, {useState} from 'react';
import {Button, Col, Form, Input, Row} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

const AdvancedSearch = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder='placeholder' />
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name='advanced_search'
      className='ant-advanced-search-form'
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{textAlign: 'right'}}>
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
          <Button
            style={{margin: '0 8px'}}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{fontSize: 12}}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default AdvancedSearch;
