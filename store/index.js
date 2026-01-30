import storeSlices from "./*/*.slice.js"

const isValid = slice => {

  const sliceProps = [
    "actions",
    "caseReducers",
    "name",
    "reducer",
    "getInitialState",
  ]

  return sliceProps.every(prop => slice.hasOwnProperty(prop));
}


export const slices = storeSlices
  .filter(slice => slice.value.slice && isValid(slice.value.slice))
  .map(slice => slice.value.slice)


export const connectors = slices.reduce((acc, slice) => {
  let name = slice.name.charAt(0).toUpperCase() + slice.name.slice(1)
  acc[name] = slice.reducer
  return acc
}, {})

