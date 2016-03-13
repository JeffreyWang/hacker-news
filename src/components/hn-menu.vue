<template>
    <section id="sideBar" class="menu-list" :class="{'show':showMenu}">
        <hn-user></hn-user>
        <ul class="list-ul">
            <li v-for="tab in tabConfig" v-cloak
                @click="tabNav(tab)">{{tab.displayName}}</li>
        </ul>
    </section>
</template>
<script type="text/ecmascript-6" lang="babel">

    export default {
        replace:true,
        props: ['showMenu', 'tabConfig'],
        components:{
            'hnUser':require('./hn-user.vue')
        },
        methods:{
            tabNav(tab){

            }
        }
    }
</script>

<style lang="sass">
    .menu-list {
        position: fixed;
        top: 0;
        bottom: 0;
        left: -200px;
        width: 200px;
        background-color: #fff;
        color: #313131;
        transition: all .3s ease;
        z-index: 99;

        &.show{
            transform: translateX(200px);
        }
    }

    .list-ul {
        margin: 0 24px;
        border-top: 1px solid #d4d4d4;
        overflow: hidden;
        padding-top: 9%;
        li {
            font-size: 14px;
            font-weight: 200;
            padding: 9% 0;
            text-align: left;
            text-indent: 1px;
            line-height: 15px;
            color: #7f8c8d;
            &:last-child {
                margin-bottom: 50px;
            }
            &:before{
                color: #2c3e50;
            }
        }
    }
</style>