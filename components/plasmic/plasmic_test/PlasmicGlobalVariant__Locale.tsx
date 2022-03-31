// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type LocaleValue = "deDe" | "enUs";
export const LocaleContext = React.createContext<LocaleValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useLocale() {
  return React.useContext(LocaleContext);
}

export default LocaleContext;
/* prettier-ignore-end */
