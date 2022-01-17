// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HamburgersvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 23 19"}
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
        d={"M2.404 2.178h18.58M2.404 9.2h18.58m-18.58 7.02h18.58"}
        stroke={"currentColor"}
        strokeWidth={"3.2"}
        fill={"none"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default HamburgersvgIcon;
/* prettier-ignore-end */
