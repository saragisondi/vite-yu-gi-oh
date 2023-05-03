
<script>
export default {
  name:'Card',
  props:{
    img:String,
    name:String,
    type:String
  }
}
</script>

<template>
  
  <div class="card">
      <div class="container-img">
        <img :src="img" :alt="name">
      </div>

      <div class="description">
        <h3>{{name}}</h3>
        <p>{{type}}</p>
      </div>

    </div>
</template>

<style lang="scss" scoped>
@use './scss/colors.scss'as *;

.card{
      width: calc(90% /5);
      height:500px;   
      margin-bottom:30px;
      background-color: $primary-color;
      
      
      .description{
        height:35%;
        word-wrap: wrap;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


        h3{
          text-transform: uppercase;
          color:$secondary-color;
          margin-bottom:20px;
        }
      }
    }
</style>