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
        // let userName =this.ctx.request.body.userName;
        // let password = this.ctx.request.body.password;
        let userName="abc"
        let password="efg"
        //后续增补处理防止sql注入
        const sql ="select userName from admin_user where userName ='"+userName+"' and password='"+password+"'"
        const result =await this.app.mysql.query(sql)
        if(result.length>0) {
            let openId=new Date().getTime()
            this.ctx.session.openId={"openId":openId}
            this.ctx.body={'data':'login success','openId':openId}
        }else{
            this.ctx.body={'data':'login failed.'}
        }
    }
}