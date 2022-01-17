// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: fi0LamIfb0
import * as React from "react";
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
import sty from "./PlasmicIconRound.module.css"; // plasmic-import: fi0LamIfb0/css
import PiggyBankOutlinesvgIcon from "./icons/PlasmicIcon__PiggyBankOutlinesvg"; // plasmic-import: 7TX4Q-M1wm/icon

export const PlasmicIconRound__VariantProps = new Array(
  "lightgreen",
  "darkGreen",
  "white"
);

export const PlasmicIconRound__ArgProps = new Array("icon");

function PlasmicIconRound__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstPLuZHt02V()
  });

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
        sty.root,
        {
          [sty.root__darkGreen]: hasVariant(variants, "darkGreen", "darkGreen"),
          [sty.root__lightgreen]: hasVariant(
            variants,
            "lightgreen",
            "lightgreen"
          ),

          [sty.root__white]: hasVariant(variants, "white", "white")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <PiggyBankOutlinesvgIcon
            className={classNames(projectcss.all, sty.svg___1638H)}
            role={"img"}
          />
        ),

        value: args.icon
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIconRound__ArgProps,
      internalVariantPropNames: PlasmicIconRound__VariantProps
    });

    return PlasmicIconRound__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconRound";
  } else {
    func.displayName = `PlasmicIconRound.${nodeName}`;
  }
  return func;
}

export const PlasmicIconRound = Object.assign(
  // Top-level PlasmicIconRound renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicIconRound
    internalVariantProps: PlasmicIconRound__VariantProps,
    internalArgProps: PlasmicIconRound__ArgProps
  }
);

export default PlasmicIconRound;
/* prettier-ignore-end */
