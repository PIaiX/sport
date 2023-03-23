import {createAsyncThunk} from '@reduxjs/toolkit'
import {$authApi, $api, apiRoutes} from "../../../config/api";

const login = createAsyncThunk(
    'user/login',
    async (payload = {}, thunkAPI) => {
    try {
        const response = await $api.post(apiRoutes.AUTH_LOGIN, payload)

        if (response && response.status === 201) {
            return response?.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
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
            return  thunkAPI.fulfillWithValue(response?.data)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export {login, logout, refreshAuth, getMe}