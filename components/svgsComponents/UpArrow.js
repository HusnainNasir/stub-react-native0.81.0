import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UpArrow = (props) => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 12.5l5-5 5 5"
        stroke={props?.color ?? "#9ED90D"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default UpArrow;
