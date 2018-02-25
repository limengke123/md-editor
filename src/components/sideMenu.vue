<template lang="pug">
    .sideMenu
        .first
            img(:src="logo")
            ul.files
                li(v-for="(article,index) in articleList" ,
                :class="article.current ? 'current' : ''",
                :key="index"
                )
                    span(@click="selectThis(index)") {{articleList[index].content.split('\n')[0] }}
                    button(v-if="articleList.length > 1" , class="delete-btn" , @click="deleteThis(index)")
                        i.fa.fa-times
            ul.options
                li
                    button.add-one-btn(@click="newArticle")
                        i.fa.fa-plus
                li
                    a(:href="htmlDataUrl" , :download="titleHtml" , @mouseenter="createUrl('html')")
                        i.fa.fa-html5
                        .
                            Save as .html
                li
                    a(:href="mdDataUrl" , :download="titleMd" , @mouseenter="createUrl('md')")
                        i.fa.fa-download
                        .
                            Save as .md
        .copy-right this is copyright
</template>

<script>
    import logo from '../assets/img/logo.png'
    export default {
        data(){
            return {
                logo,
                htmlDataUrl: "",
                mdDataUrl: ""
            }
        },
        methods: {
            newArticle(){
                this.$store.dispatch('newArticle')
            },
            deleteThis(i){
                this.$store.dispatch('deleteThis', i)
            },
            createUrl(mode){
                let val, blobObj, objectUrl
                switch (mode) {
                    case 'html':
                        val = this.$store.getters.articleRaw
                        blobObj = new Blob([val])
                        objectUrl = URL.createObjectURL(blobObj)
                        this.htmlDataUrl = objectUrl
                        break
                    case "md":
                        val = this.$store.getters.articleMd
                        blobObj = new Blob([val])
                        objectUrl = URL.createObjectURL(blobObj)
                        this.mdDataUrl = objectUrl
                        break
                    default:
                        break
                }
            }
        },
        computed: {
            articleList(){
                return this.$store.getters.articleList
            },
            titleHtml(){
                return this.$store.getters.articleRaw.split('\n')[0] + '.html'
            },
            titleMd(){
                return this.$store.getters.articleRaw.split('\n')[0] + '.md'
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styl/li.styl'
    .sideMenu
    //float left
        display flex
        flex-direction column
        flex-shrink 0
        align-items center
        justify-content space-between
        width 220px
        height 100%
        background-color #f5f5f5
        box-shadow 4px 5px 3px #aaa
        .first
            width 100%
            display flex
            flex-direction column
            justify-content center
            text-align center
            img
                width 125px
                margin-top 20px
                align-self center
            .files
                border-bottom 1px solid #bdbdbd
                overflow-y scroll
                max-height 295px
                margin-top 20px
                li
                    color #9E9E9E
                    cursor default
                    transition all ease .3s
                    height w = 51px
                    line-height w
                    display flex
                    justify-content space-between
                    text-align left
                    padding 0 0 0 10px
                    span
                        box-sizing border-box
                        width 100%
                        height 100%
                    .delete-btn
                        border none
                        outline none
                        background none
                        display none
                        padding 0 6px
                        &:hover
                            background #ef5350
                            .fa
                                color #fff
                        &:active
                            background #f44336
                            .fa
                                color #fff
                    &.current
                        color #616161
                        border-left 6px solid #009688
                    &:hover
                        background #eee
                        .delete-btn
                            display inline-block
            .options
                li
                    height w = 55px
                    line-height w
                    color #616161
                    transition all .3s ease
                    padding 0 5px
                    cursor default
                    i
                        margin-right 15px
                        font-size 24px
                        width 24px
                    &:hover
                        background-color #e0e0e0
                    button
                        background none
                        border none
                        outline none
                        width 100%
                        height 100%
                        cursor default
                        color #616161
        .copy-right
            color #9e9e9e
            font-size 12px
            margin-bottom 20px

</style>