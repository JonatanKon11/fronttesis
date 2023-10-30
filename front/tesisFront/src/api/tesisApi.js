import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = '';

const tesisApi = axios.create ({
    baseURL
})

tesisApi.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem('token')

    if (token) {
        config.headers['Authorization'] = token
    }

    return config;

})

export default tesisApi;