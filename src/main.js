import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//post方法URL 编码的方式向后端发送数据
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//在Vue里挂载一个$http方法，等于导入过来的axios;
Vue.prototype.$http = axios;

Vue.config.productionTip = false
//导入css js
import './assets/css/normalize.css'
import './assets/css/mi.css'
import './assets/js/flex.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
