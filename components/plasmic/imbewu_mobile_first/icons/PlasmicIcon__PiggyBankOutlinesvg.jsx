// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PiggyBankOutlinesvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 20 19"}
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
          "M13 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1M6 7h5V5H6v2m14-1.5v6.97l-2.82.94L15.5 19H10v-2H8v2H2.5S0 10.54 0 7.5C0 4.46 2.46 2 5.5 2h5c.91-1.21 2.36-2 4-2a1.498 1.498 0 011.38 2.08c-.14.34-.26.73-.32 1.15l2.27 2.27H20m-2 2h-1L13.5 4c0-.65.09-1.29.26-1.91-.97.25-1.76.97-2.09 1.91H5.5C3.57 4 2 5.57 2 7.5c0 1.88 1.22 6.65 2 9.5h2v-2h6v2h2l1.56-5.15 2.44-.82V7.5z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default PiggyBankOutlinesvgIcon;
/* prettier-ignore-end */
