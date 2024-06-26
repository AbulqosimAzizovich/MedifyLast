import React from 'react';
import {Modal, Space, Upload} from 'antd';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';

class UploadPicture extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  };

  handleCancel = () => this.setState({previewVisible: false});

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({fileList}) => this.setState({fileList});

  render() {
    const {previewVisible, previewImage, fileList} = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );
    return (
      <Space>
        <Upload
          action='//jsonplaceholder.typicode.com/posts/'
          listType='picture-Space'
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal open={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='example' style={{width: '100%'}} src={previewImage} />
        </Modal>
      </Space>
    );
  }
}

export default UploadPicture;
