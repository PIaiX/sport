import {$api, apiRoutes, $authFormDataApi, $authApi} from "../config/api";

export const GetNews = async (payload)=>{
    try{
        const result = await $api.get(apiRoutes.GET_NEWS, {
            params:{
                skip:0,
                take:10
            }
        })
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const GetOneNew = async (payload)=>{
    try{
        const result = await $api.get(`${apiRoutes.GET_ONE_NEW}/${payload}`)
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const CreateOneNew = async (payload)=>{
    try{
        const result = await $authFormDataApi.post(apiRoutes.GET_ONE_NEW, payload)
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const EditOneNew = async (id, payload)=>{
    try{
        const result = await $authFormDataApi.patch(`${apiRoutes.GET_ONE_NEW}/${id}`, payload)
        return result?.data
    }catch(error){
        console.log(error)
    }
}

export const DeleteOneNew = async (payload)=>{
    try{
        const result = await $authApi.delete(`${apiRoutes.GET_ONE_NEW}/${payload}`)
        return result?.data
    }catch(error){
        console.log(error)
    }
}



