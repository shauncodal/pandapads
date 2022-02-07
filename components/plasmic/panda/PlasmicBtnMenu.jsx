// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: jdl5j8NnvX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicBtnMenu.module.css"; // plasmic-import: jdl5j8NnvX/css
import HamburgersvgIcon from "./icons/PlasmicIcon__Hamburgersvg"; // plasmic-import: MG5NbDC8lx/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: HX4xpV2nlb/icon

export const PlasmicBtnMenu__VariantProps = new Array("menuClose");

export const PlasmicBtnMenu__ArgProps = new Array();

function PlasmicBtnMenu__RenderFunc(props) {
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
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootmenuClose]: hasVariant(variants, "menuClose", "menuClose") }
      )}
    >
      <p.PlasmicIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant(variants, "menuClose", "menuClose")
            ? Icon2Icon
            : HamburgersvgIcon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgmenuClose]: hasVariant(variants, "menuClose", "menuClose")
        })}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBtnMenu__ArgProps,
      internalVariantPropNames: PlasmicBtnMenu__VariantProps
    });

    return PlasmicBtnMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBtnMenu";
  } else {
    func.displayName = `PlasmicBtnMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicBtnMenu = Object.assign(
  // Top-level PlasmicBtnMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicBtnMenu
    internalVariantProps: PlasmicBtnMenu__VariantProps,
    internalArgProps: PlasmicBtnMenu__ArgProps
  }
);

export default PlasmicBtnMenu;
/* prettier-ignore-end */
