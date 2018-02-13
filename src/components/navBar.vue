<template lang="pug">
    nav
        ul
            li(v-for="btn in btns")
                button(@click="btn.clicks"): i(:class="btn.classes")
</template>

<script>
    const setContent = (inputer,oldContent,newContent,content,endPosition,start,end) => {
        newContent = oldContent.substring(0,endPosition) + content + oldContent.substring(endPosition,oldContent.length)
        inputer.value = newContent
        inputer.setSelectionRange(endPosition + start,endPosition + content.length - end)
        return newContent
    }
    export default {
        data(){
            return {
                btns:[
                    {
                        classes:"fa fa-bars",
                        clicks:this.showMenu
                    },{
                        classes:"fa fa-bold",
                        clicks:this.insert('**Bold**')
                    },{
                        classes:"fa fa-italic",
                        clicks:this.insert('*Italic*')
                    },{
                        classes:"fa fa-link",
                        clicks:"[Link](http://example.com/)"
                    },{
                        classes:"fa fa-quote-left",
                        clicks:this.insert('\n> ')
                    },{
                        classes:"fa fa-code",
                        clicks:this.insert('`code`')
                    },{
                        classes:"fa fa-picture-o",
                        clicks:this.insert('![Img](http://example.com/)')
                    },{
                        classes:"fa fa-list-ul",
                        clicks:this.insert('\n- ')
                    },{
                        classes:"fa fa-header",
                        clicks:this.insert('\n# ')
                    },{
                        classes:"fa fa-underline",
                        clicks:this.insert('\n\n---\n\n')
                    },{
                        classes:"fa fa-th",
                        clicks:this.insert('\n\n| title | title | title |\n| --- | --- | --- |\n| item | item | item |')
                    },{
                        classes:"fa fa-github",
                        clicks:this.redirect('https://github.com/jrainlau/markcook')
                    },{
                        classes:"fa fa-question",
                        clicks:this.redirect('https://github.com/jrainlau/markcook/issues')
                    }
                ]
            }
        },
        methods:{
            showMenu(){
                alert(1)
                this.$store.dispatch('showMenu')
            },
            insert(content){
                return function(){
                    alert(content)
                }
            },
            redirect(url){
                return function(){
                    window.open(url,'_blank')
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    nav
        height w=45px
        box-sizing border-box
        background-color #009688
        box-shadow 4px 3px 3px #aaa
        ul
            display flex
            height w
            min-width 1000px
            li
                height w
                &:first-child
                    border-right 2px solid #00897B
                &:nth-last-child(2)
                    border-left 2px solid #00897B
                button
                    height w
                    width w
                    border none
                    background none
                    outline none
                    transition all ease .3s
                    &:hover
                        background #00897B
                    &:active
                        background #00796B
                    .fa
                        color #fff
                        font-size 18px
</style>