// 使用小程序云开发注意事项：
  // 1.在app.json 中添加 "cloud": true,
  // 2.使用云函数需要添加在project.config.json 中添加 "cloudfunctionRoot": "function",
import { envId } from "../config/config.js"
  wx.cloud.init({
    traceUser: true
  })
  // 数据库引用
  const db = wx.cloud.database({
    env: envId
  })
  // 插入数据
  export const sqlAdd = ({coll,body={}})=>{
    return new Promise((reslove,reject)=>{
      db.collection(coll).add({
        data:body
      }).then(res => {
        reslove(res)
      }).catch(res=>{
        reject(res)
      })
    })
  }
  // 查询数据

  export const sqlWhere = ({ coll, body = {} }) => {
    return new Promise((reslove,reject)=>{
      db.collection(coll).where(body).get().then(res => {
        reslove(res)
      }).catch(res => {
        reject(res)
      })
    })
  }

  // 更新数据
    // set	设置字段为指定值
    // remove	删除字段
    // inc	原子自增字段值（表示指示数据库将字段自增）
    // mul	原子自乘字段值
    // push	如字段值为数组，往数组尾部增加指定值
    // pop	如字段值为数组，从数组尾部删除一个元素
    // shift	如字段值为数组，从数组头部删除一个元素
    // unshift	如字段值为数组，往数组头部增加指定值
// 局部更新
const _ = db.command;
export const sqlUpate = ({coll,id,body={}})=>{
  return new Promise((reslove,reject)=>{
    db.collection(coll).doc(id).update({data:body}).then(res=>{
      reslove(res)
    }).catch(res=>{
      reject(res)
    })
  })
}
// 删除数据
export const sqlRemove = ({coll,id})=>{
  return new Promise((reslove,reject)=>{
    db.collection(coll).doc(id).remove().then(res => {
      reslove(res)
    }).catch(res => {
      reject(res)
    })
  })
}


     