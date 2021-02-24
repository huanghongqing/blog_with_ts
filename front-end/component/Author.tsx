import React from 'react'
import {Avatar,Divider} from 'antd'
import style from './Author.module.css'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'

const Author:()=>JSX.Element=()=>{
    return (
        // 多个classname 调用方式
        <div className={`${style.author_div} comm-box`}> 
            <div>
                <Avatar size={100} src="/avator.jpg" /> 
            </div>
            <div className={style.author_introduction}>
                Architect,Geek,warthunder
                <Divider>Social Media Link</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={style.account} />
                <Avatar size={28} icon={<QqOutlined />} className={style.account} />
                <Avatar size={28} icon={<WechatOutlined />} className={style.account} />
            </div>
        </div>
    )
}

export default Author

