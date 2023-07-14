import {setFingerprint} from '../app/AppSlice'
import fingerprint from '@fingerprintjs/fingerprintjs'
import {bindActionCreators, createAsyncThunk} from "@reduxjs/toolkit";
import {$authApi, apiRoutes} from "../../../config/api";
import {useDispatch} from "react-redux";
const initFingerprint = createAsyncThunk('fingerprint/init', async (_, thunkAPI) => {
    fingerprint
        .load()
        .then((fp) => fp.get())
        .then((result) => {
            if (result) {
                thunkAPI.dispatch(setFingerprint(result.visitorId))
            }
        })
})


const getCountOfUsers = createAsyncThunk(
    'app/getCountOfUsers',
    async (_, thunkAPI) => {
        try {
            const response = await $authApi.get(apiRoutes.GET_COUNT_OF_USERS)
            if (response && response.status === 200) {
                return thunkAPI.fulfillWithValue(response.data)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

const actions = {getCountOfUsers}
export const useAppAction=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}

export {initFingerprint, getCountOfUsers}

