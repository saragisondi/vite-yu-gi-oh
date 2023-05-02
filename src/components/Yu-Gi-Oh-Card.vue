
<script>
export default {
  name:'YuGiOhCard',
  props:{
    img:String,
    name:String,
    type:String
  }
}
</script>

<template>
<div class="card">
  <h1></h1>

</div>
</template>

<style lang="scss">
.card{
  border: 2px solid brown;
}
h1{
  color: black;
}
</style>