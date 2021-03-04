// eslint-disable-next-line
import React,{ useState,useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../static/css/adminIndex.css'
import {Route, Switch} from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminIndex =(props:any)=> {
    const [collapsed,setCollapsed]=useState(false)

    const onCollapse = (collapsed:boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
            onClick={
              (e)=>{
                 if(e.key=='addArticle'){
                    props.history.push('/index/add/');
                 }else if(e.key=='ArticleList'){
                    props.history.push('/index/list/')
                 }
              }
            }
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              workbench
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Add Blog
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Blog Manage">
              <Menu.Item key="addArticle">Add Blog</Menu.Item>
              <Menu.Item key="ArticleList">Blog List</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Comment Manage
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Blog Console</Breadcrumb.Item>
              <Breadcrumb.Item>WorkBench</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>

                    <Route path="/index/" exact component={AddArticle} /> 
                    {/* 和当前页面的路由一样，表示进入该页就加载这个路由。而且这里必须加exact 用于精确匹配保证默认页面是addArticle */}
                    <Route path="/index/add"   component={AddArticle} />
                    <Route path="/index/list"   component={ArticleList} />
                    {/* 嵌套路由的重点在于，嵌套路由，不能在父级加 exact(精准匹配)，因为先要匹配 父级 然后才能匹配 子集
                      比如：/nested/a ， 会先匹配父级 /nested 后才能匹配 /nested/a */}
              </div>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Akin Huang .React,typescript</Footer>
        </Layout>
      </Layout>
    );

}

export default AdminIndex