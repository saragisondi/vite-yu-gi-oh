<script>
import {store} from '../data/store';

  export default {
    name:'Header',
    data(){
      return{
        store
      }
    }
  }
  
</script>

<template>
  <header>
    <!-- <img src="" alt="logo"> -->
    <h2>logo</h2>
    <h1>{{store.HeaderTitle}}</h1>
  </header>
</template>


<style lang="scss" scoped>
  header{
    display: flex;
  }
</style>