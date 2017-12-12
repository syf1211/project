import mock from 'mockjs'
let bannerData = []
// 循环 导航数据
for (let i = 0; i < 15; i++) {
  bannerData.push({
    img: mock.Random.dataImage('750x392', 'Hello Mock.js!')
  })
}
export default bannerData
