<script>
import ContainerCards from '../components/ContainerCards.vue'
import Card from '../components/Card.vue'

export default {
  name:'Main',
  components:{
    ContainerCards,
    Card,
  }
}
</script>

<template>
  <main>
    <div class="container">

      <div class="found-cards">
        <div class="text">Found 39 cards</div>
      </div>
      
      <ContainerCards/>

    </div>

  </main>

</template>

<style lang="scss" scoped >
  @use './scss/general.scss' as *;
  @use './scss/colors.scss' as *;

main{
  background-color: $secondary-color;
  margin:80px;

  .container{
    background: $secondary-color;
    margin:70px;
  
  }

  .found-cards{
    background-color:$tertiary-color;
    height:80px;
    display: flex;
    align-items: center;
    
    .text{
      font-size:20px;
      font-weight: bold;
      margin-left:30px;
      color:$secondary-color;
    }
  }

}
</style>