
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
      let result = diposeResult(testForm, schoolFrom)

      propertySplit(result, '-')
    })
  }
}

List.init()