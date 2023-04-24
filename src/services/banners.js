import {$api, $authApi, $authFormDataApi, apiRoutes} from "../config/api";

export const GetBanners = async ()=>{
    try{
        const result = await $api.get(apiRoutes.GET_BANNERS, {
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

export const DeleteOneBanner = async (id)=>{
    try{
        const result = await $authApi.delete(`${apiRoutes.GET_ONE_BANNER}/${id}`)
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const CreateOneBanner = async (payload)=>{
    try{
        const result = await $authFormDataApi.post(apiRoutes.GET_ONE_BANNER, payload)
        return result?.data
    }catch(error){
        console.log(error)
    }
}
export const EditOneBanner = async (id, payload)=>{
    try{
        const result = await $authFormDataApi.patch(`${apiRoutes.GET_ONE_BANNER}/${id}`, payload)
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const GetOneBanner = async (payload)=>{
    try{
        const result = await $authFormDataApi.get(`${apiRoutes.GET_ONE_BANNER}/${payload}`)
        return result?.data
    }catch(error){
        console.log(error)
    }
}