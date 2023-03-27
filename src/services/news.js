import {$api, apiRoutes} from "../config/api";

export const GetNews = async (payload)=>{
    try{
        const result = await $api.get(apiRoutes.GET_NEWS, {
            params:{
                skip:0,
                take:10
            }
        })
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}

export const GetOneNew = async (payload)=>{
    try{
        const result = await $api.get(apiRoutes.GET_ONE_NEW, payload)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}