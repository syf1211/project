import mockjs from 'mockjs'
let tableList = []
for (let i = 0; i < 10; i++) {
  tableList.push({
    id: i,
    state: mockjs.Random.integer(0, 2),
    name: mockjs.Random.cname(),
    tel: mockjs.mock(/\d{11}/),
    com: mockjs.Random.cword(5)
  })
}
export default tableList
