// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconTwsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 20 17"}
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
          "M9.755 5.258l-.723-.09c-2.63-.346-4.928-1.516-6.879-3.482L1.2.711l-.245.72c-.52 1.606-.188 3.301.896 4.442.578.63.448.72-.55.345-.346-.12-.65-.21-.679-.165-.1.105.246 1.47.52 2.01.376.751 1.142 1.486 1.98 1.921l.709.346-.839.015c-.809 0-.838.015-.751.33.289.975 1.43 2.01 2.702 2.46l.896.316-.78.48a7.966 7.966 0 01-3.873 1.11c-.65.015-1.185.076-1.185.12 0 .15 1.763.991 2.79 1.321 3.077.975 6.733.555 9.479-1.11 1.95-1.186 3.902-3.542 4.812-5.823.492-1.215.983-3.436.983-4.502 0-.69.043-.78.852-1.605.477-.48.925-1.006 1.012-1.156.145-.285.13-.285-.607-.03-1.228.45-1.402.39-.795-.285.448-.48.983-1.35.983-1.605 0-.045-.217.03-.462.165-.26.15-.839.375-1.272.51l-.78.255-.709-.495c-.39-.27-.939-.57-1.228-.66-.737-.21-1.864-.18-2.529.06-1.806.675-2.948 2.415-2.818 4.321l.043.736z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default IconTwsvgIcon;
/* prettier-ignore-end */
