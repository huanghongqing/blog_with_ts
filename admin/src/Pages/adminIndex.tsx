import React,{ useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../static/css/adminIndex.css'
import {Route} from 'react-router-dom'
import AddArticle1 from './AddArticle'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminIndex =()=> {
    const [collapsed,setCollapsed]=useState(false)

    const onCollapse = (collapsed:boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              workbench
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Add Blog
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Blog Manage">
              <Menu.Item key="3">Add Blog</Menu.Item>
              <Menu.Item key="4">Blog List</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Comment Manage
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Blog Console</Breadcrumb.Item>
              <Breadcrumb.Item>WorkBench</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>
                    <Route path="/" exact component={AddArticle1} />
              </div>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Akin Huang .React,typescript</Footer>
        </Layout>
      </Layout>
    );

}

export default AdminIndex