import React from 'react'

let ipUrl="http://localhost:7001/admin/"

let servicePath={
    checkLogin:ipUrl+"checkLogin",//登录接口
    getTypeInfo:ipUrl+"getTypeInfo",//获得文章类别信息
    addArticle:ipUrl+"addArticle",//插入文章
    updateArticle:ipUrl+"updateArticle",//更新文章
    getArticleList:ipUrl+"getArticleList",//获取文章列表
    deleteArticle:ipUrl+"deleteArticle/",//设置blog为删除状态
}
export default servicePath