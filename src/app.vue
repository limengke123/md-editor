<template lang="pug">
    .app(:class="showMenu ? 'show-menu' : ''")
        side-menu
        main-body.mainBody
</template>

<script>
    import sideMenu from './components/sideMenu.vue'
    import mainBody from './components/mainBody.vue'
    import './styl/reset.styl'
    export default {
        computed:{
            showMenu(){
                console.log(this.$store.state.showMenu)
                return this.$store.state.showMenu
            }
        },
        components:{
            ['main-body']:mainBody,
            ['side-menu']:sideMenu
        }
    }
</script>

<style lang="stylus" scoped>
    .app
        display flex
        //position relative
        //left -225px
        height 100%
        background #e0e0e0
        font-family Microsoft Yahei,PingHei,Helvetica Neue,Helvetica,STHeitiSC-Light,Arial,sans-serif
        transition all 0.5s
    .show-menu
        //left 0
        //transform translateX(-225px)
        .sideMenu
            //transform translateX(-225px)
        .mainBody
            //padding-right 225px
</style>