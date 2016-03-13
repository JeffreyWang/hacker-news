<template>
    <section id="page">
        <ul class="posts-list">
            <hn-item
                v-for="item in items"
                :item="item"
                :index="$index"
                track-by="$index">
            </hn-item>
        </ul>
        <loading :show-loading.sync="showLoading" show-msg="Loading..."></loading>
    </section>
</template>

<script type="text/ecmascript-6" lang="babel">
    import store from '../store'
    import $ from 'jquery'
    export default {
        data (){
            return {
                showLoading:false,
                scroll: true,
                items: [],
                page: 1
            }
        },
        route: {
            data (){
                const page = +this.page;
                return store.fetchItemsByPage(page).then(items => ({
                        page,
                        items
                    })
                );
            }
        },
        created () {
            store.on('topstories-updated', this.update);
            let that = this;
            $(window).on('scroll', () => {
                that.getScrollData();
            });

        },

        destroyed () {
            store.removeListener('topstories-updated', this.update);
            $(window).off('scroll');
        },
        methods: {
            update () {
                this.showLoading = true;
                store.fetchItemsByPage(this.page).then(items => {
                    this.scroll = true;
                    this.showLoading = false;
                    this.items = this.items.concat(items);
                });
            },
            getScrollData (){
                if (this.scroll) {
                    let totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                    if ($(document).height() <= totalHeight + 200) {
                        this.scroll = false;
                        ++this.page;
                        this.update();
                    }
                }
            }
        },
        components: {
            'hnItem': require('../components/hn-item.vue'),
            'loading': require('../components/loading.vue')
        }
    }
</script>

<style lang="sass">
    .posts-list {
        background-color: white;
    }
</style>
