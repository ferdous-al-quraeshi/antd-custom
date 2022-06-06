import React, { useState } from 'react';

import logo from './logo-sneat.png'
import '/node_modules/antd/dist/antd.css';
import './App.css';

import { Layout, Menu } from 'antd';
import {
  LeftCircleFilled,
  RightCircleFilled,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {React.createElement(collapsed ? RightCircleFilled : LeftCircleFilled, {
          className: 'trigger',
          style: {fontSize: 24, color: '#696cff'},
          onClick: () => setCollapsed(!collapsed),
        })}
        <div className="logo">
          {collapsed
            ? <img src={logo} alt="logo" height={24} width='auto' />
            : <><img src={logo} alt="logo" height={24} width='auto' />            
              <span>xpense</span></>
          }
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ margin: 15 }}>
          
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
