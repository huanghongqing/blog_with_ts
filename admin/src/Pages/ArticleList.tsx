import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {List,Row,Col,Modal,message,Button} from 'antd'
import 'antd/dist/antd.css'
import servicePath from '../config/ApiUrl'
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'

const {confirm}=Modal //解构赋值

const ArticleList=(props:any)=>{
    const [list,setList]=useState([])
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
                        <Col span={4}>
                            <b>Publish Time</b>
                        </Col>
                        <Col span={4}>
                            <b>View Count</b>
                        </Col>
                        <Col span={4}>
                            <b>Action</b>
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
                                <Col span={4}>
                                    {item.addTime}
                                </Col>
                                <Col span={4}>
                                    {item.view_count}
                                </Col>
                                <Col span={4}>
                                    <Button type="primary">Modify</Button>
                                    <Button type="primary">Delete</Button>
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