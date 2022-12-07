import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { giphyApi } from "./AxiosService.js"
import { Giphy } from '../models/Giphy.js'

class GiphysService {
    async getGiphys() {
        const res = await giphyApi.get()

        console.log(res.data)
        AppState.giphys = res.data.data.map(g => new Giphy(g))
        logger.log(AppState.giphys)
    }


}

export const giphysService = new GiphysService()