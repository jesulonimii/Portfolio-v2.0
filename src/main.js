import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'


const app = createApp(App)

app.use(router)

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
    duration: 1000,
});

app.mount('#app')
