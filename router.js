var routes = [
    {
        path:'/',
        component:{
            template:`
            <div>
                <h1>首页</h1>
            </div>
            `,
        },
    },
    {
        path:'/about',
        component:{
            template:`
            <div>
                <h1>关于</h1>
            </div>
            `,
        },
    },
    {
        path: '/login',
        component: {
            template: `
            <div>
                <a href="login.html">登录</a>
            </div>
            `
        }
    }
];
var router = new VueRouter({
    routes: routes,
});

router.beforeEach((to,from,next)=>{
    var i = null;
    if (i === null){
        next();
        alert("您还未登录,请先登录")
    }
})

new Vue({
    el:'#app',
    router: router,
});