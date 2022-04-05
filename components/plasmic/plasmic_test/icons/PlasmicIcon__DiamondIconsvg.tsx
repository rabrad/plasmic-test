// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiamondIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiamondIconsvgIcon(props: DiamondIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 54"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.063 11.436h3.593m8.617 0h3.594M8.945 7.304v-3.46M8.91 18.992v-3.495m-5.574 1.341l2.53-2.472m6.05-5.79l2.53-2.472m.036 10.77l-2.494-2.472M5.903 8.576l-2.53-2.507m31.57 30.19h3.594m8.615 0h3.594m-7.92-4.131v-3.46m-.036 15.147v-3.46m-5.573 1.342l2.53-2.508m6.013-5.79l2.53-2.472m.072 10.805l-2.53-2.507m-6.05-5.826l-2.53-2.472M19.615 11.4H47.19l6.746 12.57-4.253 4.627M35.089 43.25l-7.407 7.31-26.327-26.8 2.017-3.779"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M27.5 50.206L14.481 23.724l6.71-12.112 6.527 12.394 6.747-12.394 6.27 12.041 6.673-11.123"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M33.035 39.366l-5.243 10.629-.073-25.742m-26.033-.494h51.92M12.87 20.934l1.356 2.436m26.29.813l-1.246 2.683"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DiamondIconsvgIcon;
/* prettier-ignore-end */
