<script>
import Card from '../components/Card.vue'
import { store } from '../data/store';
export default {
  name:'ContainerCards',
  components:{
    Card,
    store
  }
}
</script>

<template>
  <div class="container-cards">

    <Card

    />

  </div>
</template>

<style lang="scss" scoped>
@use './scss/colors.scss' as *;

  .container-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
  }
</style>