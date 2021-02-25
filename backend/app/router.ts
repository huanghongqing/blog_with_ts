import { Application } from 'egg';
import router_default from './router/default'

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/list',controller.home.list);
  router_default(app);
  console.log('change import type.')
  // require('./router/default')(app);//引入router下的路由配置。
};
