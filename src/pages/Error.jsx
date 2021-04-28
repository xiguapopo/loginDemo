import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage = () => (
  <Result
    status="error"
    title="登录失败"
    subTitle="用户名或者密码输入不正确"
    extra={
      <Button type="primary" onClick={() => history.push('/login')}>
        返回登录
      </Button>
    }
  />
);

export default NoFoundPage;
