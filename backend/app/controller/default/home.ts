'use strict';
import { Controller } from 'egg';

export default class HomeController extends Controller{

    async index(){
        let result =await this.app.mysql.get("article",{});
        console.log(result);
        this.ctx.body=result;
        
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
                  'type.id as typeId '+
                  ' from article left join type on article.type_id=type.id where delete_flag="0" order by addTime desc';
                  //' where article.id='+id;
        const result= await this.app.mysql.query(sql);
        this.ctx.body={data:result};
    }
    async getArticleById(){
        let id=this.ctx.params.id
        console.log("id=="+id)
        let sql= 'select article.id as id,'+
                  'article.title as title, ' +
                  'article.introduce as introduce, ' +
                  'article.article_content as content ,' +
                  "FROM_UNIXTIME(article.addTIme,'%Y-%m-%d %H:%i:%s') as addTime ," +
                  'article.view_count as view_count ,' +
                  'type.typeName as typeName ,'+
                  'type.id as typeId '+
                  ' from article left join type on article.type_id=type.id '+
                  ' where article.id='+id;
        const result= await this.app.mysql.query(sql);
        this.ctx.body={data:result};       
    }
    async getTypeInfo(){
        const result=await this.app.mysql.select('type')
        this.ctx.body={data:result}
    }
    async getListById(){
        let id= this.ctx.params.id;
        let sql= 'select article.id as id,'+
                  'article.title as title, ' +
                  'article.introduce as introduce, ' +
                  'article.article_content as content ,' +
                  "FROM_UNIXTIME(article.addTIme,'%Y-%m-%d %H:%i:%s') as addTime ," +
                  'article.view_count as view_count ,' +
                  'type.typeName as typeName ,'+
                  'type.id as typeId '+
                  ' from article left join type on article.type_id=type.id '+
                  ' where article.type_id='+id;
        const result= await this.app.mysql.query(sql);
        this.ctx.body={data:result};      
    }
}
