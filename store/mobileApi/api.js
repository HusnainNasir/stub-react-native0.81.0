import axios from 'axios';
import { getData, STORAGE_KEYS } from '../../utils/storage';
import { ShowToast } from '../../utils/helper';
import { ToastType } from '../../theme';
import { reset } from '../../utils/NavigationService';

const mobileApi = axios.create({
  baseURL: //'https://brashiest-buford-chubbiest.ngrok-free.app/',
    process.env.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

mobileApi.interceptors.request.use(config => {
  try {
    const token = getData(STORAGE_KEYS.Token);
    console.log(token, 'Token');
    config.headers = {
      Authorization: token ? `Token ${token}` : '',
      // Platform: 'mobile',
      'time-zone': Intl.DateTimeFormat().resolvedOptions().timeZone,
      ...config.headers,
    };

    return config;
  } catch (error) {
    console.error('Error in Request Interceptor:', error);
    return config;
  }
});

mobileApi.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

const responseHandler = response => {
  console.log(
    '🚀 ~ interceptors ~ shipping-api ~ response',
    JSON.stringify(response?.data),
  );
  return response;
};

const errorHandler = async error => {
  console.log('🚀 ~ interceptors ~ error', JSON.stringify(error));
  if (!error.response) {
    if (error?.message === 'Network Error') {
      ShowToast(
        'No connectivity! Please check your internet connection and try again.',
      );
      return Promise.reject({
        data: {
          message:
            'No connectivity! Please check your internet connection and try again.',
        },
      });
    }
  } else if (error?.response?.status === 401) {
    ShowToast(
      error?.response?.data?.errors ?? 'Session Expired, Please Login Again.',
    );

    reset();
    return Promise.reject(error.response);
  } else if (!error.response?.data) {
    ShowToast('Oops, Something went wrong!.');
    return Promise.reject(error);
  } else {
    ShowToast(
      error?.response?.data?.error ??
      error?.response?.data?.message ??
      'Oops, Something went wrong!.',
      ToastType.Error,
    );
    return Promise.reject(
      error?.response?.data?.error ??
      error?.response?.data?.message ??
      'Oops, Something went wrong!.',
    );
  }
};


export const apiService = {

};
