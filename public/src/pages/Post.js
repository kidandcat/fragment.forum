import React from 'reactn'
import Post from '../components/Post'
import { Typography } from 'antd'

const { Title } = Typography

export default function Profile (props) {
  let posts = []
  for (let i = 0; i < 200; i++) {
    posts.push(<Post key={i} />)
  }
  return (
    <div id='mid-container' style={{ display: 'flex', flexDirection: 'column' }}>
      <span>PostID: {props.location.state.postID}</span>
      <Title>De cuando Jairo me dijo de jugar al Tera</Title>
      {posts}

    </div>)
}
