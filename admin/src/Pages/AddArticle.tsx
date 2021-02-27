import React,{ useState } from 'react'
import 'antd/dist/antd.css'
import {Row,Col,Input,Select,Button,DatePicker} from 'antd'
import '../static/css/Login.css';
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'
import marked from 'marked'
import '../static/css/AddArticle.css'

const {Option} = Select //从select 接口里获取Option对象
const {TextArea} =Input

function AddArticle(){

    return(
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                placeholder="Blog title" 
                                size="large"
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue="1" size="large">
                                <Option value="1">code</Option>
                                <Option value="2">Linux</Option>
                                <Option value="3">warthunder</Option>
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea className="markdown-content" rows={23} placeholder="Blog content"> 
                            </TextArea>
                        </Col>
                        <Col span={12}>
                            <div className="show-html">
                                html content.
                            </div>
                        </Col>                        
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="small">Temporary Save</Button>&nbsp;
                            <Button size="small">Publish Blog</Button>
                            <br /><br />
                        </Col>
                        <Col span={24}>
                            <TextArea
                                rows={9}
                                placeholder="Blog introduce."
                            ></TextArea>
                            <br /><br />
                            <div className="introduce-html">
                                introduce html
                            </div>
                            <br /><br />
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker 
                                    placeholder="Publish Date"
                                    size="large"
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
