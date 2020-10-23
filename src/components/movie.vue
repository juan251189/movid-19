

<template>
<div id="movie">
  <section id="searchContent">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-4" v-for="(movie,i) in movies" :key="i">

          <img :src="movie.Poster" class=" img img-thumbnail" alt="" @click="movieInfo(movie)">
          <h4>{{movie.Title}}</h4>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({


  }),
  props: ['movies'],
  methods: {
    movieInfo(movie) {
      console.log(movie);
      this.$emit('movieInfo',movie);


    }
  }
}
</script>
<style>


.img-thumbnail .img{
  border:10px solid black;
width: 500px;}
</style>
