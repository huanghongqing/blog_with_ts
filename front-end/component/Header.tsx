import React from 'react'
import style from './Header.module.css'
import {Row,Col, Menu,Button} from 'antd'
import {HomeOutlined,CodeOutlined,CoffeeOutlined} from '@ant-design/icons'

const Header =()=>{
    return(
        <div className={style.header}>
            <Row justify="center" wrap={false} >
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">Akin </span>
                    <span className="header-txt">-Blog for me.</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu  mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />Home
                        </Menu.Item>
                        <Menu.Item key="Code">
                            <CodeOutlined />code
                        </Menu.Item>
                        <Menu.Item key="life">
                            <CoffeeOutlined />Life
                        </Menu.Item>   
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header