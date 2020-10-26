<template>
  <div class="home ">
    <div class="container-fluid m-0 p-0">

      <Landing></Landing>


    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {

    Landing

  }
};
</script>
<style>
.home{
  margin: 0px;
  padding: 0px;
  overflow-y: hidden;


}
</style>
