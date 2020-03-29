import React, { useState } from 'reactn'
import { Comment, Tooltip, Avatar } from 'antd'
import moment from 'moment'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons'

function onStateChange (likes, likeState, setLikes, setLikeState) {
  let addition = 0
  if(likeState){
    addition = -1
  } else {
    addition = 1
  }
  setLikes(likes+addition)
  setLikeState(!likeState)
}

export default function Post () {
  // TODO: get if you have liked or disliked the post from backend
  const [likes, setLikes] = useState(0)
  const [likeState, setLikeState] = useState(false)

  const [dislikes, setDislikes] = useState(0)
  const [dislikeState, setDislikeState] = useState(false)

  const actions = [
    <span key='comment-basic-like'>
      <Tooltip title='Like'>
        {React.createElement(likeState ? LikeFilled : LikeOutlined, {
          onClick: ()=>onStateChange(likes, likeState, setLikes, setLikeState)
        })}
      </Tooltip>
      <span className='comment-action'>{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title='Dislike'>
        {React.createElement(dislikeState ? DislikeFilled : DislikeOutlined, {
          onClick: ()=>onStateChange(dislikes, dislikeState, setDislikes, setDislikeState)
        })}
      </Tooltip>
      <span className='comment-action'>{dislikes}</span>
    </span>,
    <span key='comment-basic-reply-to'>Reply to</span>
  ]

  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
          alt='Han Solo'
        />
      }
      content={
        <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully
        and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  )
}
