'use strict';
import { Controller } from 'egg';

export default class HomeController extends Controller{

    async index(){
        this.ctx.body="api接口..."
    }
}
