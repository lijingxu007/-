var aldstat = require("./utils/ald-stat.js")
import { updateApp } from './lib/idx.js'
App({
  appData: {
   
  },
  onLaunch(opt) {
    // 版本更新
    updateApp();
   
  },
  globalData: {
  }
})