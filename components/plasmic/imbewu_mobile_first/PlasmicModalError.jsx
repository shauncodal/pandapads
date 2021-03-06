// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: W5dGVELdBW
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicModalError.module.css"; // plasmic-import: W5dGVELdBW/css
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: sILNZRxEU8/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: w3I0pcFrtd/icon

export const PlasmicModalError__VariantProps = new Array();

export const PlasmicModalError__ArgProps = new Array();

function PlasmicModalError__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__cjewd)}>
        <div className={classNames(projectcss.all, sty.freeBox___9Klpo)}>
          <div className={classNames(projectcss.all, sty.freeBox__k2Cgx)}>
            <Icon18Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__qr0Fr)}>
            <div
              data-plasmic-name={"errorTxt"}
              data-plasmic-override={overrides.errorTxt}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.errorTxt
              )}
            >
              {"This is an error message "}
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
  root: ["root", "svg", "errorTxt", "btnClose"],
  svg: ["svg"],
  errorTxt: ["errorTxt"],
  btnClose: ["btnClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicModalError__ArgProps,
      internalVariantPropNames: PlasmicModalError__VariantProps
    });

    return PlasmicModalError__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModalError";
  } else {
    func.displayName = `PlasmicModalError.${nodeName}`;
  }
  return func;
}

export const PlasmicModalError = Object.assign(
  // Top-level PlasmicModalError renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    errorTxt: makeNodeComponent("errorTxt"),
    btnClose: makeNodeComponent("btnClose"),
    // Metadata about props expected for PlasmicModalError
    internalVariantProps: PlasmicModalError__VariantProps,
    internalArgProps: PlasmicModalError__ArgProps
  }
);

export default PlasmicModalError;
/* prettier-ignore-end */
