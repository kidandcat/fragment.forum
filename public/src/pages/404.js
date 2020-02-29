import React from 'reactn'
import { Result, Button } from 'antd'
import { MenuEnum } from '../utils/Constants'
export default function P404 () {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <div>
          <Button type='primary' href={MenuEnum.home}>
                Back Home
          </Button>
        </div>
      }
    />
  )
}
