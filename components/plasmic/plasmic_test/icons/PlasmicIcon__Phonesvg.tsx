// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhonesvgIcon(props: PhonesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.605 9.186L8.992 7.967a.518.518 0 00-.353-.03.557.557 0 00-.3.206L7.18 9.68c-1.815-.93-3.276-2.52-4.133-4.498l1.414-1.26a.617.617 0 00.19-.325.658.658 0 00-.029-.385L3.502.368A.595.595 0 003.24.066a.523.523 0 00-.38-.05L.435.624a.557.557 0 00-.312.214.644.644 0 00-.122.38C0 7.73 4.85 13 10.826 13c.127 0 .25-.047.349-.132a.618.618 0 00.197-.34l.56-2.641a.666.666 0 00-.048-.414.59.59 0 00-.279-.287z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhonesvgIcon;
/* prettier-ignore-end */
