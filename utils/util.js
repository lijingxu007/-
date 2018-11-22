/**
 * util.js 工具函数
 */
//时间格式化
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  //map() 方法按照原始数组元素顺序依次处理元素
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//数字格式化：
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 洗牌方法
const shuffle = (a, b, percent = 0.5) => {
  return Math.random() > (1 - percent) ? a : b
}

// 随机整数方法
const rnd = (n = 0, m = 1) => {
  const random = Math.floor(Math.random() * (m - n + 1) + n)
  // console.log(random);
  return random
}

// 表达式求值
const express = (array) => {
  let value = 0
  if (!array || array.lenth < 3) {
    return value
  } else {
    switch (array[1]) {
      case '+':
        value = array[0] + array[2]
        break
      case '-':
        value = array[0] - array[2]
        break
      default:
        break
    }
  }
  // console.log(value)
  return value
}

/**
 * value:Number 偏移值
 * bool:Boolen 是否返回原值 
 * ofsetX:Number 偏移数值，上下浮动
 * percent:（1位小数） 返回相反数的比例
 */
const offset = (value, bool, ofsetX, percent = 0.2) => {
  if (bool === true) { return value }
  if (shuffle(true, false, percent) && value != 0) {
    return value * -1;
  } else {
    let operator = shuffle('+', '-')
    switch (operator) {
      case '+':
        value = value + rnd(1, ofsetX)
        break
      case '-':
        value = value - rnd(1, ofsetX)
        break
      default:
        break
    }
    return value
  }
}
// 随机取值不重复
const rndArray = (sourceArry = [], num = 0) => {
  let originArry = [].concat(sourceArry)
  let resultArry = []
  for (let i = 0; i < num; i++) {
    resultArry.push(originArry.splice(rnd(0, originArry.length - 1), 1)[0])
  }
  return resultArry
  // console.log(resultArry)
}

module.exports = {
  formatTime: formatTime,
  shuffle: shuffle,
  rnd: rnd,
  express: express,
  offset: offset,
  rndArray: rndArray
}
