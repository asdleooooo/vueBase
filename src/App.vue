<template>
  <div>
    <Header/>
    <Add :addComment="addComment"/>
    <List :comments="comments" :handleDelete="handleDelete"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Add from  "@/components/Add.vue";
import List from "@/components/List.vue";
export default {
  data(){
    return {
      comments:[
        {
          id:1,
          content:'vue牛逼',
          username:'Tom'
        },
        {
          id:2,
          content:'vue不错',
          username:'Danny'
        },
        {
          id:3,
          content:'vue很nice',
          username:'Jenny'
        }
      ],
    }
  },
  components:{
    Header,
    Add,
    List
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment);
    },
    handleDelete(id){
      this.comments.splice(id,1);
    }
  }
}
</script>

<style>
  .reply {
  margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>