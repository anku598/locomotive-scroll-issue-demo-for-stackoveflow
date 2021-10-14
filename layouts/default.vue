<template>
  <div data-scroll-container>
    <Navigation />
    <div class="main-app">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Navigation from "~/components/Navigation.vue";

@Component({
  name: "Default",
  components: {
    Navigation
  }
})
export default class Default extends Vue {}
</script>

<style scoped>
.main-app {
  width: 80%;
  margin: 0 auto;
}
</style>
