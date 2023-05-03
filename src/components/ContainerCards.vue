<script>
export default {
  name:'ContainerCards'
}
</script>

<template>
  <div class="container-cards">

    <div class="card">
      <div class="container-img">
        <img src="" alt="img">
      </div>

      <div class="description">
        <div>text</div>
        <p>text</p>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './scss/colors.scss' as *;

  .container-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
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
  }
</style>