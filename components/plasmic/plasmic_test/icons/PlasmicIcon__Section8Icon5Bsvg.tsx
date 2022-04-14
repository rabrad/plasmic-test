// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Section8Icon5BsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Section8Icon5BsvgIcon(props: Section8Icon5BsvgIconProps) {
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
        d={"M22.115 26.09h2.346a3.128 3.128 0 013.129 3.128H13.5"}
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13.5 22.962h5.474a3.141 3.141 0 013.141 3.128H18.59m-5.09-3.91V30m18-14.474a.384.384 0 00-.385-.398h-2.743v-2.73a.398.398 0 00-.385-.398H25.68a.398.398 0 00-.385.397v2.731H22.5a.384.384 0 00-.384.398v2.346a.372.372 0 00.384.384h2.744V21a.398.398 0 00.384.397h2.36a.397.397 0 00.384-.397v-2.744h2.743a.371.371 0 00.385-.384v-2.346z"
        }
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Section8Icon5BsvgIcon;
/* prettier-ignore-end */
