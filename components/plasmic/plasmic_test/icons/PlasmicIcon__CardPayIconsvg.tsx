// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardPayIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardPayIconsvgIcon(props: CardPayIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 45"}
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
          "M24.43 8.045l5.094 2.904-5.094-2.904zm18.3 16.439V15.2c0-1.587-.848-3.383-2.012-4.042L22.606 1.487c-1.163-.629-2.232.15-2.232 1.737v4.82l22.357 16.44zm-8.143 4.82h2.044-2.044zM30.53 32.21h2.044-2.044zm-4.056 2.904h2.044-2.044zm4.056-7.725h2.044-2.044zm-4.056 2.904h2.044-2.044zm-4.088 2.905h2.044-2.044zm-6.1-21.29c1.98-1.377 6.257-.718 8.301 2.815a11.866 11.866 0 011.32 3.264l18.113 10.72c.409.239.66.598.723 1.047.283 1.707.41 4.073-.031 5.39-1.635 2.995-6.289 6.169-12.043 8.235-1.541.539-4.245.21-5.66-.6l-16.572-9.282c-2.044 1.527-6.037-.27-8.113-3.832C.25 26.1.69 22.447 3.11 20.62l13.176-8.714zm11.823 11.498l-4.622-2.784-10.691 7.396 4.622 2.785 10.691-7.396zM2.482 21.28c1.793-1.347 5.912.629 7.956 4.162"
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

export default CardPayIconsvgIcon;
/* prettier-ignore-end */
