import {$api, apiRoutes} from "../config/api";

export const GetCategories = async ()=>{
    try{
        const result = await $api.get(apiRoutes.GET_CATEGORIES)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}

export const GetParams = async (payload)=>{
    try{
        const result = await $api.get(apiRoutes.GET_PARAMS, payload)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}