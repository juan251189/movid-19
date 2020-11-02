
<template>
<div id="app">


<section id="header" class="mb-2">

  <nav class="navbar navbar-dark bg-dark ">
  <a class="navbar-brand" @click="movies={}">Movied-19 <i class="fas fa-ticket-alt" ></i></a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
    v-model="searchTerm">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
    @click="formSubmitted">Search</button>
  </form>
  <li class="nav-item">
    <a class="nav-link" href="#" @click="myfavourite=!myfavourite"
      :style="[myfavourite ? {color:'#ccc051',boxShadow:'1px 1px 3px rgb(215, 198, 43,0.7)'} : '']">MY FAVORITES <i class="far fa-heart"></i>

    </a>
  </li>
</nav>
</section>




<!--
  <section id="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a class="navbar-brand" href="#">Movied-19</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    // add class- tho the div below collapse navbar-toggleable-sm
      <div class="navbar " id="navbarColor02" style="">
        <ul class="navbar-nav mr-auto">

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="searchTerm">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="formSubmitted">Search</button>
          </form>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="myfavourite=!myfavourite">MY FAVORITES <i class="far fa-heart"></i>

            </a>
          </li>


        </ul>

      </div>
    </nav>
  </section>
-->
  <app-watchLater v-if="myfavourite && !isclicked"

  :watchLater="watchLater"

  :movieInfo="movieInfo"

  ></app-watchLater>

  <section id="movies" v-if="!isclicked && !myfavourite">
    <div class="container-fluid">
      <div class="row">

        <app-movie class="col-md-3 col-sm-4 col-6" v-for="(movie,i) in movies" :key="i" :movie="movie" :movieInfo="movieInfo"></app-movie>


      </div>

    </div>
  </section>

  <app-movieInfo v-if="isclicked " :watchLater="watchLater"
  :currentMovie="currentMovie"
  @addWatchLater="addWatchLat" @removeWatchLater="removeWatchLat"
  @isInfoclicked="isclicked=false"></app-movieInfo>

</div>
</template>

<script>
const API_url = 'http://www.omdbapi.com/?apikey=1468b66e&t=movie&s=';
import Movie from './components/movie.vue'
import MovieInfo from './components/movieInfo.vue'
import WatchLater from './components/WatchLater.vue'
export default {

  data() {
    return {
      searchTerm: '',
      movies: {},
      watchLater: [],
      currentMovie: {},
      isclicked: false,
      myfavourite: false
    }
  },
  components: {
    appMovie: Movie,
    appMovieInfo: MovieInfo,
    appWatchLater: WatchLater
  },
  methods: {
    formSubmitted(event) {
      event.preventDefault();
      let url = `${API_url}${this.searchTerm}`;

      fetch(url)
        .then(response => {

          return response.json();

        }).then(data => {

          this.setResults(data.Search)
        });
    },

    setResults(data) {

      this.movies = data;
      //console.log(this.movies);
    },
    movieInfo(movie) {
      this.currentMovie = movie;
      this.isclicked = !this.isclicked;

    },
    addWatchLat() {
      this.watchLater.push(this.currentMovie);
      console.log(this.watchLater);
    },
    removeWatchLat() {
      const index = this.watchLater.map(function(item) {
        return item.imdbID;
      }).indexOf(this.currentMovie.imdbID);
      this.watchLater.splice(index, 1);
      console.log("are you sure ");
    }
  },
  name: 'App',

}
</script>

<style>

body {
  background-color:#131313;
  color: white;
  overflow-x: hidden;
}


  .navbar{
    min-height: 70px;
    background-color: #0b0b0b!important;
  }
  .nav-item{
    list-style-type: none;
    color: white;
  }
  .nav-item>a{
    color: #c8c8c8;
  }

  @media only screen and (max-width: 500px) {
.navbar{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#header .navbar-brand{
  margin-bottom: 15px;
  font-size: 2.5rem;
}

}
</style>
