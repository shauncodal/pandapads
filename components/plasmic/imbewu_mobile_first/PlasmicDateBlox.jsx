// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: orx5TfVrvy
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicDateBlox.module.css"; // plasmic-import: orx5TfVrvy/css

export const PlasmicDateBlox__VariantProps = new Array("unnamedVariant");

export const PlasmicDateBlox__ArgProps = new Array("children");

function PlasmicDateBlox__RenderFunc(props) {
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
        sty.root,
        {
          [sty.root__unnamedVariant]: hasVariant(
            variants,
            "unnamedVariant",
            "unnamedVariant"
          )
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "JAN",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildren__unnamedVariant]: hasVariant(
            variants,
            "unnamedVariant",
            "unnamedVariant"
          )
        })
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
      internalArgPropNames: PlasmicDateBlox__ArgProps,
      internalVariantPropNames: PlasmicDateBlox__VariantProps
    });

    return PlasmicDateBlox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDateBlox";
  } else {
    func.displayName = `PlasmicDateBlox.${nodeName}`;
  }
  return func;
}

export const PlasmicDateBlox = Object.assign(
  // Top-level PlasmicDateBlox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDateBlox
    internalVariantProps: PlasmicDateBlox__VariantProps,
    internalArgProps: PlasmicDateBlox__ArgProps
  }
);

export default PlasmicDateBlox;
/* prettier-ignore-end */
