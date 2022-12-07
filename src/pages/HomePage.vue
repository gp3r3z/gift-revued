<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-3 bg-dark">
        <h2>Gifted</h2>
        <div class="p-3">
          <!-- SECTION SearchForm -->
          <PostForm />
          <div class="border border-bottom-3"></div>
          <!-- <form action="">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Tag" aria-label="Tag" required
                aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <input pattern="https://.*" required type="text" class="form-control" placeholder="Url" aria-label="Url"
                aria-describedby="basic-addon1">
            </div>
            <div class="d-flex justify-content-end p-3">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form> -->
          <GiphyForm />
        </div>
      </div>
      <div class="col-9 bg-secondary">
        <div class="row justify-content-around p-3">
          <GiftCard v-for="g in gifts" :gifts="g" />
        </div>
        <!-- SECTION GiftCard componets -->
        <!-- <div class="row justify-content-around p-3">
          <div class="col-3 card p-2" v-for="g in gifts">
            <img class="img-fluid" :src="g.url" v-if="g.opened == true" alt="">
            <img class="img-fluid" src="https://cdn.pixabay.com/photo/2021/01/20/14/53/bow-5934489_960_720.png" v-else
              alt="">
            <h4>{{ g.tag }}</h4>
          </div>
        </div> -->
      </div>

    </section>
  </div>
</template>

<script>
import { giftsService } from '../services/GiftsService.js';
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';


export default {
  setup() {
    onMounted(() => {
      getGifts()
    })
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error)
        Pop.error(error)
      }
    }
    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
