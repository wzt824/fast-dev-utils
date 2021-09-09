
// 合并数组
function diposeResult() {
  var concatResult = []
  if (arguments.length >= 2) {
    for (let i = 0; i < arguments.length; i++) {
      concatResult = concatResult.concat(arguments[i])
    }
  } else {
    concatResult = arguments[0]
  }

  return concatResult
}

// 相同的属性的属性值拼接
function propertySplit (data, tag = ',') {
  for (let i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {
      if (data[i].name === data[j].name) {
        data[i].value += tag + data[j].value
        data.splice(j, 1)
        j--
      }
    }
  }
  console.log(data)
}
