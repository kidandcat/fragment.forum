import React from 'reactn'
import { Table } from 'antd'
import { Redirect } from 'react-router-dom'
import { MenuPathEnum } from '../utils/Constants'
import { useState } from 'react'

const columns = [
  {
    title: 'Post',
    dataIndex: 'post',
    render: text => <a>{text}</a>
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
    width: 150,
    render: text => <a>{text}</a>
  },
  {
    title: 'Last Reply',
    dataIndex: 'lastReply',
    width: 150,
    render: text => <a>{text}</a>
  },
  {
    title: 'Replies',
    dataIndex: 'replies',
    width: 50
  }
]

let data = [
]

for (let i = 0; i < 200; i++) {
  data.push({
    key: i,
    post: 'Como ce mete internet en un disket',
    creator: 'Jairo',
    lastReply: 'Ridote',
    replies: 45
  })
}

function onChange (pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}

export default function SubforumPosts (props) {
  let [onElementSelected, selectElement] = useState({
    selected: false
  })

  return (
    <React.Fragment>
      {onElementSelected.selected &&
        <Redirect
          to={{
            pathname: MenuPathEnum.post,
            state: { postID: onElementSelected.postID } // <- Al otro lado se accederá a this.props.location.state
          }}
        />}
      <Table
        rowClassName='pointered-element'
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { selectElement({ selected: true, postID: record.key }) }, // click row
            onDoubleClick: event => {}, // double click row
            onContextMenu: event => {}, // right button click row
            onMouseEnter: event => {}, // mouse enter row
            onMouseLeave: event => {} // mouse leave row
          }
        }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{
          pageSize: props.paginationSize
        }}
      />
    </React.Fragment>
  )
}
