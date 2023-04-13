import {$api, $authApi, apiRoutes} from "../config/api";

export const AcceptRequest = async (payload) => {
    try {
        const result = await $authApi.patch(`${apiRoutes.ACCEPT_REQUEST}` , payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetTable = async (payload) => {
    try {
        const result = await $authApi.get(`${apiRoutes.ACCEPT_REQUEST}` , payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}