import React from 'react'

let ipUrl="http://localhost:7001/default/"

let servicePath={
    getArticleList:ipUrl+"getArticleList",//首页接口
    getArticleById:ipUrl+"getArticelById/",//详细页面接口
}

export default servicePath
