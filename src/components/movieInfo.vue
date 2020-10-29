<template>
<div id="movie-info">
  <div class="container">
    <div class="row movieInfo">


      <div @click="isInfoclicked">
        <i class="fas fa-times-circle removeInfo" ></i>
      </div>

      <div class="col-12 col-sm-6" style="text-align:center;"><img :src="currentMovie.Poster" alt="" class="img" ></div>
      <div class="col-12 col-sm-6">
        <h1 class="display-4">{{currentMovie.Title}}</h1>
        <div class="movie-details">
          <p class="movie-year ">{{currentMovie.Year}} Released</p>
          <span class="movie-type">{{currentMovie.Type}}</span>
          <span class="movie-type">Type</span>
        </div>


        <h4>Plot Summary</h4>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      

<div v-if="!isinWatchlater">
          <i class="fas fa-plus-circle addicon" @click="addWatchlater" ></i>Add to favorites
</div>
<div v-else>
          <i class="fas fa-minus-circle removeicon" @click="removeWatchlater" ></i>Remove from favorites
</div>


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
  margin: 20px 5px;
  background-color: #191819;
  color:white;
  font-family: sans-serif;
  padding-top: 20px;
}

.movieInfo img{
  border-radius: 10px;
  justify-content: flex-end;

}
.movieInfo h1{
  font-size: 3.5rem;
  font-weight: 700;
  font-family: sans-serif,'monserrate';
}
.movie-type{
  color:#a9b4a0;
  border:1px solid #c2c2c2;
  margin-right: 10px;
  border-radius: 7px;
  padding: 5px;
}

.movie-details{
  margin-bottom: 40px;
}

.movie-year{
  color:#bad0cb;
}
.movie-type{
  margin-left: 5px;

}

.removeInfo{
  position: absolute;
  top:-1%;
  right:-1%;
  color:#636467;
  background-color: white;
  border-radius: 20px;
  font-size: 2.1em;
  z-index: 1;
  transition: all .2s;

}

.removeInfo:hover{

  animation: rotate 2s;
  color:#d72c0e;
}

@keyframes rotate {

  100%{
    transform: rotate(180deg);
    transition:color 2s;}

}
.removeicon{
  position: relative;
  top:2px;
  font-size: 1.5em;
  color:#d03200;
  margin-right: 7px;
}
.addicon{
  position: relative;
  top:2px;
  font-size: 1.5em;
  color:#1a7001;
  margin-right: 7px;
}
</style>
