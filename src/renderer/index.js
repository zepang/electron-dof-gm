import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})