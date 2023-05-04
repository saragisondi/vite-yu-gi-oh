<script>
import ContainerCards from '../components/ContainerCards.vue'
import Card from '../components/Card.vue'
import Select from '../components/Select.vue'
import {store} from '../data/store'

export default {
  name:'Main',
  components:{
    ContainerCards,
    Card,
    Select,
  },
  data(){
    return{
      store,
    }
  },

  methods:{
    callApi(){
      this.$emit('callApi')
    }
  }
}
</script>

<template>

  <main>


    <div class="container">

      <div class="found-cards">
        <div class="text">Found {{}} cards</div>
      </div>

      <Select
      @changeValue="callApi"
      />
      <ContainerCards/>

    </div>

  </main>

</template>

<style lang="scss" scoped >
  @use './scss/general.scss' as *;
  @use './scss/colors.scss' as *;

  select{
    margin:20px 90px;
    background-color: $secondary-color;
    border-style:none;
    border:1px solid #CAC2B5;
    border-radius:5px;
    padding: 5px;
    padding-right:60px;
  }

main{
  background-color: $secondary-color;
  margin:0 80px;

  .container{
    background: $secondary-color;
    margin:0 70px;
  
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