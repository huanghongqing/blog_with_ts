'use strict';
import { Controller } from 'egg';

export default class HomeController extends Controller{

    async index(){
        let result =await this.app.mysql.get("article",{});
        console.log(result);
        this.ctx.body=result;
        
    }
}
