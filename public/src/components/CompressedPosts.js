import React from 'reactn'
import { List } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

const listData = []
for (let i = 0; i < 5; i++) {
  listData.push({
    title: 'Ayuda por favor: mi madre es transexual y se ha liado con mi prima',
    content:
      'Haha, vaya puto trol, 0/10. Reportado por gilipollas',
    likes: 8,
    dislikes: 2,
    replies: 200
  })
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
)

export default function CompressedPosts () {
  return (
    <List
      itemLayout='vertical'
      size='large'
      dataSource={listData}
      renderItem={item => (
        <List.Item
          style={{ borderStyle: 'solid', borderWidth: '1px', borderRadius: '2px', padding: '5px' }}
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text={item.likes} key='list-vertical-star-o' />,
            <IconText icon={LikeOutlined} text={item.dislikes} key='list-vertical-like-o' />,
            <IconText icon={MessageOutlined} text={item.replies} key='list-vertical-message' />
          ]}
        >
          <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
          {item.content}
        </List.Item>
      )}
    />
  )
}
