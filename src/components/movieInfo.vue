<template>
<div id="movie-info">
  <div class="container">
  <div class="row">


      <div class="col-6"><img :src="currentMovie.Poster" alt="" class="img"></div>
    <div class="col-6">
    <h1 class="display-4">{{currentMovie.Title}}</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    <button class="fas fa-plus"></button>
    </div>
  </div>
  </div>


</div>
</template>
<script>
export default {
  props: ['currentMovie']
}
</script>
<style>
</style>
