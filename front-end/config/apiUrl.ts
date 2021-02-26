import React from 'react'

let ipUrl="http://localhost:7001/default/"

let servicePath={
    getArticleList:ipUrl+"getArticleList",//首页接口，获取最新列表
    getArticleById:ipUrl+"getArticleById/",//详细页面接口
    getTypeInfo:ipUrl+"getTypeInfo",//获取类别信息
    getListById:ipUrl+"getListById/",//根据类别获取blog列表
}

export default servicePath
