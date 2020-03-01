import React from 'reactn'
import Login from '../components/Login'
import Register from '../components/Register'

import { Tabs, Row, Col } from 'antd'
const { TabPane } = Tabs

function callback (tab) {
  console.log(tab)
}

export default function LoginRegister () {
  return (
    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Col span={12} style={{
        padding: '15px',
        marginTop: '150px',
        backgroundColor: 'white',
        borderStyle: 'groove',
        borderRadius: '15px'
      }}>
        <Tabs defaultActiveKey='1' onChange={callback} >
          <TabPane tab='Login' key='login'>
            <Login />
          </TabPane>
          <TabPane tab='Register' key='register'>
            <Register />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}
