import React from 'reactn'
import NewsMiniature from './NewsMiniature'

export default function RightSider () {
  let news = []
  for(let i=0; i<15;i++){
    news.push(<NewsMiniature key={i}></NewsMiniature>)
  }
  return (
    <div className='sider-container'>
      {news}
    </div>
    )
}
