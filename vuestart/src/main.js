import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource  from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//定义组件
const First = { template:'<div><h2>我是第1个页面</h2></div>'}

import secondcomponent from './component/secondcomponent.vue'

//创建一个路由实例
//并且配置路由规则
const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes:[{
    path:'/first',
    component:First
  },
   {
      path:'/second',
      component:secondcomponent
   }]
});

//路由会自动创建一个App实例，并且挂在到选择符#app匹配的元素上


const app = new Vue({
   router:router,
  render: h => h(App)
}).$mount('#app')
