'use strict'
import { Controller } from 'egg';

export default class MainController extends Controller{
//Admin controller
    async index(){
        // let result =await this.app.mysql.get("article",{});
        // console.log(result);
        this.ctx.body="Admin API...";       
    }

}