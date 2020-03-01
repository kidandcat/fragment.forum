import React from 'reactn'
import { Form, Input, Button } from 'antd'
import { loggin } from '../server'
import { MinPasswordLen } from '../utils/Constants'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export default function Login () {
  const onFinish = values => {
    loggin(values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name='login'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[{ min: 4 /* Rido funcionará, jajá! */, required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ min: MinPasswordLen, required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      {
        /*
      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      */
      }

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};
