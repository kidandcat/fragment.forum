import React from 'reactn'
import { Row, Typography, Col } from 'antd'
import SubforumList from '../components/SubforumList'
const { Title } = Typography

export default function ForumList () {
  // Get forums
  var forums = ['General', 'Videojuegos', 'Programación', 'Miscelanea']
  return (
    forums.map((key) => {
      return (
        <Row id='main-container' key={key}>
          <Col span={24}>
            <Title>{key}</Title>
          </Col>
          <Col span={24}>
            <SubforumList forum={key} />
          </Col>
        </Row>
      )
    })
  )
}
