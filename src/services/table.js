import {$api, $authApi, apiRoutes} from "../config/api";

export const AcceptRequest = async (payload) => {
    try {
        const result = await $authApi.patch(`${apiRoutes.ACCEPT_REQUEST}` , payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAcceptRequests = async (payload) => {
    try {
        const result = await $authApi.get(`${apiRoutes.GET_ACCEPT_REQUESTS}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAcceptedRequests = async (payload) => {
    try {
        const result = await $authApi.get(`${apiRoutes.GET_ACCEPTED_REQUESTS}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetTable = async (payload) => {
    try {
        const result = await $authApi.get(`${apiRoutes.GET_TABLE}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const CreateTable = async (payload) => {
    try {
        const result = await $authApi.post(`${apiRoutes.GET_TABLE}`, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}