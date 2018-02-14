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
    const updateContent = (inputer,oldContent,newContent,startPosition,endPosition,symbol1,symbol2) => {
        newContent = oldContent.substring(0,startPosition) + symbol1 + oldContent.substring(startPosition,endPosition) + symbol2
        inputer.value = newContent
        const len = newContent.length
        inputer.setSelectionRange(len,len)
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
                this.$store.dispatch('showMenu')
            },
            insert(content){
                return () => {
                    const inputer = document.querySelector('#inputer')
                    const startPosition = inputer.selectionStart
                    const endPosition = inputer.selectionEnd
                    const oldContent = inputer.value
                    inputer.focus()
                    let newContent = ''
                    if(startPosition === endPosition) {
                        switch(content){
                            case '**Bold**':
                                newContent = setContent(inputer,oldContent,newContent,content,endPosition,2,2)
                                break
                            case '*Itaic*':
                                newContent = setContent(inputer,oldContent,newContent,content,endPosition,1,1)
                                break
                            case '[Link](http://example.com/)':
                                newContent = setContent(inputer,oldContent,newContent,content,endPosition,7,1)
                                break
                            case '`code`':
                                newContent = setContent(inputer,oldContent,newContent,content,endPosition,1,1)
                                break
                            case '![Img](http://example.com/)':
                                newContent = setContent(inputer,oldContent,newContent,content,endPosition,7,1)
                                break
                            default:
                                newContent = oldContent.substring(0,endPosition) + content + oldContent.substring(endPosition, oldContent.length)
                                break
                        }
                    } else{
                        switch (content){
                            case '**Bold**':
                                newContent = updateContent(inputer,oldContent,newContent,startPosition,endPosition,'**','**')
                                break
                            case '*Italic*':
                                newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '*', '*')
                                break
                            case '`code`':
                                newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '`', '`')
                                break
                            case '[Link](http://example.com/)':
                                newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '[', '](http://example.com/)')
                                break
                            case '![Img](http://example.com/)':
                                newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '![', '](http://example.com/)')
                                break
                            default:
                                return false
                                break

                        }
                    }
                    if(newContent.length > 0){
                        this.$store.dispatch('textInput',newContent)
                    }
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