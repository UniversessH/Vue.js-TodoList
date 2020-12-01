import Vue from 'vue'
import './assets/styles.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(ElementUI)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})

//Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
