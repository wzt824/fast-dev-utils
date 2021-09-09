
/**
 * 使用方式
 *  1. 在需要的页面引入本文件、config文件及其juicer-0.6.9-min.js文件
 *  2. 在使用的页面进行加载时将文件注入到页面中：以jq环境为例：$('body').append(template)
 *  3. 页面渲染
 *      let tpl = $('#tpl').html()
 *      let html = juicer(tpl, data) // data：就是config文件里根据需求定义的配置数据
 *      $("#testHtml").html(html) // 插入到页面容器中
 */

const template = '<script id="tpl" type="text/template">'+
  '<form class="L-list-wrap">'+
    '{@each list as item}'+
      '<div class="L-item-wrap flex flex_items">'+
        '<div class="L-item-label pr">'+
          '${item.label}'+
          '{@if item.isRequired == true}'+
            '<i class="L-mark">*</i>'+
          '{@/if}'+
        '</div>'+
        '<div class="L-item-content" page="${item.field}-mark">'+
          '<!-- input 类型是的相关操作 -->'+
          '{@if item.type == "input"}'+
            '<!-- 判断是否有多余属性 -->'+
            '<div class="flex flex_items L-item-content-input">'+
              '{@if item.props != undefined && Object.keys(item.props).length > 0}'+
                '<input name="${item.field}" value="${item.value}" placeholder="${item.placeholder}" class="tr flex_1"'+
                  '{@each item.props as propValue,prop}'+
                    '${prop}="${propValue}"'+
                  '{@/each}'+
                  '{@if item.isReadonly == true}'+
                    'readonly'+
                  '{@/if}'+
                'alt=""/>'+
              '{@else}'+
                '<!-- 是否不可修改 -->'+
                '{@if item.isReadonly == true}'+
                  '<input name="${item.field}" readonly type="text" value="${item.value}" placeholder="${item.placeholder}" class="tr flex_1">'+
                '{@else}'+
                  '<input name="${item.field}" type="text" value="${item.value}" placeholder="${item.placeholder}" class="tr flex_1">'+
                '{@/if}'+
              '{@/if}'+
              '<!-- 是否存在buytton按钮 -->'+
              '{@if item.isButton != undefined && Object.keys(item.isButton).length > 0}'+
                '<span class="L-item-content-btn"'+
                  '{@each item.isButton.props as propValue,prop}'+
                    '${prop}="${propValue}"'+
                  '{@/each}'+
                '>${item.isButton.text}</span>'+
              '{@/if}'+
              '<!-- 是否存在icon图标 -->'+
              '{@if item.icon != "" && item.icon != undefined}'+
                '<img class="L-item-content-icon" src="${item.icon}" alt="">'+
              '{@/if}'+
            '</div>'+
          '<!-- radio 类型是的相关操作 -->'+
          '{@else if item.type == "radio"}'+
            '<div class="L-item-radio-content">'+
              '{@each item.childrens as child}'+
                '<!-- 数据回显，默认选中，同时判断是否有多余属性 -->'+
                '{@if child.props != undefined && Object.keys(child.props).length > 0}'+
                  '<label class="flex flex_items">'+
                    '<input type="radio" name="${item.field}" value="${child.value}"'+
                      '{@each child.props as propValue,prop}'+
                        '${prop}="${propValue}"'+
                      '{@/each}'+
                      '{@if child.checked != undefined && child.checked}'+
                        'checked'+
                      '{@/if}'+
                    '>${child.label}'+
                  '</label>'+
                '{@else}'+
                  '{@if child.checked != undefined && child.checked}'+
                    '<label class="flex flex_items"><input type="radio" name="${item.field}" value="${child.value}" checked>${child.label}</label>'+
                  '{@else}'+
                    '<label class="flex flex_items"><input type="radio" name="${item.field}" value="${child.value}">${child.label}</label>'+
                  '{@/if}'+
                '{@/if}'+
              '{@/each}'+
            '</div>'+
            '<!-- 是否存在icon图标 -->'+
            '{@if item.icon != "" && item.icon != undefined}'+
              '<img class="L-item-content-icon" src="${item.icon}" alt="">'+
            '{@/if}'+
          '<!-- checkbox 类型是的相关操作 -->'+
          '{@else if item.type == "checkbox"}'+
            '<div class="L-item-checkbox-content">'+
              '{@each item.childrens as child}'+
                '<!-- 数据回显，默认选中，同时判断是否有多余属性 -->'+
                '{@if child.props != undefined && Object.keys(child.props).length > 0}'+
                  '<label class="flex flex_items">'+
                    '<input type="checkbox" name="${item.field}" value="${child.value}"'+
                      '{@each child.props as propValue,prop}'+
                        '${prop}="${propValue}"'+
                      '{@/each}'+
                      '{@if child.checked != undefined && child.checked}'+
                        'checked'+
                      '{@/if}'+
                    '>${child.label}'+
                  '</label>'+
                '{@else}'+
                  '{@if child.checked != undefined && child.checked}'+
                    '<label class="flex flex_items"><input type="checkbox" name="${item.field}" value="${child.value}" checked>${child.label}</label>'+
                  '{@else}'+
                    '<label class="flex flex_items"><input type="checkbox" name="${item.field}" value="${child.value}">${child.label}</label>'+
                  '{@/if}'+
                '{@/if}'+
              '{@/each}'+
            '</div>'+
            '<!-- 是否存在icon图标 -->'+
            '{@if item.icon != "" && item.icon != undefined}'+
              '<img class="L-item-content-icon" src="${item.icon}" alt="">'+
            '{@/if}'+
          '<!-- select 类型是的相关操作 -->'+
          '{@else if item.type == "select"}'+
            '<div class="L-item-select-content">'+
              '{@each item.childrens as child}'+
                '<div class="flex flex_items">'+
                  '<!-- 数据回显，默认选中，同时判断是否有多余属性 -->'+
                  '{@if child.props != undefined && Object.keys(child.props).length > 0}'+
                    '<select name="${child.field}" class="flex_1"'+
                      '{@each child.props as propValue,prop}'+
                        '${prop}="${propValue}"'+
                      '{@/each}'+
                    '>'+
                      '<option value="">请选择${child.label}</option>'+
                      '{@each child.options as opt}'+
                        '<!-- 数据回显，默认选中 -->'+
                        '{@if opt.selected != undefined && opt.selected}'+
                          '<option value="${opt.value}" selected>${opt.label}</option>'+
                        '{@else}'+
                          '<option value="${opt.value}">${opt.label}</option>'+
                        '{@/if}'+
                      '{@/each}'+
                    '</select>'+
                  '{@else}'+
                    '<select name="${child.field}" class="flex_1">'+
                      '<option value="">请选择${child.label}</option>'+
                      '{@each child.options as opt}'+
                        '<!-- 数据回显，默认选中 -->'+
                        '{@if opt.selected != undefined && opt.selected}'+
                          '<option value="${opt.value}" selected>${opt.label}</option>'+
                        '{@else}'+
                          '<option value="${opt.value}">${opt.label}</option>'+
                        '{@/if}'+
                      '{@/each}'+
                    '</select>'+
                  '{@/if}'+
                  '<!-- 是否存在icon图标 -->'+
                  '{@if child.icon != "" && child.icon != undefined}'+
                    '<img class="L-item-content-icon" src="${child.icon}" alt="">'+
                  '{@/if}'+
                '</div>'+
              '{@/each}'+
            '</div>'+
          '{@/if}'+
        '</div>'+
      '</div>'+
    '{@/each}'+
  '</form>'+
'</script>'