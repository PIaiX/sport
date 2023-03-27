import {$api, apiRoutes} from "../config/api";

export const GetDiscipline = async ()=>{
    try{
        const result = await $api.get(apiRoutes.GET_CATEGORIES)
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const GetWightCategory = async (payload)=>{
    try{
        const result = await $api.get(`${apiRoutes.GET_WEIGHT_CATEGORY}/${payload}`)
        return result?.data
    }catch(error){
        console.log(error)
    }
}
export const GetAgeCategory = async (payload)=>{
    try{
        const result = await $api.get(`${apiRoutes.GET_AGE_CATEGORY}/${payload}`)
        return result?.data
    }catch(error){
        console.log(error)
    }
}