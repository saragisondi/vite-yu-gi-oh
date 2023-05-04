<script>
import {store} from '../data/store';
export default {
  name:'Select',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <select name="type" id="type">
    <option value="Seleziona Tipo">Seleziona Tipo</option>
    <option 
    v-for="(type) in store.CardType"
    :key="type"
    :value="type"
    >

  </option>
  </select>

</template>

<style>

</style>