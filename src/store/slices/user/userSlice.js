import {createSlice} from "@reduxjs/toolkit";
import {login, logout} from './actions'
import {refreshAuth} from "../../../services/user";
const initialState={
    user:{
        "user": {
            "id": 1,
            "email": "user@mail.com",
            "phone": "+79876543210",
            "firstName": "Denis",
            "lastName": "Wolf",
            "patronymic": "Sergeevich",
            "gender": true,
            "isVerified": false,
            "verificationCode": "123456",
            "referalCode": "c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e",
            "isPublicProfile": true,
            "photo": "me.jpg",
            "birthDate": "11.01.2011",
            "height": 178,
            "weight": 78,
            "address": "Puskina, 42",
            "city": "Kazan",
            "district": "Pervomayskiy",
            "region": "Tatarstan",
            "password": {
                "userId": 2,
                "password": "asdf_1s!@41$#afafg9"
            },
            "ranks": [
                "string"
            ],
            "teams": [
                "string"
            ]
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    checked:true,
    auth:true,
    loginError:null
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action){
            state.user = action.payload.user
            state.user.auth=true
            state.checked = true
            localStorage.setItem('token', action.payload.accessToken)
        }
    },
    extraReducers:{
        [login.fulfilled]:(state, action)=>{
            state.user=action.payload.user
            state.checked=true
            state.auth=true
            state.user.loginError = null
            localStorage.setItem('token', action?.payload?.token)
        },
        [login.rejected]:(state, action)=>{
            state.checked=true
            state.auth=false
            state.loginError = action.payload
        },
        [logout.pending]:(state)=>{
            state.auth=false;
            state.user.user=null;
            localStorage.removeItem('token')
        },
        [refreshAuth.fulfilled]: (state, action) => {
            localStorage.setItem('token', action?.payload?.accessToken)
            state.isLoadingRefresh = false
            state.auth = true
            state.user = action?.payload?.user
        },
        [refreshAuth.rejected]:(state)=>{
            localStorage.removeItem('token')
            state.checked=true;
        }
    }
})

export const RegUserActions= userSlice.actions;
export const RegReducers= userSlice.reducer;