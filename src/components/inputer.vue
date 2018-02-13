<template lang="pug">
    .inputer-wrapper
        textarea.inputer(autofocus,
                        :value="rawText",
                        @input="inputting")
</template>

<script>
    export default {
        computed:{
            rawText(){
                return this.$store.getters.articleRaw
            }
        },
        methods:{
            inputting(e){
                this.$store.dispatch('textInput',e.target.value)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styl/var.styl'
    .inputer-wrapper
        width 50%
        margin-right 10px
        .inputer
            box-sizing border-box
            width 100%
            height 100%
            font-size $fontSize
            color $color
            box-shadow $box
            transition all ease .3s
            padding $padding
            resize none
            border none
            background-color $bgColor
            outline none
            font-family inherit
</style>