import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Quasar lib
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ja'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'
import 'quasar/src/css/flex-addon.sass'

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
  cssAddon: true,
  config: {},
})

app.use(createPinia()).mount('#app')
