// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _aldTjLikeEvent(e){
    console.log("hjhhhhhhh")
      this.triggerEvent('aldTjLikeEvent',{e})
    }
  }
})
