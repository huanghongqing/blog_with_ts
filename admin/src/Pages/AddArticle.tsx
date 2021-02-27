import React,{ useState } from 'react'
import 'antd/dist/antd.css'
import {Row,Col,Input,Select,Button,DatePicker} from 'antd'
import '../static/css/Login.css';
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'
import marked from 'marked'
import '../static/css/AddArticle.css'

const {Option} = Select //从select 接口里获取Option对象
const {TextArea} =Input

function AddArticle1(){
    return(
        <div> add Article</div>
    )
}

export default AddArticle1
