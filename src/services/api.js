import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
  baseURL: `https://housin-serve-adonis.herokuapp.com`,
});

api.interceptors.request.use(async (config) => {
  try {
    const credentials = await AsyncStorage.getItem('@HousinApp:userCredentials');
    const UserCredentials = JSON.parse(credentials)
    if (UserCredentials.token) {
      config.headers.Authorization = `Bearer ${UserCredentials.token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default api;
