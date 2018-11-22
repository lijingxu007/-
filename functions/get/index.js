// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router');//小程序·云开发 云函数类 koa 路由工具
var rp = require('request-promise');
// 云函数初始化
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({ event });

  app.router('audio/list', async (ctx) => {
    var options = {
      uri: 'http://v.juhe.cn/historyWeather/province',
      qs: {
        key: 'a98bced1aefc1abc56bfede8c3916e67'
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true 
    };
    await rp(options).then(res=>{
      ctx.body = {
        code: 0,
        message: res
      }
    }).catch(err=>{
      console.log("报错啦")
    })
  });

  app.router('user/login', async (ctx, next) => {
    console.log(ctx)
    await next();
    console.log(next)
  }, async (ctx, next) => {
    await next();
  }, async (ctx) => {
    ctx.body = {
      code: 0,
      message: 'login success'
    }
  });

  app.router('pay/makeOrder', async (ctx, next) => {
    await next();
  }, async (ctx, next) => {
    await next();
  }, async (ctx) => {
    ctx.body = {
      code: 0,
      message: 'make order success'
    }
  });

  app.router('pay/pay', async (ctx, next) => {
    await next();
  }, async (ctx, next) => {
    await next();
  }, async (ctx) => {
    ctx.body = {
      code: 0,
      message: 'pay success'
    }
  });
  return app.serve();
}