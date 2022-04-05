// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MobileIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MobileIconsvgIcon(props: MobileIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
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
          "M43 22.909H14.08M43 27.426H14.08m14.97-17.143h11.22A2.73 2.73 0 0143 13.005v16.188a2.73 2.73 0 01-2.73 2.721H16.81c-2.46 0-2.73-1.94-2.73-1.94l-.015-11.554M12.22 40.023h2.79M1 5.795h25.2M1 37.3h25.2m0-2.694v5.416c0 1.476-1.26 2.693-2.79 2.693H3.82c-1.56 0-2.79-1.217-2.79-2.693V3.999c0-1.505 1.26-2.693 2.79-2.693h19.59c1.53 0 2.79 1.217 2.79 2.693v9.904M14.065 18.42H17.8l-3.72-3.677-3.75 3.677h3.735zm15.855-4.517l-3.72 3.62-3.72-3.62h7.44z"
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

export default MobileIconsvgIcon;
/* prettier-ignore-end */
