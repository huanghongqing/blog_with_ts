import React,{useState} from 'react'
import 'antd/dist/antd.css'
import {Card,Input,Button,Spin} from 'antd'
import '../static/css/Login.css';
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'

const Login=()=>{
    const [userName,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const checkLogin=()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }
    return(
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="Akin Blog Console" bordered={true} style={{width:400}}>
                    <Input 
                        id="userName"
                        size="large"
                        placeholder="userName"
                        prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}
                    />
                    <br /><br />
                    <Input.Password 
                        id="passWord"
                        size="large"
                        placeholder="password"
                        prefix={<FilePptOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <br /><br />
                    <Button type="primary" size="large" block onClick={checkLogin}
                    >Login</Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login