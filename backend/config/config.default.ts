import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614222513886_8182';

  // add your egg config in here
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'localhost',//数据库连接地址
      port: 3306,//端口号
      user: 'root',//用户名
      password: '123456',//密码
      database: 'blog'//数据库名
    },
    app: true,      // 是否加载到app上
    agent: false    // 是否加载到agent上
  };
  config.security = {
    　　　　csrf: {enable: false},
    　　　　domainWhiteList: [ '*' ]
  };
  config.cors = {
    origin: 'http://localhost:3000', //只允许这个域进行访问接口
    credentials: true,   // 开启认证,允许cookie跨域
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
