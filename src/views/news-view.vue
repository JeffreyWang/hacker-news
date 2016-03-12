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
    </section>
</template>

<script type="text/ecmascript-6" lang="babel">
    import store from '../store'
    import $ from 'jquery'
    export default {
        data (){
            return {
                scroll: true,
                items: [],
                page: 1,
                limit: 20
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
            let that  = this;
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
                store.fetchItemsByPage(this.page).then(items => {
                    this.scroll = true;
                    this.items = this.items.concat(items);
                });
            },
            //滚动加载数据
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
            'hnItem': require('../components/hn-item.vue')
        }
    }
</script>
