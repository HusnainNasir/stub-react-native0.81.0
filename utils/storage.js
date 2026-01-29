import {createMMKV, MMKV} from 'react-native-mmkv';


let storage;

try {
  storage = createMMKV({
    id: 'user-storage',
  })

 
  console.log('✅ MMKV initialized');
} catch (e) {
  console.error('❌ MMKV failed:', e.message);
}

export const storeData = (key, data) => {
  if (data === null || data === undefined) return;
  storage?.set(key, JSON.stringify(data));
};

export const getData = key => {
  const data = storage?.getString(key);
  if (data) return JSON.parse(data);
  return null;
};

export const removeData = key => {
  storage?.delete(key);
};

export const clearAll = () => {
  storage?.clearAll();
};

export const STORAGE_KEYS = {
  Token: 'token',
  UserData: 'userData',
  Email: 'email',
};
