<template lang="pug">
    .wrapper
        nav-bar
        .puter
            inputer
            outputer
</template>

<script>
    import navBar from './navBar.vue'
    import inputer from './inputer.vue'
    import outputer from './outputer.vue'
    export default {
        components:{
            ['nav-bar']:navBar,
            inputer,
            outputer
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        display flex
        flex-direction column
        flex-grow 1
        .puter
            display flex
            flex-grow 1
</style>