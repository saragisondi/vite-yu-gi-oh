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

    
    <div class="container-img">
      <img src="../../public/Yugioh_anime_logo.webp" alt="logo">
    </div>

    <div class="container">
      <div class="title">{{store.HeaderTitle}}</div>
    </div>

  </header>
</template>


<style lang="scss" scoped>
  @use './scss/colors.scss' as *;
  
  header{
    display: flex;
    align-items: center;
    height:73px;
    background-color: $secondary-color;

    .container-img{
      width: 10%;
      height:100%;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 60%;
        vertical-align: middle;
      }
    }

    .container{
      .title{
        font-size: xxx-large;
        font-weight:bold;
      }

    }
  }
</style>