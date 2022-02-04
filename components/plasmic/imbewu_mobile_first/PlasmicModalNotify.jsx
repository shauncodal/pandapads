// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: dcHZmxad1C
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicModalNotify.module.css"; // plasmic-import: dcHZmxad1C/css
import Icon26Icon from "./icons/PlasmicIcon__Icon26"; // plasmic-import: B83sAdEuCL/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: w3I0pcFrtd/icon

export const PlasmicModalNotify__VariantProps = new Array();

export const PlasmicModalNotify__ArgProps = new Array();

function PlasmicModalNotify__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__n6Ydj)}>
        <div className={classNames(projectcss.all, sty.freeBox__rbknI)}>
          <div className={classNames(projectcss.all, sty.freeBox__gtHzW)}>
            <Icon26Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__j47Pe)}>
            <div
              data-plasmic-name={"txtModal"}
              data-plasmic-override={overrides.txtModal}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.txtModal
              )}
            >
              {"This is an  message "}
            </div>
          </div>
        </div>
      </div>

      <Icon4Icon
        data-plasmic-name={"btnClose"}
        data-plasmic-override={overrides.btnClose}
        className={classNames(projectcss.all, sty.btnClose)}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "txtModal", "btnClose"],
  svg: ["svg"],
  txtModal: ["txtModal"],
  btnClose: ["btnClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicModalNotify__ArgProps,
      internalVariantPropNames: PlasmicModalNotify__VariantProps
    });

    return PlasmicModalNotify__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModalNotify";
  } else {
    func.displayName = `PlasmicModalNotify.${nodeName}`;
  }
  return func;
}

export const PlasmicModalNotify = Object.assign(
  // Top-level PlasmicModalNotify renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    txtModal: makeNodeComponent("txtModal"),
    btnClose: makeNodeComponent("btnClose"),
    // Metadata about props expected for PlasmicModalNotify
    internalVariantProps: PlasmicModalNotify__VariantProps,
    internalArgProps: PlasmicModalNotify__ArgProps
  }
);

export default PlasmicModalNotify;
/* prettier-ignore-end */