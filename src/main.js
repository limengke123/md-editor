/**
 * Created by li on 2018/2/10 9:38.
 */
import Vue from 'vue'
import App from './app.vue'


const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render:h => h(App)
}).$mount(root)