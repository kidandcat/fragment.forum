import React from 'react'
import ReactDOM from 'react-dom'
import { Typography } from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header'

const { Text } = Typography
function Main () {
  return (
    <div>
      <Header />
      <div className='container'>
        <Text mark>Ant Design</Text>
      </div>
    </div>
  )
}

let App = document.getElementById('app')

ReactDOM.render(<Main />, App)
