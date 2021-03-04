import React from 'react'

let ipUrl="http://localhost:7001/admin/"

let servicePath={
    checkLogin:ipUrl+"checkLogin",//登录接口
    getTypeInfo:ipUrl+"getTypeInfo",//获得文章类别信息
    addArticle:ipUrl+"addArticle",//插入文章
    updateArticle:ipUrl+"updateArticle",//更新文章
}
export default servicePath