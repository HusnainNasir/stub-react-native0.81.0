import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../theme"

const BackArrow = (props) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 15l-5-5 5-5"
        stroke={props?.color ?? Colors.secondry}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BackArrow
