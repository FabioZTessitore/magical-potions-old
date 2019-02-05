// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingUsd, faWineBottle, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vuex from 'vuex'

library.add(faHandHoldingUsd)
library.add(faWineBottle)
library.add(faFunnelDollar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueSocketIO from 'vue-socket.io'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    money: 0,
    potions: 0,
    potionsToMoney: 10.0
  },
  mutations: {
    setInitialData (state, data) {
      state.money = data.money
      state.potions = data.potions
    },
    increment (state) {
      state.money++
    },
    incrementPotions (state) {
      state.potions++
    },
    updateMoney (state) {
      state.money += state.potions / state.potionsToMoney
    }
  }
})

Vue.use(new VueSocketIO({
  debug: false,
  connection: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.hostname
}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      timer: ''
    }
  },
  created: function () {
    const self = this
    this.timer = setInterval(function () {
      self.$store.commit('updateMoney')
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  sockets: {
    connect: function () {
      console.log('socket connection ...')
    },

    initialData: function (data) {
      this.$store.commit('setInitialData', data)
    }
  }
})
