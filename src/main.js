import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedinIn, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faGithubAlt, faLinkedinIn, faEnvelope)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
