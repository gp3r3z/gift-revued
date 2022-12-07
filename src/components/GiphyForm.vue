<template>
    <div class="component mt-3">
        <form @submit.prevent="searchGiphy">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Giphy" aria-label="Search Giphy" required
                    aria-describedby="basic-addon1" v-model="search.query">
                <button class="btn btn-primary">Submit</button>

            </div>
        </form>
    </div>
    <div class="mt-3" v-for="gip in giphys">
        <img class="img-fluid" :src="gip.url" />
        <h3> {{ gip.title }}</h3>
        <img src="https://giphy.com/gifs/pbsnature-fnix5judzLJDJTaLgm" />
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { giphysService } from '../services/GiphysService.js'

export default {
    setup() {
        onMounted(() => {
            getGiphys()
        })
        const search = reactive({
            query: ''
        })
        async function getGiphys() {
            try {
                await giphysService.getGiphys()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            giphys: computed(() => AppState.giphys),
            search,
            async searchGiphy() {
                try {
                    logger.log(search)
                    // await giphysService.searchGiphy
                } catch (error) {
                    Pop.error(error)
                }
            },

        }
    }
};
</script>


<style lang="scss" scoped>

</style>