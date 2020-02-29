import React from 'reactn'
import { Menu, Layout } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { MenuEnum } from '../utils/Constants'
import { useHistory, useLocation } from 'react-router-dom'

const { Header } = Layout

export default function MyHeader () {
  const history = useHistory()
  const key = useLocation().pathname
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} id='header'>
      <div className='logo' />
      <Menu onClick={(e) => { history.push(e.key) }}
        selectedKeys={key}
        mode='horizontal'
        theme='dark'
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key={MenuEnum.home}>
          <HomeOutlined />
            Home
        </Menu.Item>
        <Menu.Item key={MenuEnum.profile}>
          <UserOutlined />
            Profile
        </Menu.Item>
      </Menu>
    </Header>
  )
}
