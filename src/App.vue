
<template>
  <div id="app">

    <section id="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
<a class="navbar-brand" href="#">Movied-19</a>
<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<!-- add class- tho the div below collapse navbar-toggleable-sm -->
<div class="navbar " id="navbarColor02" style="">
  <ul class="navbar-nav mr-auto">

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"
      v-model="searchTerm">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="formSubmitted">Search</button>
    </form>
    <li class="nav-item">
      <a class="nav-link" href="#">MY FAVORITES <i class="far fa-heart"></i>

</a>
    </li>


  </ul>

</div>
</nav>
    </section>


<app-movie v-if="!isclicked" :movies="movies" @movieInfo="movieInfo"></app-movie>
<app-movieInfo v-else :currentMovie="currentMovie"></app-movieInfo>

  </div>
</template>

<script>
const API_url='http://www.omdbapi.com/?apikey=1468b66e&t=movie&s=';
import Movie from './components/movie.vue'
import MovieInfo from './components/movieInfo.vue'
export default {

  data(){
    return{
      searchTerm:'',
      movies:{},
      watchLater:[],
      currentMovie:{},
      isclicked:false
    }
  },
  components: {
    appMovie:Movie,
    appMovieInfo:MovieInfo
  },
  methods:{
    formSubmitted(event){
      event.preventDefault();
      let url= `${API_url}${this.searchTerm}`;

      fetch(url)
      .then(response =>{
        return response.json();
      }).then(data =>{
       this.setResults(data.Search)});
    },

    setResults(data){

      this.movies=data;
      console.log(this.movies);
    },
    movieInfo(movie){
      this.currentMovie=movie;
      this.isclicked=true;

    }
  }
,
  name: 'App',

}
</script>

<style>
@media (max-width: 900px) {
    .navbar-header {
        float: none;
    }
    .navbar-toggle {
        display: block;
    }
    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .navbar-collapse.collapse {
        display: none!important;
    }
    .navbar-nav {
        float: none!important;
        margin: 7.5px -15px;
    }
    .navbar-nav>li {
        float: none;
    }
    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
    }
}


</style>
