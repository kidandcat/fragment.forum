import React from 'reactn'
import CompressedPosts from '../components/CompressedPosts'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function Profile () {
  return (
    <div id='mid-container' style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
        <Avatar shape='square' size={96} icon={<UserOutlined />} />
        <div style={{ fontSize: '64px', marginLeft: '24px' }}>Rido</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignSelf: 'flex-start' }}>
          <div style={{ alignSelf: 'flex-end', fontSize: '14px' }} >
            Karma: 5
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <span style={{ fontSize: '24px' }}>Últimos mensajes</span>
        <CompressedPosts />
      </div>
    </div>)
}
