// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Section8Icon4BsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Section8Icon4BsvgIcon(props: Section8Icon4BsvgIconProps) {
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
          "M32.782 29c.454 0 .89-.176 1.21-.489.321-.312.502-.736.502-1.178a1.615 1.615 0 000-.283 11.765 11.765 0 00-4.14-7.061 12.355 12.355 0 00-7.844-2.794c-2.872 0-5.65.99-7.844 2.794a11.765 11.765 0 00-4.14 7.06 1.624 1.624 0 00.294 1.257c.132.18.3.333.493.449.194.116.409.194.633.228h20.836V29zM22.49 17l.02-3m4.28 0h-8.56"
        }
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Section8Icon4BsvgIcon;
/* prettier-ignore-end */
