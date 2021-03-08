'use strict'
import { Controller } from 'egg';

export default class MainController extends Controller{
//Admin controller
    async index(){
        // let result =await this.app.mysql.get("article",{});
        // console.log(result);
        this.ctx.body="Admin API...";       
    }
    async checkLogin(){
        let userName =this.ctx.request.body.userName;
        let password = this.ctx.request.body.password;
        //后续增补处理防止sql注入
        const sql ="select userName from admin_user where userName ="+this.app.mysql.escape(userName)+" and password="+this.app.mysql.escape(password)
        console.log(sql)
        const result =await this.app.mysql.query(sql)
        if(result.length>0) {
            let openId=new Date().getTime()
            this.ctx.session.openId={"openId":openId}
            console.log(this.ctx.session.openId)
            this.ctx.body={'data':'login success','openId':openId}
        }else{
            this.ctx.body={'data':'login failed.'}
        }
    }
    async getTypeInfo(){
        const resType =await this.app.mysql.select('type')
        this.ctx.body={'data':resType}
    }
    async addArticle(){
        let article=this.ctx.request.body
        let result= await this.app.mysql.insert('article',article)
        const insertSuccess=result.affectedRows===1
        const insertId=result.insertId
        console.log(insertId)
        this.ctx.body={
            isSuccess:insertSuccess,insertId:insertId
        }
    }
    async updateArticle(){
        let article=this.ctx.request.body
        let result= await this.app.mysql.update('article',article)
        const insertSuccess=result.affectedRows===1
        this.ctx.body={
            isSuccess:insertSuccess,
        }        
    }
    async getArticleList(){
        //let id= this.ctx.params.id;
        let sql= 'select article.id as id,'+
                  'article.title as title, ' +
                  'article.introduce as introduce, ' +
                  'article.article_content as content ,' +
                  "FROM_UNIXTIME(article.addTIme,'%Y-%m-%d %H:%i:%s') as addTime ," +
                  'article.view_count as view_count ,' +
                  'type.typeName as typeName ,'+
                  'type.id as typeId, '+
                  'article.delete_flag as delete_flag '+
                  ' from article left join type on article.type_id=type.id order by addTime desc';
                  //' where article.id='+id;
        const result= await this.app.mysql.query(sql);
        this.ctx.body={data:result};
    }
    async deleteArticle(){
        let id=this.ctx.params.id
        let row={
            id:id,
            delete_flag:"1",
        }
        const res=await this.app.mysql.update('article',row)
        if(res.affectedRows>=1){
            this.ctx.body={data:"delete success"}
        }else{
            this.ctx.body={data:"delete failed"}
        }
    }
}