/**
 * idx.js 页面可复用的业务代码
 * mockData：本地模拟数据
 * loginIn:登录接口
 * 
 */

import { apple, https } from '../config/config.js'
// import {  } from 'api.js'

let app = getApp()
/**
 * @name 登录接口，获取openId 
 * @param 
 */
// 版本更新判定
export const updateApp = () => {
  const updateManager = wx.getUpdateManager()
  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: (res) => {
        if (res.confirm) {
          updateManager.applyUpdate()
        }
      }
    })
  })
}

// 打点统计
export const aldClickTj=(name)=>{
  let app = getApp()
  app.aldstat.sendEvent(name)
}