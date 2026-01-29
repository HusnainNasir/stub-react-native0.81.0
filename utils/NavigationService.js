import { createNavigationContainerRef } from "@react-navigation/native"
import { ScreenName } from "../theme"
import { clearAll, getData, STORAGE_KEYS, storeData } from "./storage"
// import Purchases from "react-native-purchases"

export const navigationRef = createNavigationContainerRef()

export function reset() {
  if (navigationRef.isReady()) {

    const email = getData(STORAGE_KEYS.Email)
    const password = getData(STORAGE_KEYS.Password)

    clearAll()

    storeData(STORAGE_KEYS.Email , email)
    storeData(STORAGE_KEYS.Password , password)

    // Purchases.logOut()

    navigationRef.reset({
      index: 0,
      routes: [{ name: ScreenName.LoginScreen }]
    })
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
   navigationRef.goBack()
  }
}



export function moveStackNavigation(stackName , stackScreen){
  if (navigationRef.isReady()) {
    return navigationRef.navigate(stackName , {
      screen: stackScreen
    })
  }
}

export function moveNavigation( stackScreen , params){
  if (navigationRef.isReady()) {
    return navigationRef.navigate(stackScreen , params)
  }
}