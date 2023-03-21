import {createAsyncThunk} from '@reduxjs/toolkit'
import {$api, apiRoutes} from '../config/api'

const login = createAsyncThunk('auth/login', async (payload = {}, thunkAPI) => {
    try {
        const response = await $api.post(apiRoutes.AUTH_LOGIN, payload)

        if (response && response.status === 200) {
            return response?.data?.body
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await $api.delete(apiRoutes.AUTH_LOGOUT)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const refreshAuth =  createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const response = await $api.patch(apiRoutes.AUTH_REFRESH)

        if (response && response.status === 200) {
            return response?.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export {login, logout, refreshAuth}