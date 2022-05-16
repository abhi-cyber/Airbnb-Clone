import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width="60px"
    height="60px"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect fill="#fff" height={60} rx={10} width={60} />
    <Path
      d="M49.281,11.425,9.305,26.417a2.01,2.01,0,0,0-.087,3.73l9.471,4.059,19.9-13.268a.5.5,0,0,1,.634.774l-14.5,14.5V46.268l6.031-6.031,9.6,8a2.01,2.01,0,0,0,3.237-1.057L51.938,13.8A2.011,2.011,0,0,0,49.281,11.425Z"
      fill="#f1f3f4"
    />
    <Path
      d="M41.634,50.207a3.493,3.493,0,0,1-2.241-.816l-8.549-7.124-5.063,5.062a1.5,1.5,0,0,1-2.56-1.06V36.217a1.5,1.5,0,0,1,.439-1.061l7.382-7.382-11.521,7.68a1.5,1.5,0,0,1-1.422.131L8.628,31.526a3.51,3.51,0,0,1,.15-6.513L48.755,10.021a3.511,3.511,0,0,1,4.638,4.138L45.046,47.546a3.49,3.49,0,0,1-2.316,2.485A3.553,3.553,0,0,1,41.634,50.207ZM30.752,38.737a1.5,1.5,0,0,1,.96.348l9.6,8a.506.506,0,0,0,.486.094.5.5,0,0,0,.337-.362l8.346-33.386a.51.51,0,0,0-.673-.6h0L9.831,27.821a.511.511,0,0,0-.021.948l8.723,3.738L37.759,19.69a2,2,0,0,1,2.526,3.082L26.221,36.838v5.809l3.47-3.47A1.5,1.5,0,0,1,30.752,38.737ZM49.281,11.426h0Z"
      fill="#8d9cf4"
    />
    <Path
      d="M9.305,27.917a1.5,1.5,0,0,1-.527-2.9L48.755,10.021a3.511,3.511,0,0,1,4.638,4.138,1.5,1.5,0,0,1-2.911-.726.511.511,0,0,0-.673-.6L9.831,27.821A1.476,1.476,0,0,1,9.305,27.917Z"
      fill="#7bcdd1"
    />
  </Svg>
);

export default SVGComponent;
