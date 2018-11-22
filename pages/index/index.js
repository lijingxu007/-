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
    sqlWhere({ coll: "test", body: { "_id":"W_ZOpJSXoyWmbZSo"}}).then(res=>{
      console.log(res)
    })
    sqlUpate({ coll: "test", body: { "name": "大帅哥" }, id:"W_ZOpJSXoyWmbZSo" }).then(res=>{

    })

    sqlRemove({ coll: "test",id: "W_ZOpJSXoyWmbZSo" }).then(res=>{
      conole.log(res)
    }).catch(res=>{
      console.log(res)
    })
    
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