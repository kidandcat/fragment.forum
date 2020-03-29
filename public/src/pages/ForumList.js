import React, { useState } from 'reactn'
import { Typography, InputNumber } from 'antd'
import SubforumList from '../components/SubforumList'
import SubforumPosts from '../components/SubforumPosts'

const { Title } = Typography

export default function ForumList () {
  // Get forums
  var forums = ['General', 'Videojuegos', 'Programación', 'Miscelanea']
  const [forumSelected, selectForum] = useState(false)
  const [paginationSize, selectPagination] = useState(15)
  if (forumSelected) {
    return (
      <div id='mid-container'>
        {
          // forumSelected.forum + '->' + forumSelected.subforum
        }
        <div>
          <InputNumber min={5} max={20} defaultValue={paginationSize} onChange={(newValue) => { selectPagination(newValue) }} />
        </div>
        <SubforumPosts paginationSize={paginationSize} />
      </div>
    )
  } else {
    return (
      <div id='mid-container'>
        <div id='forum-list'>
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
        </div>
      </div>
    )
  }
}
