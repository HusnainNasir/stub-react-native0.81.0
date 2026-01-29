import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../theme';

const RightArrow = (props) => {
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
        d="M7.5 15l5-5-5-5" // Updated to point to the right
        stroke={props?.color ?? Colors.secondry}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightArrow;
