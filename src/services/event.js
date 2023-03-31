import { $api, apiRoutes, $authApi } from "../config/api";

export const GetAllEvents = async (payload) => {
    try {
        const result = await $api.get(apiRoutes.GET_ALL_EVENTS, {
            params: { ...payload }
        })
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const GetOneEvent = async (payload) => {
    try {
        const result = await $api.get(`${apiRoutes.GET_EVENT}/${payload}`)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const CreateEvent = async (payload) => {
    try {
        const result = await $authApi.post(apiRoutes.CREATE_EVENT, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const getActiveEvents = async (payload) => {
    try {
        const result = await $authApi.post(apiRoutes.GET_ACTIVE_EVENTS, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}

export const getArchivedEvents = async (payload) => {
    try {
        const result = await $authApi.post(apiRoutes.GET_ARCHIVED_EVENTS, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}
