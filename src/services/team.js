import {$authFormDataApi, apiRoutes, $authApi} from "../config/api";

export const createTeam = async (payload)=>{
        const result = await $authFormDataApi.post(`${apiRoutes.TEAM}`, payload)
        return result?.data
}

export const updateTeam = async (id, payload)=>{
        const result = await $authFormDataApi.patch(`${apiRoutes.TEAM}/${id}`, payload)
        return result?.data
}

export const getOneTeam = async (id)=>{
        const result = await $authApi.get(`${apiRoutes.TEAM}/${id}`)
        return result?.data
}

export const getRequests = async (id)=>{
        const result = await $authApi.get(`${apiRoutes.GET_REQUESTS_TO_JOIN_TEAM}/${id}`)
        return result?.data
}

export const kickUser = async (payload)=>{
        const result = await $authApi.patch(`${apiRoutes.KICK_USER}`, payload)
        return result?.data
}

export const getParticipants = async (id)=>{
        const result = await $authApi.get(`${apiRoutes.TEAM}/${id}/participants`)
        return result?.data
}

export const AcceptRequestToMyTeam = async (payloads)=>{
        const result = await $authApi.patch(apiRoutes.ACCEPT_REQUESTS, payloads)
        return result?.data
}

export const getAllTeams = async (payload)=>{
        const result = await $authFormDataApi.get(`${apiRoutes.TEAM}`, {
                params: {...payload, direction: 'desc'}
        })
        return result?.data
}

export const getRequestsToOtherCommands = async ()=>{
        const result = await $authApi.get(apiRoutes.MY_REQUESTS_TEAMS)
        return result?.data
}

export const leaveTeam = async (id)=>{
        const result = await $authApi.patch(`${apiRoutes.LEAVE_TEAM}/${id}/leave`)
        return result?.data
}