import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col ,Breadcrumb,Anchor,Affix } from 'antd'

import Header from '../component/Header'
import Author from '../component/Author'
import Advert from '../component/Advert'
import Footer from '../component/Footer'
import style from '../styles/detailed.module.css'
import {CalendarOutlined,FolderOutlined,FireFilled} from '@ant-design/icons'
import marked from "marked"
import hljs from "highlight.js"
import Tocify from "../component/tocify"
import axios from 'axios'
import servicePath from '../config/apiUrl'

let markdown=''
interface IListData {
  id:number;
  title:string;
  introduce:string;
  content:string;
  addTime:Date;
  view_count:number;
  typeName:string;
  typeId:number;
}

const Detailed = (article:IListData) => {
  console.log(article.addTime)
  const renderer=new marked.Renderer()
  const tocify=new Tocify()
  renderer.heading=function(text,level,raw){
    const anchor=tocify.add(text,level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions({
    renderer:renderer,
    gfm:true, //github 风格？
    //容错
    pedantic: false,
    //是否忽略html标签
    sanitize: false,
    breaks: false,
    smartLists: true,
    highlight: function(code){
      return hljs.highlightAuto(code).value
    }
  })
  let html=marked(article.content)

  return(
    <>
      <Head>
        <title>Blog Detail.</title>
      </Head>
      <Header />
      <Row className="comm-main" justify="center">
         <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
           <div>
                <div className="bread-div">
                  <Breadcrumb>
                    <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/list?{article.typeId}">{article.typeName}</a></Breadcrumb.Item>
                    <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
                  </Breadcrumb>
                </div>

                <div>
                    <div className={style.detailed_title}>
                    {article.title}
                    </div>

                    <div className={`${style.center} list-icon`}>
                        <span><CalendarOutlined />{article.addTime} </span>
                        <span><FolderOutlined />{article.typeName}   </span>
                        <span><FireFilled />{article.view_count}  </span>
                    </div>

                    <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}>
                      {/* Detail....Content. */}
                    </div>

                </div>
            </div>
         </Col>
         <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
            <Affix offsetTop={5}>
            <div className={`${style.detailed_nav} comm-box`}>
              <div className={style.nav_title}>文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>

            </div>
          </Affix>
         </Col>
      </Row>
      <Row><Footer /></Row>
    </>
  )
}
Detailed.getInitialProps =async (context:any)=>{
  let id = context.query.id;
  const promise=new Promise((resolve,reject)=>{
       axios.get(servicePath.getArticleById+id).then(
         (res)=>{
            resolve(res.data.data[0])
         }
       )
    }
  )
  return await promise
}
export default Detailed