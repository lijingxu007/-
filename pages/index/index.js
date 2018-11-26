// pages/index/index.js
import { sqlAdd, sqlWhere, sqlUpate, sqlRemove} from '../../lib/sql.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    sqlAdd({coll:"test",body:{"name":"ljx"}}).then(res=>{
      console.log(res)
    })
    // sqlWhere({ coll: "test", body: { "_id":"W_ZOpJSXoyWmbZSo"}}).then(res=>{
    //   console.log(res)
    // })
    // sqlUpate({ coll: "test", body: { "name": "大帅哥" }, id:"W_ZOpJSXoyWmbZSo" }).then(res=>{

    // })

    // sqlRemove({ coll: "test",id: "W_ZOpJSXoyWmbZSo" }).then(res=>{
    //   conole.log(res)
    // }).catch(res=>{
    //   console.log(res)
    // })

    // 小程序云函数调用
    // 模版
      // 调用名为 router 的云函数，路由名为 user
      // wx.cloud.callFunction({
      //   // 要调用的云函数名称
      //   name: "router",
      //   // 传递给云函数的参数
      //   data: {
      //     $url: "user", // 要调用的路由的路径，传入准确路径或者通配符*
      //     other: "xxx"
      //   }
      // });
// 案例
      // wx.cloud.callFunction({
      //   name: 'get',//云函数名称
      //   data: {
      //     $url: 'audio/list',//路径
      //   }
      // }).then((res) => {
      //   console.log(res)
      // }).catch((e) => {
      //   console.log(e);
      // });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})