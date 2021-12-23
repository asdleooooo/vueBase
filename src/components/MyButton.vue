<template>
  <div>
    <h2>Hello world!{{count}}</h2>
    <button @click="count++">点击</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0,
    }
  }
}
</script>

<style>

</style>