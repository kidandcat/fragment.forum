import React, { useState } from 'reactn'
import { Row, Typography, Col } from 'antd'
import SubforumList from '../components/SubforumList'
const { Title } = Typography

export default function ForumList () {
  // Get forums
  var forums = ['General', 'Videojuegos', 'Programación', 'Miscelanea']

  const [forumSelected, selectForum] = useState(false)
  if (forumSelected) {
    return <div>{forumSelected.forum + '->' + forumSelected.subforum}</div>
  } else {
    return (
      <React.Fragment>
        {
          forums.map((key) => {
            return (
              <div key={key}>
                <div>
                  <Title>{key}</Title>
                </div>
                <div>
                  <SubforumList forum={key} selectForum={selectForum} />
                </div>
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }
}
