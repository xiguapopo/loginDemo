
import { Form, Input, Button, Checkbox ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less';
import React, { useState, Fragment } from 'react';
import { connect, history } from 'umi';


const LoginForm = props => {
  const onFinish = values => {
    const {dispatch}=props
    console.log(values)
    if(values.userName=="admin"&&values.password=="admin"){
      message.success("登录成功")
      dispatch({
        type:"user/loginStatus",
        payload:true
      })
      history.push("/index",{data:values})
    }else{
      message.error("登录失败")
      dispatch({
        type:"user/loginStatus",
        payload:true
      })
      history.push("/error")
    }
  };
  const [form] = Form.useForm();

  return (
     <div className={styles.main}>
      <Form
        name="normal_login"
        className="login-form"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="userName"
          validateFirst={true}
          validateTrigger={['onBlur']}
          rules={[
            { required: true, message: '请输入用户名',whitespace:true  },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入用户名"
          />
        </Form.Item>

        <Form.Item
          name="password"
          validateFirst={true}
          validateTrigger={['onBlur']}
          rules={[
            { required: true, message: '请输入密码' ,whitespace:true},
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <span
            style={{ float: 'right', cursor: 'pointer' }}
            href=""
          >
            忘记密码
          </span>
        </Form.Item>

        <Form.Item style={{ marginTop: 20,textAlign:'center'}}>
          <Button type="primary" htmlType="submit" className={styles.loginButton} >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
}))(LoginForm);

