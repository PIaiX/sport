import {$api, apiRoutes} from "../config/api";

export const sendLinkOnEmailForChangePassword = async (payload) => {
    try {
        const result = await $api.post(apiRoutes.RESET_PASSWORD_EMAIL_VERIFY, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}
export const changePassword = async (payload) => {
    try {
        const result = await $api.patch(apiRoutes.RESET_PASSWORD_RESTORE, payload)
        return result?.data
    } catch (error) {
        console.log(error)
    }
}