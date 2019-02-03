// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueSocketIO from 'vue-socket.io'

console.log(process.env.NODE_ENV)

// let connectionUrl

// if (process.env.NODE_ENV === 'development') {
//   connectionUrl = 'http://localhost:8080'
// } else if (process.env.NODE_ENV === 'production') {
//   connectionUrl = 'magical-potions.herokuapp.com'
// }

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : window.location.hostname
}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
