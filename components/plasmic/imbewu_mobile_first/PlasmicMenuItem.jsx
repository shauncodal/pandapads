// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: f-aQjqzv9X
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicMenuItem.module.css"; // plasmic-import: f-aQjqzv9X/css

export const PlasmicMenuItem__VariantProps = new Array();

export const PlasmicMenuItem__ArgProps = new Array("txtMenu");

function PlasmicMenuItem__RenderFunc(props) {
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
      <div
        data-plasmic-name={"btnMenuItem"}
        data-plasmic-override={overrides.btnMenuItem}
        className={classNames(projectcss.all, sty.btnMenuItem)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Menu txt",
          value: args.txtMenu,
          className: classNames(sty.slotTargetTxtMenu)
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "btnMenuItem"],
  btnMenuItem: ["btnMenuItem"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMenuItem__ArgProps,
      internalVariantPropNames: PlasmicMenuItem__VariantProps
    });

    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    btnMenuItem: makeNodeComponent("btnMenuItem"),
    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */
