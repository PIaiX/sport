import axios from 'axios'

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
const BASE_URL = process.env.REACT_APP_BASE_URL


const apiBody = {
    baseURL: BASE_API_URL,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':'include',
        'Content-Type': 'application/json',
        'Fingerprint':localStorage.getItem('fingerprint')
    },
    withCredentials:'include'
}
const $api = axios.create(apiBody)
const $authApi = axios.create(apiBody)

$api.interceptors.request.use((config) => {
    return config
})

$authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$authApi.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (error?.response?.status === 400 && originalRequest && !originalRequest._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await $api.get(apiRoutes.AUTH_REFRESH)
                localStorage.setItem('token', response?.data?.body?.token)
            } catch (error) {
                console.log(error)
            }
        }
        return Promise.reject(error)
    }
)

const apiRoutes = {
    //auth
    AUTH_REGISTRATION: 'auth/register',
    AUTH_REGISTRATION_EMAIL_VERIFY: 'auth/register/emailVerify',
    AUTH_LOGIN: 'auth/login',
    AUTH_LOGOUT: 'auth/logout',
    AUTH_REFRESH: 'auth/refreshToken',
    GET_USER_ME:'users/me',
    EDIT_ME:'users',
    VERIFICATION:'verification',

    //reset password
    RESET_PASSWORD_EMAIL_VERIFY: 'auth/forgotPassword/emailVerify',
    RESET_PASSWORD_CONFIRM: 'auth/forgotPassword',

    //user
    USER_ACTIONS: 'user',
    USER_UPDATE_PASSWORD: 'user/updatePassword',

    //banner
    GET_BANNER: 'banner',

    //news
    GET_NEWS: 'news',
    GET_ONE_NEW:'new',

    //events
    GET_ALL_EVENTS:'events/ALL',
    GET_EVENT:'event',
    CREATE_EVENT:'events',

    //categories
    GET_CATEGORIES: 'categories',
    GET_PARAMS: 'params',

    //document
    GET_DOCUMENT:'documents',
}

export {$api, $authApi}
export { BASE_API_URL, BASE_URL }
export { apiRoutes}