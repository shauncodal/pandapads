// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChartArcsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 18 18"}
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
          "M13.18 16.6l-2.01-3.48c.98-.72 1.66-1.84 1.8-3.12H17a8.55 8.55 0 01-3.82 6.6M10 4.03V0c4.3.26 7.74 3.7 8 8h-4.03A4.488 4.488 0 0010 4.03M4 9.5c0 .64.13 1.25.38 1.8L.9 13.31A8.42 8.42 0 010 9.5C0 4.97 3.54 1.27 8 1v4.03c-2.25.25-4 2.15-4 4.47M8.5 18c-2.97 0-5.58-1.5-7.1-3.82l3.48-2.01A4.47 4.47 0 008.5 14c.64 0 1.25-.13 1.8-.38l2.01 3.48c-1.15.58-2.44.9-3.81.9z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default ChartArcsvgIcon;
/* prettier-ignore-end */
