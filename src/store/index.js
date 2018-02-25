/**
 * Created by li on 2018/2/11 10:41.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import marked from 'marked'

Vue.use(Vuex)

const createID = () => {
    let t = ''
    for (let i = 0; i < 15; i++){
        t += Math.floor(Math.random() * 10)
    }
    return t
}
const saveId = (state) =>{
    localStorage.setItem('idArr',state.articleList.forEach(val => val.id).join(','))
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
        },
        DELETE_ARTICLE(state,pos){
            if(state.articleList.length > 1){
                //const idArr = localStorage.getItem('idArr').split(',')
                //const idArrString = idArr.filter((val,index) => index != pos).join(',')
                //localStorage.setItem('idArr',idArrString)
                state.articleList.splice(pos,1)
            }
        },
        TEXT_INPUT(state,text){
            console.log(text)
            state.articleList.filter(val => val.current)[0].content = text
        }
    },
    actions:{
        showMenu({commit}){
            commit('SHOW_MENU')
        },
        newArticle({commit}){
            commit('NEW_ARTICLE')
        },
        deleteThis({commit}){
            commit('DELETE_ARTICLE')
        },
        textInput({commit},text){
            console.log('action',text)
            commit('TEXT_INPUT',text)
        }
    },
    getters:{
        articleList(state){
            return state.articleList
        },
        articleRaw(state){
            return state.articleList.filter(val => val.current)[0].content
        },
        articleMd(state,getters){
            return marked(getters.articleRaw)
        }
    }
})

export default store