import React from 'reactn'
import CompressedPosts from '../components/CompressedPosts'
import { Avatar, Upload, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Signatures from '../components/Signatures'

const UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange (info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}

export default function Profile () {
  return (
    <div id='mid-container' style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
        <Upload {...UploadProps}>
          <Avatar shape='square' size={96} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
        </Upload>
        <div style={{ fontSize: '64px', marginLeft: '24px' }}>Rido</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignSelf: 'flex-start' }}>
          <div style={{ alignSelf: 'flex-end', fontSize: '24px', color: 'red' }} >
            Karma: 5
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <span style={{ fontSize: '24px' }}>Últimos mensajes</span>
        <CompressedPosts />
      </div>
      <div style={{ marginTop: '15px' }} >
        <span style={{ fontSize: '24px' }}>Firmas</span>
        <Signatures />
      </div>
    </div>)
}
