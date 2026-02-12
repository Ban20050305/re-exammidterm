import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router/index'

const myApp = createApp(App)

myApp.use(Quasar, {
  config: {}, 
})

myApp.use(router)
myApp.mount('#q-app')
