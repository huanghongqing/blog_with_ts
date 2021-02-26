import React,{ useState,useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button,Row,Col,List,Breadcrumb} from 'antd'
import Header from '../component/Header'
import {CalendarOutlined,FolderOutlined,FireFilled} from '@ant-design/icons'
import Item from 'antd/lib/list/Item'
import Author from "../component/Author"
import Advert from '../component/Advert'
import Footer from '../component/Footer'
import servicePath from '../config/apiUrl'
import axios from 'axios'
import Link from 'next/link'

interface IListData {
  id:number;
  title:string;
  introduce:string;
  content:string;
  addTime:Date;
  view_count:number;
  typeName:string;
}
var typeName=""
const BlogList =(list:any)=>{
  let li:IListData[]=list.data
  const [mylist,setMylist]=  useState(li)
  useEffect(
    ()=>{
      setMylist(li)
    }
  )
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Row className="comm-main"  justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home </a></Breadcrumb.Item>
                <Breadcrumb.Item>{typeName}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List 
              header={<div>Latest Blog</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item:IListData)=>(
                <List.Item>
                  <div className="list_title">
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                    
                  </div>
                  <div className="list_icon">
                        <span><CalendarOutlined />{item.addTime}  </span>
                        <span><FolderOutlined />{item.typeName}  </span>
                        <span><FireFilled />{item.view_count}  </span>
                  </div>
                  <div className="list_context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
      </Row>
      <Row className="comm-main"  justify="center">
        <Footer />
      </Row>
    </>
  )
}
BlogList.getInitialProps=async (context:any)=>{
  let id=context.query.id
  typeName=context.query.typeName
  const promise= new Promise((resolve,reject)=>{
          axios(servicePath.getListById+id).then(
            (res)=>{
              resolve(res.data)
            }
          ).catch(
            (error)=>{
                console.log("axios access error="+error)
                reject(error)
            }
          )
  }) 
  return await promise
}
export default BlogList