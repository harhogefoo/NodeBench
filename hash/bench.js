const customItems = {}
for (let i = 0; i < 10000; i++) {
  customItems["hogehoge" + i] = Math.random().toString(36).slice(-10)
}

function test1() {
  // 書き方1
  let result1 = {}
  Object.keys(customItems).forEach((key) => {
    result1[key] = JSON.stringify(customItems[key])
  })
}

function test2() {
  // 書き方2
  let result2 = Object.keys(customItems).map((k) => {
    return {key: k, v: JSON.stringify(customItems[k])}
  }).reduce((m, o) => {
    m[o.key] = o.v
    return m
  }, {})
}

exports.compare = {
  'test1': test1,
  'test2': test2,
}

require('bench').runMain()

