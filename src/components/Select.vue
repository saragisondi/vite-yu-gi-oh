<script>
import {store} from '../data/store.js';
export default {
  name:'Select',
  data(){
    return{
      store
    }
  },
  methods:{
    selectFunction(type){
      store.selectValue = type
      this.$emit('changeValue')
    }
  }
}
</script>

<template>
  <select name="type" id="type">
    <option @click="selectFunction(null)">Seleziona Tipo</option>
    <option 
    v-for="(type) in store.CardType"
    :key="type"
    :value="type"
    @click="selectFunction(type)"
    >{{ type }}

  </option>
  </select>

</template>

<style>

</style>