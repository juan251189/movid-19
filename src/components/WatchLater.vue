<template>

    <section id="watchlater">

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 col-sm-4" v-for="(movie,i) in watchLater" :key="i">

            <div class="movie">


                <div class="movie-poster">
                  <img :src="movie.Poster" class=" img img-thumbnail" alt="" @click="movieInfo(movie)">

                </div>
                  <p class="mt-2 movie-title">{{movie.Title}}</p>

              </div>
        </div>
      </div>
    </div>
      <hr>
    </section>


</template>
<script>
export default {
  name: "",
  data: () => ({


  }),
  props: ['watchLater','movieInfo']
}
</script>
<style lang="css" scoped>

</style>
