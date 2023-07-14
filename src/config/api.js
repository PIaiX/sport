import axios from 'axios'

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
const BASE_URL = process.env.REACT_APP_BASE_URL


const apiBody = {
    baseURL: BASE_API_URL,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'include',
        'Content-Type': 'application/json'
    },
    withCredentials: 'include'
}
const $api = axios.create(apiBody)
const $authApi = axios.create(apiBody)
const $authFormDataApi = axios.create(apiBody)
$api.interceptors.request.use((config) => {
    return config
})

$authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$authFormDataApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers['Content-Type'] =  'multipart/form-data'
    return config
})

$authApi.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (error?.response?.status !== 400 && originalRequest && !originalRequest._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await $api.get(apiRoutes.AUTH_REFRESH)
                localStorage.setItem('token', response?.data?.body?.token)
                return $authApi.request(originalRequest)
            } catch (error) {
                // делаем логаут
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
    GET_USER_ME: 'users/me',
    GET_REQUESTS_ME: 'events/requests/my',
    EDIT_ME: 'users',
    VERIFICATION: 'verification',

    //reset password
    RESET_PASSWORD_EMAIL_VERIFY: 'password/forgot',
    RESET_PASSWORD_RESTORE: 'password/restore',

    //user
    USER_ACTIONS: 'user',
    USER_UPDATE_PASSWORD: 'user/updatePassword',
    GET_COUNT_OF_USERS:'users/count',

    //banner
    GET_BANNERS: 'banner/paginate',
    GET_ONE_BANNER: 'banner',

    //news
    GET_NEWS: 'news/paginate',
    GET_ONE_NEW: 'news',

    //events
    GET_ALL_EVENTS: 'events/paginate',
    GET_EVENT: 'events',
    CREATE_EVENT: 'events',
    GET_ACTIVE_EVENTS:'',
    GET_ARCHIVED_EVENTS:'',
    GET_MY_EVENTS:'events/current',
    JOIN_EVENT:'events/requests/send',
    EXIT_EVENT:'events/requests/send',

    //table
    GET_TABLE: 'events/category/tournamentTable',
    ACCEPT_REQUEST: 'events/requests/accept',
    GET_ACCEPT_REQUESTS:'events/requests/myEvent',
    GET_ACCEPTED_REQUESTS:'events/category',
    GET_USERS_BY_ROUND:'events/category/tournamentTable/match/winners',
    CREATE_MATCH:'events/category/tournamentTable/match',
    GET_MATCHES_BY_ROUNDS:'events/category/tournamentTable/match/byRound',
    GET_ALL_USERS:'events/category/byEventWithParticipants',
    GET_REQUESTS:'events/category/byEventWithParticipants',


    //categories
    GET_CATEGORIES: 'discipline',
    GET_WEIGHT_CATEGORY: 'discipline/weightCategory/byAgeCategoryId',
    GET_AGE_CATEGORY: 'discipline/ageCategory/byDisciplineId',
    GET_RANK_CATEGORY: 'discipline/rank/byDisciplineId',

    //team
    TEAM:'team',
    MY_OWN_TEAMS:'team/my',
    MY_REQUESTS_TEAMS:'team/participant',
    SEND_REQUEST_TO_TEAM:'team/requests',
    MY_REQUESTS_TEAM:'team/requests/my',
    LEAVE_TEAM:'team',
    GET_REQUESTS_TO_JOIN_TEAM:'team/requests',
    ACCEPT_REQUESTS:'team/requests/accept',
    KICK_USER:'team/kick',
    //document
    GET_DOCUMENT: 'documents',

}

export { $api, $authApi, $authFormDataApi}
export { BASE_API_URL, BASE_URL }
export { apiRoutes }
export default $api