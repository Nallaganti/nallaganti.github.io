import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {fas} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */


library.add(fas);

createApp(App).
component('fa', FontAwesomeIcon).
use(router).mount('#app')
