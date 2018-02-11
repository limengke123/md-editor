<template lang="pug">
    .app
        side-menu
        main-body
</template>

<script>
    import sideMenu from './components/sideMenu.vue'
    import mainBody from './components/mainBody.vue'
    import './styl/reset.styl'
    export default {
        components:{
            ['main-body']:mainBody,
            ['side-menu']:sideMenu
        }
    }
</script>

<style lang="stylus" scoped>
    .app
        display flex
        height 100%
        background #e0e0e0
        font-family Microsoft Yahei,PingHei,Helvetica Neue,Helvetica,STHeitiSC-Light,Arial,sans-serif
</style>