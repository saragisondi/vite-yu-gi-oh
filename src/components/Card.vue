
<script>
export default {
  name:'Card',
  props:{
    img:String,
    name:String,
    fname:String
  }
}
</script>

<template>
  
  <div class="card">
      <div class="container-img">
        <img :src="img" :alt="name">
      </div>

      <div class="description">
        <div>{{name}}</div>
        <p>{{fname}}</p>
      </div>

    </div>
</template>

<style lang="scss" scoped>
@use './scss/colors.scss'as *;
.card{
      border:1px solid red;
      width: calc(90% /5);
      height:500px;   
      margin-bottom:30px;

      .container-img{
        width: 100%;
        height:65%;

        img{
          width: 100%;
          height:65%;
          object-fit: cover;
        }
      }

      .description{
        background-color: $primary-color;
        height:35%;
      }
    }
</style>