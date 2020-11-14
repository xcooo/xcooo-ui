// 整个包的入口
// 导入颜色选择器
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Switch from './switch.vue'
import Form from './form.vue'
import FormItem from './form-item.vue'
import './fonts/font.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]

// 定义 install 方法, 接收 Vue 作为参数. 如果使用 use 注册插件, 则所有的组件都会被注册
const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
   
}

// 判断是否是直接引入文件, 如果是, 就不用调用 Vue.use()
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install