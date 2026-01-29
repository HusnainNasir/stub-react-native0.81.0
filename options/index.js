import React from "react"

import { globalOptions } from "./options"

let options = {}

export function getOptions(pakage) {
  let target = options[pakage] || {}
  let source = {}
  return Object.assign(target, source)
}

export function getGlobalOptions() {
  return globalOptions
}

export const OptionsContext = React.createContext(options)
export const GlobalOptionsContext = React.createContext(globalOptions)
