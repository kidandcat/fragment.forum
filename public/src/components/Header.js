import React from 'reactn'
import { Menu, Layout, Row, Col } from 'antd'
import { MenuPathEnum, MenuIconEnum, MenuNameEnum } from '../utils/Constants'
import { useHistory, useLocation } from 'react-router-dom'
import { FirstUppercase } from '../utils/Utilities'

const { Header } = Layout

export default function MyHeader () {
  const history = useHistory()
  const key = useLocation().pathname
  return (
    <Header id='header'>
      <Row>
        <Col flex={1} />
        <Col flex={4}>
          <div className='logo' />
          <Menu onClick={(e) => { history.push(e.key) }}
            selectedKeys={key}
            mode='horizontal'
            theme='dark'
            style={{ lineHeight: '64px' }}
          >
            {
              Object.keys(MenuNameEnum).map((keyName) => {
                var MenuName = MenuNameEnum[keyName]
                var MenuIcon = MenuIconEnum[keyName]
                var MenuPath = MenuPathEnum[keyName]
                var styles = MenuName === MenuNameEnum.profile ? { float: 'right' } : {}
                return (
                  <Menu.Item key={MenuPath} style={styles}>
                    <MenuIcon />
                    {FirstUppercase(MenuName)}
                  </Menu.Item>
                )
              }
              )
            }
          </Menu>
        </Col>
        <Col flex={1} />

      </Row>

    </Header>
  )
}
