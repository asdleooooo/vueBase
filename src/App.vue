<template>
  <div>
    <Heade/>
    <Add/>
    <List/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Add from  "@/components/Add.vue";
import List from "@/components/List.vue";
export default {
  components:{
    Header,
    Add,
    List
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