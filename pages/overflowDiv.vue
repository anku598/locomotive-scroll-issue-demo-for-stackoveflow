<template>
  <div class="wrapper">
    <h2>Scrollable Div</h2>

    <b-container fluid>
      <b-row>
        <b-col lg="6" xl="6" md="6" sm="6" cols="12">
          <div class="left-wrapper">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cupiditate consectetur reprehenderit ad recusandae sapiente
                saepe iusto omnis a at mollitia beatae, fugit vero esse corporis
                maxime officia odit id blanditiis. Doloremque ut quo officia
                quas quibusdam, facilis eum, nulla dolorem tempore quia iste
                voluptas adipisci repudiandae dolore! Sint, perferendis.
              </p>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cupiditate consectetur reprehenderit ad recusandae sapiente
                saepe iusto omnis a at mollitia beatae, fugit vero esse corporis
                maxime officia odit id blanditiis. Doloremque ut quo officia
                quas quibusdam, facilis eum, nulla dolorem tempore quia iste
                voluptas adipisci repudiandae dolore! Sint, perferendis.
              </p>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cupiditate consectetur reprehenderit ad recusandae sapiente
                saepe iusto omnis a at mollitia beatae, fugit vero esse corporis
                maxime officia odit id blanditiis. Doloremque ut quo officia
                quas quibusdam, facilis eum, nulla dolorem tempore quia iste
                voluptas adipisci repudiandae dolore! Sint, perferendis.
              </p>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cupiditate consectetur reprehenderit ad recusandae sapiente
                saepe iusto omnis a at mollitia beatae, fugit vero esse corporis
                maxime officia odit id blanditiis. Doloremque ut quo officia
                quas quibusdam, facilis eum, nulla dolorem tempore quia iste
                voluptas adipisci repudiandae dolore! Sint, perferendis.
              </p>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cupiditate consectetur reprehenderit ad recusandae sapiente
                saepe iusto omnis a at mollitia beatae, fugit vero esse corporis
                maxime officia odit id blanditiis. Doloremque ut quo officia
                quas quibusdam, facilis eum, nulla dolorem tempore quia iste
                voluptas adipisci repudiandae dolore! Sint, perferendis.
              </p>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>
          </div>
        </b-col>

        <b-col
          lg="4"
          xl="4"
          md="4"
          sm="4"
          offset-lg="1"
          offset-xl="1"
          offset-md="1"
          offset-sm="1"
          cols="12"
        >
          <div class="scrollable-div">
            <div class="item">
              <h3>Item One</h3>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div class="item">
              <h3>Item two</h3>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div class="item">
              <h3>Item Three</h3>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div class="item">
              <h3>Item Four</h3>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>

            <div class="item">
              <h3>Item Five</h3>
              <img
                src="https://thelabel.codesign.com.bd/media/images/right-featured-img.2e16d0ba.fill-760x760.jpg"
                alt=""
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({
  name: "OverflowDiv",
  components: {}
})
export default class OverflowDiv extends Vue {}
</script>

<style scoped>
.item {
  margin-bottom: 30px;
}
h3 {
  font-size: 14px;
}

.scrollable-div img {
  max-width: 300px;
  width: 100%;
}

.scrollable-div {
  max-height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #e3e3e3 transparent;
  margin-top: 16rem;
}
</style>
