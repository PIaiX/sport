import {createAsyncThunk} from '@reduxjs/toolkit'
import {$authApi, apiRoutes} from "../../../config/api";

const login = createAsyncThunk(
    'user/login',
    async (payload = {}, thunkAPI) => {
    try {
        const response = await $authApi.post(apiRoutes.AUTH_LOGIN, payload)

        if (response && response.status === 200) {
            return response?.data?.body
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const logout = createAsyncThunk(
    'user/logout',
    async (payload = {}, thunkAPI) => {
        try {
            const response = await $authApi.post(apiRoutes.AUTH_LOGIN, payload)

            if (response && response.status === 200) {
                return response?.data?.body
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })


export {login, logout}