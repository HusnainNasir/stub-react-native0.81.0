import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Done = (props) => {
    const { width, height, color } = props

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.803 13.784l.53.53.53-.53 8.25-8.25-.53-.53.53.53a.073.073 0 01.053-.024c.016 0 .035.006.053.024a.073.073 0 01.024.053.073.073 0 01-.024.053l-8.833 8.825h0a.08.08 0 01-.114 0L3.78 10.975a.073.073 0 01-.024-.053c0-.016.005-.034.024-.053a.073.073 0 01.053-.024c.016 0 .034.005.053.024l2.917 2.916z"
                fill="#000"
                stroke={color ? color : "#333"}
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default Done
