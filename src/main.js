import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import 'babel-polyfill'

Vue.config.productionTip = false

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
  firstDayOfWeek: 2  // Monday
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
