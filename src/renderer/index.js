import Vue from 'vue'
import Antd from 'ant-design-vue/es/index'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import store from './store/index.js'
import vuePrototypes from './vue-prototypes.js'

/**
 * start
 * ant-vue-design 需要额外引入以下 否则报错
 */
// import ref from 'vue-ref';
// import FormDecoratorDirective from 'ant-design-vue/lib/_util/FormDecoratorDirective'

// Vue.use(ref, { name: 'ant-ref' })
// Vue.use(FormDecoratorDirective)
/**
 * end
 */


Vue.use(Antd)
Vue.use(vuePrototypes)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})