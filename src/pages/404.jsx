import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="哦豁~ 页面不存在"
    extra={
      <Button type="primary" onClick={() => history.push('/index')}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;
