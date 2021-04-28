import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

export default (props) => {
  console.log(props)
  const {data={}}=props.location.state||{}
  return (
    <PageContainer>
      欢迎来到首页,{data.userName}
    </PageContainer>
  );
};
