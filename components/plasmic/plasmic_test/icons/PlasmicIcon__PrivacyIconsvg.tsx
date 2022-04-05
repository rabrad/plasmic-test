// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PrivacyIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PrivacyIconsvgIcon(props: PrivacyIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 46"}
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
          "M11.374 35.77H3.686C2.712 35.77 1 35.608 1 33.603V3.375c0-1.131.906-2.069 2.316-2.069h42.267c1.074 0 2.417.615 2.417 2.166V33.41c0 1.357-.638 2.457-2.182 2.457h-8.494M4.357 9.227l40.454.033M7.244 5.25h1.679m3.794 0h1.678m3.828 0h1.712"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.28 19.831c3.022-.259 8.864-1.713 12.154-4.073 2.853 2.166 9.232 3.814 12.32 4.105.068 2.684.168 17.685-12.253 24.15-12.052-6.53-12.388-20.27-12.22-24.182z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20.824 24.488l7.936 7.935m.002-7.935l-7.936 7.935"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default PrivacyIconsvgIcon;
/* prettier-ignore-end */
