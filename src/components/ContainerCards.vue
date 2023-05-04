<script>
import Card from '../components/Card.vue'
import { store } from '../data/store'

export default {
  name:'ContainerCards',
  components:{
    Card,
  
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="container-cards">

    <Card
    v-for="card in store.cards" 
    :key="card.id"
    :img="card.card_images[0].image_url"
    :name="card.name"
    :type="card.type"

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