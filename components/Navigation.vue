<template>
  <div class="navigation">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/overflowdiv">Scrollable Div</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "Navigation",
  components: {}
})
export default class Navigation extends Vue {}
</script>

<style scoped>
.navigation {
  width: 80%;
  margin: 0 auto;
  color: #000;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
}

a {
  margin-right: 15px;
  text-decoration: none;
  color: rgb(247, 136, 10);
  text-align: center;
  font-weight: bold;
}
</style>
