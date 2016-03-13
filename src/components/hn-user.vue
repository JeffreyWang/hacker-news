<template>
    <div class="user-info">
        <!-- 未登录 -->
        <ul class="login-no" v-if="!loginName">
            <li class="login" @click="goEnter"><a href="javascript:;">登录</a></li>
        </ul>
        <!-- 已登录 -->
        <div class="login-yes" v-if="loginName" @click="goUser">
            <div class="avatar"><img v-if="avatarUrl" :src="avatarUrl"></div>
            <div class="info">
                <p v-if="loginName" v-text="loginName"></p>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6" lang="babel">
    export default {
        replace:true,
        data () {
            return {
                loginName: localStorage.loginName || "",
                avatarUrl: localStorage.avatarUrl || ""
            }
        },
        methods:{
            goEnter (){

            },
            goUser (){

            }
        }
    }
</script>

<style lang="sass">
    .user-info {
        padding: 15px;
        font-size: 15px;
        color: #313131;
    }

    /*未登录*/
    .login-no {
        overflow: hidden;
        margin: 8px 9px;
        &>li {
          float: right;
          height: 24px;
          line-height: 24px;
          padding-left: 34px;
          position: relative;
            &:before {
                width: 24px;
                height: 24px;
                content: '';
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .login {
            float: left;
            &:before {
                background: url("../assets/images/login.png") no-repeat left center;
                background-size: 24px 24px;
            }
            a{
                color: black;
                font-size: 16px;
            }
        }
    }

    /*已登录*/
    .login-yes {
        height: 100%;
        background: url("../assets/images/go-next.png") no-repeat right center;
        background-size: 6px 10px;
        overflow: hidden;
        position: relative;
        .avatar {
            width: 40px;
            height: 40px;
            background: url("../assets/images/user.png") no-repeat center center;
            background-size: 40px 40px;
            border-radius: 20px;
            overflow: hidden;
            float: left;
            &>img {
                width: 40px;
                height: 40px;
                display: block;
            }
        }
        .info {
            margin-left: 10px;
            overflow: hidden;
            float: left;
        }
        p {
            width: 85px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 12px;
            line-height: 12px;
            line-height: 40px;
            &.lh20 {
                line-height: 20px;
            }
        }
        &:after {
            display: block;
            background: url("../assets/images/go.png") no-repeat center right;
            background-size: 7px 7px;
        }
    }
</style>