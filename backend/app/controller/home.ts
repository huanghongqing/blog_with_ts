import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async list(){
    const { ctx }=this;
    ctx.body='<h1>Blog Service API.</h1>'
  }
}
