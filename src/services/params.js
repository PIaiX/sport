import { $api, apiRoutes } from "../config/api";

export const GetDiscipline = async () => {
    try {
        const result = await $api.get(apiRoutes.GET_CATEGORIES)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetWightCategory = async (payload) => {
    try {
        const result = await $api.get(`${apiRoutes.GET_WEIGHT_CATEGORY}/${payload}`)
        return result?.data.map((element) => ({
            value: element.id,
            label: element.weightTo?
                `От ${element.weightFrom} до ${element.weightTo}`
                : `От ${element.weightFrom}`
        }))
    } catch (error) {
        console.log(error)
        return null
    }
}

export const GetAgeCategory = async (payload) => {
    try {
        const result = await $api.get(`${apiRoutes.GET_AGE_CATEGORY}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetRankCategory = async (payload) => {
    try {
        const result = await $api.get(`${apiRoutes.GET_RANK_CATEGORY}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}