import React from 'reactn'
import { Result, Button } from 'antd'
import { MenuPathEnum } from '../utils/Constants'
export default function P404 () {
  return (
    <Result
      id='mid-container'
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <div>
          <Button type='primary' href={MenuPathEnum.home}>
                Back Home
          </Button>
        </div>
      }
    />
  )
}
