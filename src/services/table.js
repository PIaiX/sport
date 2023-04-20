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

export const GetAllUsers = async (payload) => {
    try {
        const result = await $api.get(`${apiRoutes.GET_ALL_USERS}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAcceptedRequests = async (payload) => {
    try {
        const result = await $authApi.get(`${apiRoutes.GET_ACCEPTED_REQUESTS}/${payload}`)
        return result?.data?.participants
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

export const GetAllUsersByRound = async (payload) => {
    try {
        const result = await $authApi.post(`${apiRoutes.GET_USERS_BY_ROUND}`, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const CreateMatch = async (payload) => {
    try {
        const result = await $authApi.post(`${apiRoutes.CREATE_MATCH}`, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const PatchMatch = async (payload, id) => {
    try {
        const result = await $authApi.patch(`${apiRoutes.CREATE_MATCH}/${id}`, payload)
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

export const GetMatchesByRound = async (payload) => {
    try {
        const result = await $authApi.post(`${apiRoutes.GET_MATCHES_BY_ROUNDS}`, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}