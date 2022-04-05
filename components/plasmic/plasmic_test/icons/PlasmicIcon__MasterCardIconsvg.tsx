// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MasterCardIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MasterCardIconsvgIcon(props: MasterCardIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 44"}
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
          "M27.65 21.668c0-6.564 3.216-12.434 8.16-16.178-3.648-2.774-8.208-4.392-13.2-4.392-11.808 0-21.36 9.199-21.36 20.57s9.552 20.57 21.36 20.57c4.992 0 9.552-1.664 13.2-4.391-4.992-3.745-8.16-9.615-8.16-16.179zm42.72 0c0 11.371-9.551 20.57-21.36 20.57a21.972 21.972 0 01-13.2-4.391c4.992-3.79 8.16-9.615 8.16-16.179 0-6.564-3.215-12.434-8.16-16.178 3.648-2.774 8.209-4.392 13.2-4.392 11.809 0 21.36 9.199 21.36 20.57z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default MasterCardIconsvgIcon;
/* prettier-ignore-end */
