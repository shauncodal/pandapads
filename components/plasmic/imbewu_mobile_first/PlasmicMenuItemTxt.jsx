// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: GkHoWh4m7z
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicMenuItemTxt.module.css"; // plasmic-import: GkHoWh4m7z/css

export const PlasmicMenuItemTxt__VariantProps = new Array();

export const PlasmicMenuItemTxt__ArgProps = new Array();

function PlasmicMenuItemTxt__RenderFunc(props) {
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
        data-plasmic-name={"menutext"}
        data-plasmic-override={overrides.menutext}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.menutext
        )}
      >
        {"Enter some text"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "menutext"],
  menutext: ["menutext"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMenuItemTxt__ArgProps,
      internalVariantPropNames: PlasmicMenuItemTxt__VariantProps
    });

    return PlasmicMenuItemTxt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItemTxt";
  } else {
    func.displayName = `PlasmicMenuItemTxt.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItemTxt = Object.assign(
  // Top-level PlasmicMenuItemTxt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menutext: makeNodeComponent("menutext"),
    // Metadata about props expected for PlasmicMenuItemTxt
    internalVariantProps: PlasmicMenuItemTxt__VariantProps,
    internalArgProps: PlasmicMenuItemTxt__ArgProps
  }
);

export default PlasmicMenuItemTxt;
/* prettier-ignore-end */
