# 微信小程序简易框架
  1.使用 promise 对 wx.request 进行封装
  2.使用 promise 对 云开发的 增、删、改、查 简易封装
  3.进行功能分类
  
  云函数使用
   		使用腾讯开发的 类似 koa 的路由
      // 云函数的 index.js
      
      const TcbRouter = require('./router');
      exports.main = (event, context) => {
      const app = new TcbRouter({ event });
      // app.use 表示该中间件会适用于所有的路由
      app.use(async (ctx, next) => {
          ctx.data = {};
          await next(); // 执行下一中间件
      });
      
      // 路由为数组表示，该中间件适用于 user 和 timer 两个路由
      app.router(['user', 'timer'], async (ctx, next) => {
          ctx.data.company = 'Tencent';
          await next(); // 执行下一中间件
      });
      
      // 路由为字符串，该中间件只适用于 user 路由
      app.router('user', async (ctx, next) => {
          ctx.data.name = 'heyli';
          await next(); // 执行下一中间件
      }, async (ctx, next) => {
          ctx.data.sex = 'male';
          await next(); // 执行下一中间件
      }, async (ctx) => {
          ctx.data.city = 'Foshan';
          // ctx.body 返回数据到小程序端
          ctx.body = { code: 0, data: ctx.data};
      });

      // 路由为字符串，该中间件只适用于 timer 路由
      app.router('timer', async (ctx, next) => {
          ctx.data.name = 'flytam';
          await next(); // 执行下一中间件
      }, async (ctx, next) => {
          ctx.data.sex = await new Promise(resolve => {
          // 等待500ms，再执行下一中间件
          setTimeout(() => {
              resolve('male');
          }, 500);
          });
          await next(); // 执行下一中间件
      }, async (ctx)=>  {
          ctx.data.city = 'Taishan';

          // ctx.body 返回数据到小程序端
          ctx.body = { code: 0, data: ctx.data };
      });

      return app.serve();

    }

