// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: JEo6m_G5j0
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantstPLuZHt02V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tPLuZHt02v/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicBtnFooterNavItem.module.css"; // plasmic-import: JEo6m_G5j0/css
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: d4_rzrfHe/icon

export const PlasmicBtnFooterNavItem__VariantProps = new Array();

export const PlasmicBtnFooterNavItem__ArgProps = new Array();

function PlasmicBtnFooterNavItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstPLuZHt02V()
  });

  return (
    hasVariant(globalVariants, "screen", "smallMobile") ? true : false
  ) ? (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      platform={"nextjs"}
    >
      {(hasVariant(globalVariants, "screen", "smallMobile") ? true : false) ? (
        <div className={classNames(projectcss.all, sty.freeBox__zDlOv)}>
          {(
            hasVariant(globalVariants, "screen", "smallMobile") ? true : false
          ) ? (
            <Icon14Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          ) : null}
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "smallMobile") ? true : false) ? (
        <div className={classNames(projectcss.all, sty.freeBox__jeiK1)}>
          {(
            hasVariant(globalVariants, "screen", "smallMobile") ? true : false
          ) ? (
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {hasVariant(globalVariants, "screen", "smallMobile")
                ? "Dashboard"
                : "Enter some text"}
            </div>
          ) : null}
        </div>
      ) : null}
    </p.PlasmicLink>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBtnFooterNavItem__ArgProps,
      internalVariantPropNames: PlasmicBtnFooterNavItem__VariantProps
    });

    return PlasmicBtnFooterNavItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBtnFooterNavItem";
  } else {
    func.displayName = `PlasmicBtnFooterNavItem.${nodeName}`;
  }
  return func;
}

export const PlasmicBtnFooterNavItem = Object.assign(
  // Top-level PlasmicBtnFooterNavItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicBtnFooterNavItem
    internalVariantProps: PlasmicBtnFooterNavItem__VariantProps,
    internalArgProps: PlasmicBtnFooterNavItem__ArgProps
  }
);

export default PlasmicBtnFooterNavItem;
/* prettier-ignore-end */
