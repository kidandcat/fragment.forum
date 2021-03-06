import React from 'reactn'
import { Col, Card, Row } from 'antd'

function GoToSubforum (forum, subforum, selectForum) {
  // TODO: fill me
  selectForum({ forum: forum, subforum: subforum })
  console.log('Not implemented yet... ' + forum + ' -> ' + subforum)
}

export default function SubforumList (props) {
  // TODO: Get forum name from the parent
  // Get subforums from the backend
  let subforums = [ 'Subforum A', 'Subforum B', 'Subforum C', 'Subforum D', 'Subforum E' ]
  return (
    <Row>
      {
        subforums.map((subforumName) => {
          return (
            <Col key={subforumName} span={12} style={{ cursor: 'pointer' }} onClick={() => GoToSubforum(props.forum, subforumName, props.selectForum)}>
              <Card title={subforumName} bordered>
                        Descripción del foro {subforumName}.
              </Card>
            </Col>)
        })}
    </Row>
  )
}
