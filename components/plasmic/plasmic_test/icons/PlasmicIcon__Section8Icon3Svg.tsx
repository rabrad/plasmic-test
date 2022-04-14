// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Section8Icon3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Section8Icon3SvgIcon(props: Section8Icon3SvgIconProps) {
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

      <circle cx={"22.5"} cy={"22"} r={"22"} fill={"#4888AF"}></circle>

      <path
        d={
          "M18.867 22.197a9.202 9.202 0 013.513-7.234A9.108 9.108 0 0016.697 13 9.19 9.19 0 007.5 22.197a9.19 9.19 0 009.197 9.196 9.235 9.235 0 005.683-1.963 9.14 9.14 0 01-3.513-7.233zm18.393 0a9.19 9.19 0 01-9.196 9.196 9.233 9.233 0 01-5.683-1.963 9.17 9.17 0 003.513-7.233 9.202 9.202 0 00-3.513-7.234A9.107 9.107 0 0128.064 13a9.19 9.19 0 019.197 9.197z"
        }
        stroke={"#fff"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Section8Icon3SvgIcon;
/* prettier-ignore-end */
