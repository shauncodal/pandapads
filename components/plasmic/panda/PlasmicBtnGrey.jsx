// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: WQ6SiEsTfD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicBtnGrey.module.css"; // plasmic-import: WQ6SiEsTfD/css

export const PlasmicBtnGrey__VariantProps = new Array();

export const PlasmicBtnGrey__ArgProps = new Array("children");

function PlasmicBtnGrey__RenderFunc(props) {
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
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "How can you get involved ? ",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
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
      internalArgPropNames: PlasmicBtnGrey__ArgProps,
      internalVariantPropNames: PlasmicBtnGrey__VariantProps
    });

    return PlasmicBtnGrey__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBtnGrey";
  } else {
    func.displayName = `PlasmicBtnGrey.${nodeName}`;
  }
  return func;
}

export const PlasmicBtnGrey = Object.assign(
  // Top-level PlasmicBtnGrey renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBtnGrey
    internalVariantProps: PlasmicBtnGrey__VariantProps,
    internalArgProps: PlasmicBtnGrey__ArgProps
  }
);

export default PlasmicBtnGrey;
/* prettier-ignore-end */
