import React,{ useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import {Row,Col,Input,Select,Button,DatePicker, message} from 'antd'
import '../static/css/Login.css';
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'
import marked from 'marked'
import '../static/css/AddArticle.css'
import servicePath from '../config/ApiUrl'
import axios from 'axios';

const {Option} = Select //从select 接口里获取Option对象
const {TextArea} =Input

interface ITypeInfo{
    id:number;
    typeName:string;
    orderNum:number;
    icon:string;
}
interface IArticle {
    id:number;
    title:string;
    introduce:string;
    addTime:number;
    view_count:number;
    article_content:string;
    type_id:number;
  }

function AddArticle(props:any){
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState('')            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState('')   //发布日期
    const [updateDate,setUpdateDate] = useState('') //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState(-1) //选择的文章类别
    const renderer=new marked.Renderer()
    useEffect(
        ()=>{
            getTypeInfo()
        },[]
    )
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        breaks: false,
        smartLists: true,
        smartypants: false,
      }); 
      const changeContent = (e:any)=>{
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
        setMarkdownContent(html)
      }
 
      const changeIntroduce = (e:any)=>{
         setIntroducemd(e.target.value)
         let html=marked(e.target.value)
         setIntroducehtml(html)
      }
      const getTypeInfo=()=>{
         axios({
             method:"get",url:servicePath.getTypeInfo,
             withCredentials:true,//这里不加这个为true，路由守卫里会取不到值，因为不上传cookie，cookie上传后才有openId到路由守卫中
         }).then(
             (res)=>{
                 if(res.data.data=='No Login'){
                     localStorage.removeItem('openId')
                     props.history.push("/login")
                 }else{
                     setTypeInfo(res.data.data)
                 }
             }
         )
      }
      const selectTypeHandler=(value:any)=>{
          setSelectType(value)
      }
      const saveArticle=()=>{
          if(!selectedType||selectedType==-1){
              message.error('type is invalid.')
              return false
          }
          if(!articleTitle){
              message.error('title null')
              return false
          }
          if(!articleContent){
            message.error('content null')
            return false
          }
          if(!introducemd){
            message.error('introduce null')
            return false
          }
          if(!showDate){
            message.error('showdate null')
            return false
          }
          let datetext:string=showDate.replace('-','/')
          let view_count=0

          var dataProps:IArticle={
            id:0,
            title:'',
            introduce:'',
            addTime:0,
            view_count:0,
            article_content:'',
            type_id:0,
          }
        //   ={
        //       type_id:selectedType,title:articleTitle,article_content:articleContent,introduce:introducemd,
        //       addtime:(new Date(datetext).getTime())/1000,view_count:view_count
        //   }
          if(articleId==0){
              dataProps.type_id=selectedType
              dataProps.title=articleTitle
              dataProps.article_content=articleContent
              dataProps.introduce=introducemd
              dataProps.addTime=(new Date(datetext).getTime())/1000
              dataProps.view_count=view_count
              axios({
                  method:"post",url:servicePath.addArticle,data:dataProps,withCredentials:true,
              }).then(
                  (res)=>{
                      if(res.data.isSuccess){
                          console.log(res.data.insertId)
                          setArticleId(res.data.insertId)
                          message.success('article saved...id='+res.data.insertId)
                      }else{
                          message.error('save failed.')
                      }
                  }
              )
          }else{
            dataProps.id=articleId
            dataProps.type_id=selectedType
            dataProps.title=articleTitle
            dataProps.article_content=articleContent
            dataProps.introduce=introducemd
            dataProps.addTime=(new Date(datetext).getTime())/1000
            dataProps.view_count=view_count  
            axios({
                method:"post",url:servicePath.updateArticle,data:dataProps,withCredentials:true,
            }).then(
                (res)=>{
                    if(res.data.isSuccess){
                        message.success('article updated...')
                    }else{
                        message.error('updated failed.')
                    }
                }
            )
          }
      }
    return(
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                value={articleTitle}
                                placeholder="Blog title" 
                                size="large"
                                onChange={
                                    (e)=>{
                                        setArticleTitle(e.target.value)
                                    }
                                }
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                                <Option key={-1} value={-1}>select Type.</Option>
                                {
                                       typeInfo.map(
                                           (item:ITypeInfo,index)=>{
                                               return(
                                                <Option key={index} value={item.id}>{item.typeName}</Option>
                                               )
                                           }
                                       )     
                                }
                                {/* <Option value="1">code</Option>
                                <Option value="2">Linux</Option>
                                <Option value="3">warthunder</Option> */}
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea className="markdown-content" rows={23} placeholder="Blog content" 
                                onChange={changeContent} 
                            > 
                            </TextArea>
                        </Col>
                        <Col span={12}>
                            <div className="show-html" dangerouslySetInnerHTML = {{__html:markdownContent}}>
                            </div>
                        </Col>                        
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="small">Temporary Save</Button>&nbsp;
                            <Button size="small"
                                onClick={
                                    (e)=>{
                                        saveArticle()   
                                    }
                                }
                            >
                                Publish Blog
                            </Button>
                            <br /><br />
                        </Col>
                        <Col span={24}>
                            <TextArea
                                rows={9}
                                placeholder="Blog introduce."
                                onChange={changeIntroduce}
                            ></TextArea>
                            <br /><br />
                            <div className="introduce-html" dangerouslySetInnerHTML = {{__html:'introduce:'+introducehtml}} >
                            </div>
                            <br /><br />
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker 
                                    placeholder="Publish Date"
                                    size="large"
                                    onChange={
                                        (date,datestring)=>{
                                            setShowDate(datestring)
                                        }
                                    }
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle
