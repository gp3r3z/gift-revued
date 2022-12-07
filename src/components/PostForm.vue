<template>
    <form @submit.prevent="createGift">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Tag" aria-label="Tag" required
                aria-describedby="basic-addon1" v-model="search.tag">
        </div>
        <div class="input-group mb-3">
            <input pattern="https://.*" required type="text" class="form-control" placeholder="Url" aria-label="Url"
                aria-describedby="basic-addon1" v-model="search.url">
        </div>
        <div class="d-flex justify-content-end p-3">
            <button class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>


<script>
import { reactive, ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js';


export default {
    setup() {
        const search = ref({})
        return {
            search,
            async createGift() {
                try {
                    logger.log('Creating gift', search)
                    await giftsService.createGift(search.value)
                    search.value = {}
                } catch (error) {
                    logger.log(error)
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
</style>