<template>
    <hn-header :page-type="tab"
               :show-menu.sync="showMenu">
    </hn-header>
    <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
    </router-view>
</template>
<script type="text/ecmascript-6" lang="babel">
    export default {
        data(){
            return {
                showMenu: false,
                tab: 'Newest'
            };
        },

        components:{
            'hnHeader': require('../components/hn-header.vue')
        }
    }
</script>

<style lang="sass">
    @import "../assets/scss/index.scss";
</style>
