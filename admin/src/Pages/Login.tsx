import React,{useState} from 'react'
import 'antd/dist/antd.css'
import {Card,Input,Button,Spin,message} from 'antd'
import '../static/css/Login.css';
import {UserOutlined,FilePptOutlined} from '@ant-design/icons'
import servicePath from '../config/ApiUrl'
import axios from 'axios'


const Login=(props:any)=>{
    const [userName,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const checkLogin=()=>{
        if(!userName){
            message.error('invalid userName')
            return false
        }else if(!password){
            message.error('invalid password')
            return false
        }
        setIsLoading(true)
        let dataProps={
            'userName':userName,'password':password
        }
        axios({
            method:'post',
            url:servicePath.checkLogin,
            data:dataProps,
            withCredentials:true,
        }).then(
            (res)=>{
                setIsLoading(false)
                if(res.data.data){
                    localStorage.setItem('openId',res.data.openId)
                    let flag=res.data.data
                    if(flag=="login success"){
                        props.history.push('/index')
                    }else{
                        message.error('login failed.')
                    }
                }
            }
        ).catch(
            (error)=>{
                message.error(error)
            }
        )
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