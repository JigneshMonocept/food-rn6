import axios from "axios";
import { getApiKey } from '../storage/secureStore';

 const apiClient= axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
});

apiClient.interceptors.request.use(
  async (config) => {
    const key = await getApiKey();
    if (key) {
      config.headers.Authorization = `Bearer ${key}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
