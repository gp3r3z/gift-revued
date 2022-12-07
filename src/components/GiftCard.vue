<template>

    <div class="col-4 card elevation-1 p-2" @click="openGift(gifts.id)">
        <img class="img-fluid" :src="gifts.url" v-if="gifts.opened == true" alt="">
        <img class="img-fluid" src="https://cdn.pixabay.com/photo/2021/01/20/14/53/bow-5934489_960_720.png" v-else
            alt="">

        <h4>{{ gifts.tag }}</h4>
    </div>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from '../models/Gift.js';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';
export default {
    props: { gifts: Gift },
    setup() {
        async function openGift(giftId) {
            try {
                logger.log('Opening gift', giftId)
                await giftsService.openGift(giftId)
            } catch (error) {
                Pop.error(error)
            }

        }
        return {
            openGift
        }
    }
};
</script>


<style lang="scss" scoped>

</style>