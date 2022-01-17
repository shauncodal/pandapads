// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      stroke={"currentColor"}
      fill={"none"}
      strokeWidth={"2"}
      viewBox={"0 0 24 24"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}></path>

      <circle cx={"9"} cy={"7"} r={"4"}></circle>

      <path d={"M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"}></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
