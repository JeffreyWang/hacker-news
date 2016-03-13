<template>
    <div class="page-cover"
         v-if="showMenu"
         @click="showMenus">
    </div>
    <header :class="{'show':showMenu}">
        <div class="hn-toolbar">
            <div class="toolbar-nav"
                 @click="openMenu">
            </div>
            <span v-text="pageType"></span>
        </div>
    </header>
    <hn-menu :show-menu="showMenu"
             :tab-config="tabConfig">
    </hn-menu>
</template>

<script type="text/ecmascript-6" lang="babel">
    import $ from 'jquery'
    export default {
        replace:true,
        props: ['pageType','showMenu'],
        data (){
            return {
                tabConfig: [
                    {
                        displayName:'Newest',
                        stateName:'newest',
                        iconClass:''
                    },
                    {
                        displayName:'Comments',
                        stateName:'comments',
                        iconClass:''
                    },
                    {
                        displayName:'Show',
                        stateName:'show',
                        iconClass:''
                    },
                    {
                        displayName:'Ask',
                        stateName:'ask',
                        iconClass:''
                    },
                    {
                        displayName:'Jobs',
                        stateName:'jobs',
                        iconClass:''
                    },
                    {
                        displayName:'Submit',
                        stateName:'submit',
                        iconClass:''
                    }
                ]
            }
        },
        methods: {
            openMenu (){
                $("html, body, #page").addClass("scroll-hide");
                this.showMenu=!this.showMenu;
            },
            showMenus (){
                this.showMenu=!this.showMenu;
                $("html, body, #page").removeClass("scroll-hide");
            }
        },
        components:{
            'hnMenu':require('./hn-menu.vue')
        }
    }
</script>
<style lang="sass">
    header {
        border-bottom: 1px solid #e8e8e8;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95);
        position: fixed;
        top: 0;
        left: 0;
        transition: all .3s ease;
        box-shadow: 0 0 4px rgba(0,0,0,0.25);
        z-index: 6;

        &.show {
            transform: translateX(200px);
        }
    }

    .hn-toolbar {
        width: 100%;
        height: 44px;
        display:-webkit-box;
        -webkit-box-align:center;


        .toolbar-nav {
            width: 49px;
            height: 44px;
            position: absolute;
            background: url("../assets/images/nav.png") no-repeat center center;
            background-size: 19px 16px;
            margin: 0;
            z-index: 1;
            top: 0;
            left: 0;
        }

        &>span {
            display: block;
            text-align: center;
            height: 100%;
            line-height: 44px;
            font-size: 16px;
            font-weight: 500;
            width: 100%;
            position: relative;
            z-index: 0;
        }

    }
    .scroll-hide{
        height: 100%;
        overflow: hidden;
    }
</style>