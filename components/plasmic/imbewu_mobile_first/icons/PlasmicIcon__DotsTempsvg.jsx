// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DotsTempsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 76 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        transform={"translate(1 1)"}
        stroke={"none"}
        strokeWidth={"1"}
        fill={"none"}
        fillRule={"evenodd"}
      >
        <circle
          stroke={"#979797"}
          opacity={".298"}
          cx={"8"}
          cy={"8"}
          r={"8"}
        ></circle>

        <circle
          stroke={"#979797"}
          opacity={".298"}
          cx={"37"}
          cy={"8"}
          r={"8"}
        ></circle>

        <circle
          stroke={"#979797"}
          opacity={".298"}
          cx={"66"}
          cy={"8"}
          r={"8"}
        ></circle>

        <circle fill={"#70706D"} cx={"8"} cy={"8"} r={"5"}></circle>
      </g>
    </svg>
  );
}

export default DotsTempsvgIcon;
/* prettier-ignore-end */
