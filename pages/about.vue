<template>
  <div class="wrapper">
    <h2>This Is about Page</h2>
    <img
      src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
      alt=""
    />
    <img
      src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "about",
  components: {}
})
export default class about extends Vue {}
</script>

<style scoped>
h2 {
  margin-bottom: 50px;
}

img {
  margin-bottom: 60px;
}
p {
  margin-bottom: 60px;
  display: block;
}
</style>
