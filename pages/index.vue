<template>
  <div class="wrapper">
    <h3>
      Need to work locomotive scroll for every page
    </h3>

    <div class="overflow">
      <img
        data-scroll-speed="-2"
        data-scroll
        src="https://thelabel.codesign.com.bd/media/images/banner-img.2e16d0ba.fill-1920x750.jpg"
        alt=""
      />
    </div>

    <div class="oveflow">
      <img
        data-scroll-speed="-2"
        data-scroll
        src="https://thelabel.codesign.com.bd/media/images/banner-img.2e16d0ba.fill-1920x750.jpg"
        alt=""
      />
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum
      laborum blanditiis iusto temporibus doloremque totam molestiae quaerat,
      earum unde at, cum ratione dolorem harum dolores aut quibusdam ab
      reiciendis mollitia eos non cupiditate! Autem quasi molestias velit, eum
      debitis minus alias cupiditate. Necessitatibus reiciendis a enim quia vel
      totam aperiam, earum in beatae veniam labore, molestiae minus fugit
      repellat sit nemo dolorem voluptates incidunt ullam. Perspiciatis eaque
      excepturi, distinctio soluta itaque ducimus ullam? Tempore nobis rerum
      alias voluptatum nostrum delectus id ipsa provident recusandae
      voluptatibus laudantium debitis itaque eaque deserunt esse repudiandae,
      natus earum qui quasi? Consequatur, nobis ab.
    </p>

    <div class="overflow">
      <img
        data-scroll-speed="-2"
        data-scroll
        src="https://thelabel.codesign.com.bd/media/images/banner-img.2e16d0ba.fill-1920x750.jpg"
        alt=""
      />
    </div>

    <div class="overflow">
      <img
        data-scroll-speed="-2"
        data-scroll
        src="https://thelabel.codesign.com.bd/media/images/banner-img.2e16d0ba.fill-1920x750.jpg"
        alt=""
      />
    </div>

    <div class="overflow">
      <img
        data-scroll-speed="-2"
        data-scroll
        src="https://thelabel.codesign.com.bd/media/images/banner-img.2e16d0ba.fill-1920x750.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "Homepage",
  components: {}
})
export default class Homepage extends Vue {}
</script>

<style scoped>
.overflow {
  overflow: hidden;
}

img {
  margin-bottom: 5rem;
}
</style>
