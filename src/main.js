import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './views/app.vue'
import NewsView from './views/news-view.vue'

// install router
Vue.use(Router);

// register filters globally
Vue.filter('fromNow', fromNow);
Vue.filter('domain', domain);

// routing
var router = new Router();

router.map({
    '/news': {
        component: NewsView
    }
});

router.beforeEach(function () {
    window.scrollTo(0, 0)
});

router.redirect({
    '*': '/news'
});

router.start(App, '#app');
