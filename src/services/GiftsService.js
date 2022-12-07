import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { bcwApi } from "./AxiosService.js"


class GiftsService {
    async getGifts() {
        const res = await bcwApi.get()
        console.log(res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }
    async openGift(giftId) {
        let openGift = AppState.gifts.find(gift => gift.id == giftId)
        openGift.opened = true

        let index = AppState.gifts.findIndex(g => g.id == giftId)

        const res = await bcwApi.put(giftId, openGift)

        AppState.gifts.splice(index, 1, new Gift(res.data))

    }
    async createGift(giftBody) {
        const res = await bcwApi.post('', giftBody)
        logger.log(res.data)
    }

}


export const giftsService = new GiftsService()