import mock from 'mockjs'
let navArr = []
// 循环 导航数据
for (let i = 0; i < 10; i++) {
  navArr.push({
    id: i,
    type: i === 0 ? 1 : 2,
    text: mock.Random.ctitle(2)
  })
}
export default navArr
