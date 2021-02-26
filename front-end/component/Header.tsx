import React ,{ useState,useEffect } from 'react'
import style from './Header.module.css'
import {Row,Col, Menu,Button} from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import {HomeOutlined} from '@ant-design/icons'
interface IType{
    id:number;
    typeName:string;
    orderNum:number;
    icon:string;
}

const Header =()=>{
    const [navArray,setNavArray]=useState([])
    useEffect(
        ()=>{
            const fetchData= async ()=>{
                const result=await axios(servicePath.getTypeInfo).then(
                    (res)=>{
                        return res.data.data
                    }
                )
                setNavArray(result)
            }
            fetchData()

        },
        []//传入空数组，只有第一次执行
    )
    const handleClick=(e:any)=>{
        if(e.key==0){
            Router.push('/')
        }
        else{
            Router.push('/list?id='+e.key)
        }
    }
    
    return(
        <div className={style.header}>
            <Row justify="center" wrap={false} >
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">Akin </span>
                    <span className="header-txt">-Blog for me.</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu  mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <HomeOutlined />Home
                        </Menu.Item>
                        {
                            navArray.map(
                                (item:IType)=>{
                                    let iconType=item.icon;
                                    let Icon1=require('@ant-design/icons')[iconType] //动态加载antd图标
                                    return (
                                        <Menu.Item key={`${item.id}&typeName=${item.typeName}`}>
                                            <Icon1 />{item.typeName}
                                        </Menu.Item>
                                    )
                                }
                            )
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header

   // const Tag="HomeOutlined"
    // const Var1=`${Tag}`  变量名要大写，这样动态解析。
    // <Var1 />Home