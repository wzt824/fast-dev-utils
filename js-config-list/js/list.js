
let List = {

  init() {

    // 导入文件
    $('body').append(template)

    // 根据配置渲染列表数据
    List.renderListPageByConfig(listConfigData, listTwoConfigData)
    
    List.initEventClick()
  },

  renderListPageByConfig(data, data2){
    let tpl = $('#tpl').html()
    let html = juicer(tpl, data)
    $("#testHtml").html(html)

    let schoolTpl = $('#tpl').html()
    let schoolHtml = juicer(schoolTpl, data2)
    $("#schoolHtml").html(schoolHtml)
  },

  initEventClick () {
    $("#submit").on('click', function(){
      const testForm = $("#testHtml form").serializeArray()
      const schoolFrom = $("#schoolHtml form").serializeArray()
      // diposeResult() 合并数组
      let result = diposeResult(testForm, schoolFrom)
      // propertySplit() 将属性相同的数组，值进行拼接
      const filterData = propertySplit(result, '-')
      // 验证版
      let resultConfig = diposeResult(listConfigData.list, listTwoConfigData.list)

      // validatePass() 非空验证（表单信息和配置数）：验证失败返回提示信息验证成功返回表单数据
      const vaild = validatePass(filterData, resultConfig)

      if (typeof vaild === 'string') {
        alert(vaild)
      } else {
        console.log(vaild);
      }
    })
  }
}

List.init()