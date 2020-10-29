

<template>
<div id="movie">


    <div class="movie-poster">
      <img :src="movie.Poster" class=" img img-thumbnail" alt="" @click="movieInfo(movie)">

    </div>
      <p class="mt-2">{{movie.Title}}</p>

  </div>

</template>
<script>
export default {
  name: "",
  data: () => ({


  }),
  props: ['movie', 'movieInfo']

}
</script>
<style>


#movie{
  margin-top: 15px;
  transition: all .5;
}
#movie :hover{
  opacity: 0.6;

}

#movie p{
  text-align: center;
  z-index: 2;

}

.movie-poster{
  position:relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:1px 15px rgb(17, 17, 16);

}

.movie-poster
.img-thumbnail  {
  padding: 0!important;
  border:none!important;
  width: 500px;

  background-position: center;
  background-size: cover;
  transition: all .4s;
  z-index:1;

}
.img-thumbnail::before {
  content: "";
display: none;
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(52, 73, 94, 0.75);
}

.movie-poster:hover .img-thumbnail,
.movie-poster:focus .img-thumbnail{
  transform: scale(1.2);

}
</style>
