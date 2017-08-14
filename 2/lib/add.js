function add(a, b) {
  // 实现该函数
  var aLists = a.split('').reverse()
  var bLists = b.split('').reverse()

  var max = Math.max(aLists.length, bLists.length)
  var flag = 0
  var cLists = []
  for (var i = 0; i <= max; i++) {
    var result = (+aLists[i] || 0) + (+bLists[i] || 0) + flag
    flag = 0
    if (result > 9) {
      result -= 10
      flag = 1
    }
    cLists.push(result)
  }
  if (flag === 1) {
    cLists.push(flag)
  }
  return cLists.reverse().join('')
}

module.exports = add
