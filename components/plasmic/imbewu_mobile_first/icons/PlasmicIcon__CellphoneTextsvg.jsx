// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CellphoneTextsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 14 22"}
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
          "M12 18V4H2v14h10m0-18a2 2 0 012 2v18a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .89.89 0 2 0h10M4 6h6v2H4V6m0 4h4v2H4v-2z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default CellphoneTextsvgIcon;
/* prettier-ignore-end */
