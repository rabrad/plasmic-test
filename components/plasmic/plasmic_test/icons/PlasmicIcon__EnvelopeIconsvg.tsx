// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeIconsvgIcon(props: EnvelopeIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 67 44"}
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
          "M21.099 24.095L1.185 38.634M46.06 23.962l19.728 14.806M1.046 5.766c0-2.631 2.733-4.46 4.26-4.46m-4.26 4.46V38.1c0 2.81 2.455 4.237 4.446 4.237H61.62c3.15 0 4.307-2.81 4.307-4.594V5.588m-64.88.178L1 9.111s27.971 20.604 29.453 21.674c2.27 1.472 4.03 1.606 6.345-.134 2.315-1.74 29.036-21.674 29.036-21.674l.093-3.39m-64.88.18c.416-2.649 1.342-3.083 1.342-3.083s.927-1.378 2.918-1.378m0 0H61.62m-56.313 0H61.62m0 0c1.714 0 4.307 1.383 4.307 4.282M61.62 1.306c2.825.446 3.52 1.812 3.52 1.812s1.157 1.533.787 2.47"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EnvelopeIconsvgIcon;
/* prettier-ignore-end */
