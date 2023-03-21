import {$api, apiRoutes} from "../config/api";

export const authRegistration = async (payload = {}) => {
    try {
        const response = await $api.post(apiRoutes.AUTH_REGISTRATION, payload)

        if (response && response.status === 200) {
            return response?.data?.body
        }
    } catch (error) {
        throw error
    }
}