<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import "@fontsource/montserrat";
import {store} from './data/store';

  export default {
    name:'App',
    data(){
      return{
        store
      }
    },
    components:{
      Header,
      Main,
    }
  }
</script>

<template>
  <Header />
  <Main />
</template>


<style  lang="scss" >
@use './components/scss/typography.scss' as *;
@use './components/scss/general.scss' as *;

</style>