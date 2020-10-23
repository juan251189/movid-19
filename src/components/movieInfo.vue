<template>
<div id="movie-info">
  <div class="container">
    <div class="row movieInfo">


      <div @click="isInfoclicked">
        <i class="fas fa-times-circle removeInfo" ></i>
      </div>

      <div class="col-6"><img :src="currentMovie.Poster" alt="" class="img"></div>
      <div class="col-6">
        <h1 class="display-4">{{currentMovie.Title}}</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>

        <i class="fas fa-plus-circle" @click="addWatchlater" v-if="!isinWatchlater"></i>
        <i class="fas fa-minus-circle" @click="removeWatchlater" v-else></i>


      </div>
    </div>
  </div>


</div>
</template>
<script>
export default {
  props: ['currentMovie', 'watchLater'],
  methods: {
    addWatchlater() {
      //i need to check that the movie does not exist in watch later
      this.$emit('addWatchLater', this.currentMovie);
    },
    removeWatchlater() {
      this.$emit('removeWatchLater', this.currentMovie);

    },
    isInfoclicked(){
      this.$emit('isInfoclicked');
      console.log("we got this");
        }

  },
  computed: {
    isinWatchlater() {
      let result = this.watchLater.find(x => x.imdbID == this.currentMovie.imdbID);
      console.log(result);
      return result;
    }
  }
}
</script>
<style>
.movieInfo {
  position: relative;
  margin-top: 20px;
  background-color: #191819;
  color:white;
  font-family: sans-serif;
  padding-top: 20px;
}

.movieInfo img{
  border-radius: 10px;
}

.removeInfo{
  position: absolute;
  top:-1%;
  right:-1%;
  color:#636467;
  background-color: white;
  border-radius: 20px;
  font-size: 2.5em;
  z-index: 1;
}
</style>
