<template lang="pug">
    .outputer(v-html="parsedHtml")
</template>

<script>
    export default {
        computed:{
            parsedHtml(){
                return this.$store.getters.articleMd
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styl/var.styl'
    .outputer
        width 50%
        box-sizing border-box
        padding $padding
        background-color $bgColor
        font-size $fontSize
        color $color
        box-shadow $box
        font-family inherit
</style>