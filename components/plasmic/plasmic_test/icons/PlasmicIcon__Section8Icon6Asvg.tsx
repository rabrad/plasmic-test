// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Section8Icon6AsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Section8Icon6AsvgIcon(props: Section8Icon6AsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 44"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"22.5"}
        cy={"22"}
        r={"22"}
        fill={"#C4C4C4"}
        fillOpacity={".7"}
      ></circle>

      <path
        d={
          "M30.666 15.785l-12.575 6.314-2.524-1.498a.485.485 0 00-.473 0l-2.254 1.085a.57.57 0 00-.181.143.662.662 0 00-.12.213.73.73 0 00.008.496.687.687 0 00.124.194l3.313 3.757c.078.09.178.15.286.176.108.025.22.014.323-.034l6.558-3.008-2.254 6.895a.734.734 0 00-.025.382.67.67 0 00.17.332c.083.088.19.145.302.162a.502.502 0 00.33-.063l2.254-1.29a.604.604 0 00.248-.298l3.572-8.225 4.327-1.847c.384-.251.675-.653.822-1.131a2.396 2.396 0 00-.026-1.472 2.03 2.03 0 00-.862-1.092 1.63 1.63 0 00-1.275-.178l-.068-.013z"
        }
        stroke={"#7A7878"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.531 17.837l-5.915-2.789a.498.498 0 00-.429 0l-1.926.917a.626.626 0 00-.3.35.748.748 0 00-.005.49c.028.078.069.15.121.21a.54.54 0 00.184.138l4.98 2.363"
        }
        stroke={"#7A7878"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Section8Icon6AsvgIcon;
/* prettier-ignore-end */
