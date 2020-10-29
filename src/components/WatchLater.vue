<template>

    <section id="watchlater">
      <h1>
        My favourites1
      </h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 col-sm-4" v-for="(movie,i) in watchLater" :key="i">
            <img :src="movie.Poster" class=" img img-thumbnail" alt="" @click="movieInfo(movie)">
            <h4>{{movie.Title}}</h4>
          </div>
        </div>
      </div>
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
<style lang="scss" scoped>
</style>
