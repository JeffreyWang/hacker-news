<template>
    <li class="item">
        <span class="index">{{index}}.</span>
        <p class="title-container">
            <a :href="href" target="_blank">{{{item.title}}}</a>
            <span v-show="showDomain" class="domain">
                <a :href="item.url" target="_blank">({{item.url | domain}})</a>
            </span>
            <span class="post-time">{{item.time | fromNow}} ago</span>
        </p>
        <p class="subtext">
            <span v-show="showInfo" class="score-info">
                {{item.score}} points by
                <a :href="'#/user/' + item.by">{{item.by}}</a>
            </span>
            <span class="comments-link" v-show="showInfo">
                <a :href="'#/item/' + item.id">{{item.descendants}} {{item.descendants | pluralize 'comment'}}</a>
            </span>
        </p>
    </li>
</template>

<script type="text/ecmascript-6" lang="babel">
    export default {

        name: 'Item',

        props: {
            item: Object,
            index: Number
        },

        computed: {
            href () {
                return this.item.url || ('#/item/' + this.item.id)
            },
            showInfo () {
                return this.item.type === 'story' || this.item.type === 'poll'
            },
            showDomain () {
                return this.item.type === 'story'
            }
        }
    }
</script>

<style lang="sass">
    @import "../assets/scss/variable.scss";
    .item {
        padding: 10px $padding;
        border-bottom: $border;
        .index{
            display: inline-block;
            min-width: 25px;
            vertical-align: top;
            margin-right: 3px;
        }
        .title-container{
            display: inline-block;
            width: 90%;
            .score-info{
                color: darkgray;
            }
            .domain{
                a{
                    color: darkgray;
                }
            }
            .post-time{
                float: right;
                color: darkgray;
            }
        }
        .subtext{
            width: 90%;
            padding-top: 5px;
            padding-left: 29px;
            .comments-link{
                float: right;
                margin-right: -31px;
            }
        }
    }
</style>
