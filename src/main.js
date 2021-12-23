import Vue from "vue";
import App from "@/App.vue"


/* 
  在脚手架中引入的vue是不带解析器的版本，如果你要用以前的那中方式去new Vue的时候就会报没有解析器的错误
  如果要用就要用vue/dist/vue.esm这个文件，用不带解析器的版本，这个打包出来的文件小
  和效率有关
*/


new Vue({
  el:'#app',
  render:h => h(App),
})