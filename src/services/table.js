import {$api, apiRoutes} from "../config/api";

export const GetAgeCategory = async (payload) => {
    try {
        const result = await $api.get(`${apiRoutes.GET_AGE_CATEGORY}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}