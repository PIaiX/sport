import {$api, apiRoutes} from "../config/api";

export const GetBanners = async ()=>{
    try{
        const result = await $api.get(apiRoutes.GET_BANNER)
        return result?.data?.body
    }catch(error){
        console.log(error)
    }
}