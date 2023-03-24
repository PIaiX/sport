import {$api, apiRoutes, $authApi} from "../config/api";

export const GetAllEvents = async (payload)=>{
    try{
        const result = await $api.get(apiRoutes.GET_ALL_EVENTS, payload)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}

export const GetOneEvent = async (payload)=>{
    try{
        const result = await $api.get(apiRoutes.GET_EVENT, payload)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}

export const CreateEvent = async (payload)=>{
    try{
        const result = await $authApi.post(apiRoutes.CREATE_EVENT, payload)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}
