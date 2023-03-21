import {setFingerprint} from '../app/AppSlice'
import fingerprint from '@fingerprintjs/fingerprintjs'
import {createAsyncThunk} from "@reduxjs/toolkit";
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

export {initFingerprint}