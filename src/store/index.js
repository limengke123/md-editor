/**
 * Created by li on 2018/2/11 10:41.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createID = () => {
    let t = ''
    for (let i = 0; i < 15; i++){
        t += Math.floor(Math.random() * 10)
    }
    return t
}
const store = new Vuex.Store({
    state:{
        showMenu:true,
        articleList:[
            {
                id:createID(),
                content:'Untitiled\n---\n',
                current:true
            }
        ]
    },
    mutations:{
        SHOW_MENU(state){
            state.showMenu = !state.showMenu
        },
        NEW_ARTICLE(state){
            state.articleList.forEach(val => val.current = false)
            let newOne = {
                id: createID(),
                content: 'Untitled\n---',
                current: true
            }
            state.articleList.push(newOne)
        }
    },
    actions:{
        showMenu({commit}){
            commit('SHOW_MENU')
        }
    },
})

export default store