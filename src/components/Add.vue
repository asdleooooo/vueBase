<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model.trim="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model.trim="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:'',
      content:''
    }
  },
  props:["addComment"],
  methods:{
    addC(){
      // 获取这个数据
      let {username,content} =this
      if(username && content){
        // 把数据给变为一个对象
        let obj = {
          id:Date.now(),
          username,
          content
        }
        // 把数据给添加给comments
        this.addComment(obj);
        this.username = '';
        this.content = '';
      }
      else{
        alert("请输入正确的用户名和评论");
      }
    },
  }
}
</script>

<style>

</style>