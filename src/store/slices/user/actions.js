import {bindActionCreators, createAsyncThunk} from '@reduxjs/toolkit'
import {$authApi, $api, apiRoutes, $authFormDataApi} from "../../../config/api";
import {useDispatch} from "react-redux";
const login = createAsyncThunk(
    'user/login',
    async (payload = {}, thunkAPI) => {
    try {
        if (!payload)
            return thunkAPI.rejectWithValue(payload)
        const response = await $api.post(apiRoutes.AUTH_LOGIN, payload)

        if (response && response.status === 201) {
            return response?.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data.message)
    }
})

const registration = createAsyncThunk(
    'user/registration',
    async (payload = {}, thunkAPI) => {
    try {
        const response = await $api.post(apiRoutes.AUTH_REGISTRATION, payload)

        if (response && response.status === 201) {
            return thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data.message)
    }
})

const logout = createAsyncThunk(
    'user/logout',
    async (payload = {}, thunkAPI) => {
        try {
            const response = await $authApi.patch(apiRoutes.AUTH_LOGOUT)
            if (response && response.status === 200) {
                return thunkAPI.fulfillWithValue({})
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

const getMyEvents = createAsyncThunk(
    'user/myEvents',
    async (payload = {}, thunkAPI) => {
        try {
            const response = await $authApi.get(apiRoutes.GET_MY_EVENTS)
            if (response && response.status === 200) {
                return thunkAPI.fulfillWithValue(response?.data)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

const refreshAuth =  createAsyncThunk('user/refresh', async (_, thunkAPI) => {
    try {
        const response = await $api.patch(apiRoutes.AUTH_REFRESH)

        if (response && response.status === 200) {
            return response?.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const getMe =  createAsyncThunk('user/getMe', async (_, thunkAPI) => {
    try {
        const response = await $authApi.get(apiRoutes.GET_USER_ME)
        if (response && response.status === 200) {
            return thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const JoinEvent =  createAsyncThunk('user/joinEvent', async (payload, thunkAPI) => {
    try {
        const response = await $authApi.get(`${apiRoutes.JOIN_EVENT}/${payload}`)
        if (response && response.status === 200) {
            return  thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const ExitEvent =  createAsyncThunk('user/joinEvent', async (payload, thunkAPI) => {
    try {
        const response = await $authApi.get(`${apiRoutes.JOIN_EVENT}/${payload}`)
        if (response && response.status === 200) {
            return  thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const myRequests =  createAsyncThunk('user/myRequests', async (_, thunkAPI) => {
    try {
        const response = await $authApi.get(apiRoutes.GET_REQUESTS_ME)
        if (response && response.status === 200) {
            return thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const editMe =  createAsyncThunk('user/editMe', async (payload, thunkAPI) => {
    try {
        const response = await $authFormDataApi.patch(apiRoutes.EDIT_ME, payload)
        if (response && response.status === 200) {
            return  thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const verification =  createAsyncThunk('verification', async (code, thunkAPI) => {
    try {
        const response = await $authApi.get(apiRoutes.VERIFICATION, {params:{code}})
        if (response && response.status === 200) {
            return  thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const actions ={login, logout, refreshAuth, getMe, editMe, verification, registration, myRequests, getMyEvents, JoinEvent, ExitEvent}
export const useUserAction=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}
export {login, logout, refreshAuth, getMe, editMe, verification, registration, myRequests, getMyEvents, JoinEvent, ExitEvent}

