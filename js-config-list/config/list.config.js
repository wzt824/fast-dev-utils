
/**
 * config配置文件 格式及其属性说明
 * var listConfigData = {
 *  list: [  // list里存放发的是表单属性 且list不能改名
 *    {
 *      field: '', // field 表单英文名，须唯一且不能为空
 *      type: '', // type 表单类型，仅支持input/radio/checkbox/select,且不能为空
 *      label: '', // label 表单名字,不能为空
 *      placeholder: '', // placeholder 默认提示文本
 *      value: ''， // value 值
 *      isRequired: '', // 是否必输
 *      isReadonly: '', // 是否不可输入
 *      props: {}, // 是否包含其余自定义属性及其属性值
 * 
 *      <!-- type为input时的特有属性  -->
 *      icon: '', // 右边icon展示的图标：值为图标路径
 *      isButton: { // 是否最右边有按钮
 *        text: '', // 按钮名字
 *        props: {}, // 是否包含其余自定义属性及其属性值
 *      }
 * 
 *      <!-- type为radio/checkbox时的特有属性  -->
 *      childrens: [ // 包含的选项
 *        {
 *          value: '', // value值
 *          label: '', // 名字
 *          checked: true, // 是否选中
 *          props: {}, // 是否包含其余自定义属性及其属性值
 *        }
 *      ]
 * 
 *      <!-- type为select时的特有属性  -->
 *      childrens: [ // 包含的选项
 *        {
 *          field: '', // field 表单英文名，须唯一且不能为空
 *          label: '', // 名字
 *          options: [ // options选项
 *            {
 *              value: '', // value值
 *              label: '', // 名字
 *              selected: true, // 是否选中
 *            }
 *          ],
 *          props: {}, // 是否包含其余自定义属性及其属性值
 *          icon: '' // 右边icon展示的图标：值为图标路径
 *        }
 *      ]
 *    }
 *  ]
 * }
 */


var listConfigData = {
  list: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      value: '',
      props: {
        'data-id': '0-0',
        'data-label': '王智涛'
      },
      isRequired: true
    },
    {
      field: 'curTime',
      type: 'input',
      label: '当前日期',
      placeholder: '请输入当前日期',
      value: '2021-12-12',
      isReadonly: true
    },
    {
      field: 'sex',
      type: 'radio',
      label: '性别',
      childrens: [
        { 
          value: "0",
          label: '女',
          props: {
            'data-id': 'sex-0',
            'data-label': '女强人'
          }
        },
        { checked: true, value: "1", label: '男' }
      ]
    },
    {
      field: 'like',
      type: 'checkbox',
      label: '爱好',
      childrens: [
        { value: "0", label: '跑步', props: { 'data-id': 'run-0', 'data-label': 'run-跑步' } },
        { name: 'man', value: "1", label: '登山' },
        { name: 'man', value: "2", label: '打游戏' },
        { value: "3", label: '听歌' },
        { name: 'man', value: "4", label: '看电影' }
      ]
    },
    {
      field: 'address',
      type: 'select',
      label: '地址',
      childrens: [
        {
          field: 'province',
          label: '省',
          options: [
            { value: "0", label: '甘肃',},
            { value: "1", label: '四川' },
            { value: "2", label: '贵州' },
            { value: "3", label: '陕西' }
          ],
          props: { 
            'data-id': 'province-0',
            'data-label': 'province-甘肃',
            'onclick': 'console.log("点击")',
            'onchange': 'console.log(this)'

          },
          icon: '../img/down.svg'
        },
        {
          field: 'city',
          label: '市',
          options: [
            { value: "0", label: '陇南' },
            { value: "1", label: '成都' },
            { value: "2", label: '贵阳' },
            { value: "3", label: '西安' }
          ],
          icon: '../img/down.svg'
        },
        {
          field: 'district',
          label: '区',
          options: [
            { value: "0", label: '武都区' },
            { value: "1", label: '武侯区' },
            { value: "2", label: '观山湖区' },
            { value: "3", label: '高新区' }
          ],
          icon: '../img/down.svg'
        }
      ]
    },
    {
      field: 'status',
      type: 'select',
      label: '婚姻状况',
      childrens: [
        {
          field: 'status',
          label: '',
          options: [
            { value: "0", label: '未婚' },
            { value: "1", label: '已婚' },
            { value: "2", label: '离异' },
            { value: "3", label: '丧偶' }
          ],
          icon: '../img/down.svg'
        }
      ]
    }
  ]
}

var listTwoConfigData = {
  list: [
    {
      field: 'school',
      type: 'input',
      label: '学校',
      placeholder: '请输入学校',
      value: '',
      isRequired: true
    },
    {
      field: 'grade',
      type: 'input',
      label: '班级',
      placeholder: '请输入班级',
      value: '',
      isRequired: true
    },
    {
      field: 'schoolTime',
      type: 'input',
      label: '开学时间',
      placeholder: '请输入开学时间',
      value: '2021-09-01',
      isReadonly: true
    },
    {
      field: 'openLink',
      type: 'input',
      label: '打开新功能',
      placeholder: '请输入打开新功能',
      value: '点击打开新页面',
      icon: '../img/right.png',
      props: {
        'onclick': 'console.log(this.value="测试数据")'
      },
      isReadonly: true
    },
    {
      field: 'code',
      type: 'input',
      label: '验证码',
      placeholder: '请输入',
      value: '',
      isButton: {
        text: '点击获取验证码',
        props: {
          'onclick': 'alert("验证码:456790")'
        }
      },
      props: {
        'type': 'number',
        'oninput': "if(value.length>6)value=value.slice(0,6)"
      },
      isRequired: true
    }
  ]
}