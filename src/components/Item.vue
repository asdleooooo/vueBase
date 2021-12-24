<template>
  <li class="list-group-item">
  <div class="handle">
    <a href="javascript:;" @click="deleteComment">删除</a>
  </div>
  <p class="user"><span >{{comment.username}}</span><span>说:</span></p>
  <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
export default {
  props:["comment","index","handleDelete"],
  methods:{
    deleteComment(){
      if(confirm("Are you sure you want to delete this comment?")){
        this.handleDelete(this.index);
      }
    }
  },
}
</script>

<style>

</style>