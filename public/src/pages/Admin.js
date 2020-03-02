import React, { useState } from 'reactn'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'

let previousKey = ''

function onOpenChange (keys, setOpenKeys) {
  console.log(keys)
  if (keys.length === 0) {
    setOpenKeys(keys)
  } else {
    let previous = keys.indexOf(previousKey)
    if (previous >= 0) {
      keys.splice(previous, 1)
      setOpenKeys(keys)
    } else {
      setOpenKeys(keys)
    }
  }
  previousKey = keys[0]
}

export default function Admin () {
  const [openKeys, setOpenKeys] = useState([])
  return (
    <Menu
      mode='inline'
      openKeys={openKeys}
      onOpenChange={(key) => onOpenChange(key, setOpenKeys)}
      style={{ width: 256 }}
    >
      <SubMenu
        key='admin'
        title={
          <span>
            <MailOutlined />
            <span>Administración</span>
          </span>
        }
      >
        <Menu.Item key='admin-rights'>Permisos</Menu.Item>
        <Menu.Item key='moderators'>Moderadores</Menu.Item>
      </SubMenu>
      <SubMenu
        key='users'
        title={
          <span>
            <AppstoreOutlined />
            <span>Usuarios</span>
          </span>
        }
      >
        <Menu.Item key='moderate'>Moderación</Menu.Item>
        <Menu.Item key='users-rights'>Permisos</Menu.Item>
      </SubMenu>
      <Menu.Item key='web'>
        <span>
          <AppstoreOutlined />
          <span>Web</span>
        </span>
      </Menu.Item>

    </Menu>
  )
}

const { SubMenu } = Menu
