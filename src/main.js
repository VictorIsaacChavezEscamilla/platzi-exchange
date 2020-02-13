import Vue from 'vue'
import App from './App.vue'
import Chart from 'chart.js'

import '@/assets/css/tailwind.css' //@ = Directory source
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'

import { dollarFilter, percentFilter } from '@/filters'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
