<script>


export default {
  name:'Main',

}
</script>

<template>
  <main>
    <div class="container">

      <div class="found-cards">
        <div class="text">Found 39 cards</div>
      </div>

      <div class="container-cards">

      </div>
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
    background: rgb(33,37,41);
    background: linear-gradient(0deg, rgba(255,255,255,1) 85%, rgba(33,37,41,1) 30%);
    margin:70px;
    height: 500px;
  }

  .found-cards{
    // background-color:$tertiary-color;
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

  .container-cards{
    height:200px;
  }
}
</style>