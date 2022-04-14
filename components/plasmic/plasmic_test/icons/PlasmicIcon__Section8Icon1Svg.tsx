// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Section8Icon1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Section8Icon1SvgIcon(props: Section8Icon1SvgIconProps) {
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
          "M14.5 14.5h16v-1h-16v1zM12 26v-9h-1v9h1zm21-9v4.5h1V17h-1zM22.5 28.5h-8v1h8v-1zM11 26a3.5 3.5 0 003.5 3.5v-1A2.5 2.5 0 0112 26h-1zm19.5-11.5A2.5 2.5 0 0133 17h1a3.5 3.5 0 00-3.5-3.5v1zm-16-1A3.5 3.5 0 0011 17h1a2.5 2.5 0 012.5-2.5v-1zm0 4.5h3v2h-3z"
        }
        fill={"#fff"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M26.9 21.948l-.727-1.259-.725 1.257-1.259.726 1.257.726.726 1.257.726-1.258 1.256-.725-1.254-.724zm5.339 4.177l-1.307-2.263-1.306 2.263-2.263 1.306 2.265 1.307L30.933 31l1.308-2.264L34.5 27.43l-2.261-1.306z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Section8Icon1SvgIcon;
/* prettier-ignore-end */
