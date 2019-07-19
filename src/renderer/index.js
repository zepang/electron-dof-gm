import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import mysql from '../db'

Vue.use(Antd)
Vue.use(mysql)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})