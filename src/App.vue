<script>
import axios from 'axios'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import ContainerCards from './components/ContainerCards.vue'
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
      ContainerCards
    },
    methods:{
      getApi(){
        axios.get(store.ApiUrl,{
          params:{
            num:20,
            offset:0,
            type: store.selectValue
          }
        })
        .then(result => {
          store.cards = result.data.data;
          this.counterFindCard()
        })
      },
      counterFindCard(){
        axios.get(store.ApiUrl,{
          params:{
            type:store.selectValue
          }
        })
        .then(result => {
          store.numberCard = result.data.data
        })
      }
    },

    mounted(){
      this.getApi()
      
    }
  }
</script>

<template>
  <Header />
  <Main 
  @callApi="getApi"/>
</template>


<style  lang="scss" >
@use './components/scss/typography.scss' as *;
@use './components/scss/general.scss' as *;

</style>