import React from 'react'

let ipUrl="http://localhost:7001/admin/"

let servicePath={
    checkLogin:ipUrl+"checkLogin",//登录接口
    getTypeInfo:ipUrl+"getTypeInfo",//获得文章类别信息
}
export default servicePath