import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {List,Row,Col,Modal,message,Button,} from 'antd'
import 'antd/dist/antd.css'
import servicePath from '../config/ApiUrl'
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'
import "../static/css/ArticleList.css"

const ArticleList=(props:any)=>{
    const [list,setList]=useState([])
    const getlist=()=>{
        axios({
            method:"get",url:servicePath.getArticleList,withCredentials:true,
        }).then(
            (res:any)=>{
                setList(res.data.data)
            }
        )
    }
    useEffect(()=>{
        getlist()
    },[]) 
    const deleteArticle=(id:number)=>{
        Modal.confirm({
            title:"delete Blog",
            content:"Sure delete Blog?",
            onOk:()=>{
                axios({
                    method:"get",url:servicePath.deleteArticle+id,withCredentials:true,
                }).then(
                    (res)=>{
                        if(res.data.data=="delete success"){
                            message.success("blog hided.")
                            getlist()
                        }
                    }
                )
            },
            onCancel:()=>{
                return false;
            }
        })
        return false
    }
    return(
        <div>
            <List 
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>Title</b>
                        </Col>
                        <Col span={4}>
                            <b>Type</b>
                        </Col>
                        <Col span={3}>
                            <b>Publish Time</b>
                        </Col>
                        <Col span={3}>
                            <b>View Count</b>
                        </Col>
                        <Col span={3}>
                            <b>Action</b>
                        </Col>
                        <Col span={3}>
                            <b>Delete Status</b>
                        </Col>
                    </Row>
                }
                bordered 
                dataSource={list}
                renderItem={
                    (item:any)=>{
                        return(
                            <List.Item>
                            <Row className="list-div">
                                <Col span={8}>
                                    {item.title}
                                </Col>
                                <Col span={4}>
                                    {item.typeName}
                                </Col>
                                <Col span={3}>
                                    {item.addTime}
                                </Col>
                                <Col span={3}>
                                    {item.view_count}
                                </Col>
                                <Col span={3}>
                                    <Button type="primary">Modify</Button>&nbsp;&nbsp;
                                    <Button onClick={()=>{deleteArticle(item.id)}}>Delete</Button>
                                </Col>
                                <Col span={3} >
                                    {item.delete_flag}
                                </Col>
                            </Row>
                            </List.Item>
                        )
                    }
                }

            />
        </div>
    )
}
export default ArticleList