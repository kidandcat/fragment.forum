import React from 'reactn'
import { Form, Input, Button } from 'antd'
import { register } from '../server'
import { MinUsernameLen, MinPasswordLen } from '../utils/Constants'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export default function Register () {
  const onFinish = values => {
    register(values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name='register'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[{ min: MinUsernameLen, required: true, message: 'Please input your nickname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
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
