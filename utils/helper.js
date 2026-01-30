import Toast from 'react-native-toast-message';
// import parsePhoneNumberFromString from "libphonenumber-js";
// import { URL, URLSearchParams } from "react-native-url-polyfill"
import {SCREEN_HEIGHT, ToastType} from '../theme';

export const ShowToast = (
  message,
  type = ToastType.Error,
  time = 2000,
  position = 'bottom',
) => {
  return Toast.show({
    type: type,
    position: position,
    topOffset: SCREEN_HEIGHT * 0.12,
    visibilityTime: time || 2000,
    autoHide: true,
    bottomOffset: SCREEN_HEIGHT * 0.12,
    props: {textMsg: message},
    zIndex: 10000000,
  });
};


export const getCountryCode = phoneNumber => {
  // if phone number is not a string, convert it to a string
  if (typeof phoneNumber !== 'string') {
    phoneNumber = phoneNumber?.toString();
  }

  // if phone is empty, return null
  if (!phoneNumber) {
    return null;
  }

  const phone = parsePhoneNumberFromString(phoneNumber);
  return phone ? phone.country : null;
};

export const getNumber = phoneNumber => {
  const phone = parsePhoneNumberFromString(phoneNumber);
  return phone ? phone.nationalNumber : null;
};



export const convertUTCToLocal = utcDate => {
  // Create a Date object from the UTC date
  const date = new Date(utcDate);
  // Get the user's local timezone
  const options = {timeZoneName: 'short'};
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Convert the date to the user's local timezone
  const localDate = date.toLocaleString('en-US', {timeZone: userTimezone});

  return localDate;
};

export const isValidEmail = email => {
  // Regular expression for a basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateWebUrl = url => {
  let regEx =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%.~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)$/gm;
  return regEx.test(url);
};

export const validateUsername = username => {
  const pattern =
    /^@[a-z0-9_-]*[a-z][a-z0-9_-]*[a-z][a-z0-9_-]*[a-z][a-z0-9_-]*$/;
  return pattern.test(username);
};

export const validatePassword = password => {
  const regex = /[!@#$%^&*()\-_+={}[\]:;"'<>,.?\/|\\]/;
  return regex.test(password);
};

export const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = value => (value * Math.PI) / 180;
  const R = 6371e3; // Earth's radius in meters

  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  return distance;
};

export const sanitizeHtml = htmlString => {
  const result = htmlString?.replace(/<\/?(html|head|meta|body)[^>]*>/gi, '');
  console.log(htmlString, 'result', result);
  return result;
};

export const removeHtmlTags = htmlString => {
  const result = htmlString
  .replace(/<[^>]*>/g, ' ')
  .replace(/&[a-zA-Z0-9#]+;/g, ' ') // remove all entities like &nbsp; &amp; &#39;
  .replace(/\s+/g, ' ')
  return result;
};



export const formatWithCommas = number => {
  return number?.toLocaleString();
}

// export const extractPageValue = url => {
//   const urlObj = new URL(url)
//   const params = new URLSearchParams(urlObj.search)
//   return params.get("page")
// }

// // Function to parse URL query parameters
// export const parseUrlParams = url => {
//   // Get the query string part of the URL
//   const queryString = url.split("?")[1]

//   // Split query string into key-value pairs
//   const params = {}
//   if (queryString) {
//     queryString.split("&").forEach(param => {
//       const keyValue = param.split("=")
//       params[keyValue[0]] = decodeURIComponent(keyValue[1])
//     })
//   }

//   return params
// }

const functionRegistry = {};

export const registerFunction = (name, func) => {
  functionRegistry[name] = func;
};

export const getFunction = name => {
  return functionRegistry[name];
};

export const isValidDate = date => {
  return date instanceof Date && !isNaN(date);
};

export const truncateWords = (str, wordLimit) => {
  // return only 15 words
  console.log('str', str);

  const words = str?.split(' '); // Split the string into an array of words
  const newWords =
    words?.slice(0, wordLimit).join(' ') +
    (words?.length > wordLimit ? '...' : '');

  console.log('str', newWords);
  return newWords;
};

export const createLocalDate = (hour, minute) => {
  const now = new Date();
  const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0,
    0,
  );
  return date;
};


export function capitalizeWords(string) {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
