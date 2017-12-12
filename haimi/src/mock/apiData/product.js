import mock from 'mockjs'

let Priduct = []

for (let i = 0; i < 500; i++) {
  Priduct.push({
    id: i,
    img: mock.Random.dataImage('375x375'),
    word1: mock.Random.ctitle(),
    type: mock.Random.integer(0, 9),
    word2: mock.Random.float(60, 10000, 2, 2)
  })
}

export default Priduct
