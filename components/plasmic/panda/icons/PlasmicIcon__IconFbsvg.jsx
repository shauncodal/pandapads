// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconFbsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 10 20"}
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
          "M6.65 20V9.999h2.958L10 6.552H6.65l.005-1.725c0-.899.091-1.38 1.475-1.38h1.85V0H7.02C3.466 0 2.215 1.672 2.215 4.484v2.069H0v3.446h2.215V20H6.65z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default IconFbsvgIcon;
/* prettier-ignore-end */
