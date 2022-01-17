// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CalendarMultipleChecksvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 22 22"}
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
          "M20 16V7H6v9h14m0-14a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h1V0h2v2h8V0h2v2h1m-3.47 8.06l-4.44 4.44-2.68-2.68 1.06-1.06 1.62 1.62L15.47 9l1.06 1.06M2 20h14v2H2a2 2 0 01-2-2V8h2v12z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default CalendarMultipleChecksvgIcon;
/* prettier-ignore-end */
