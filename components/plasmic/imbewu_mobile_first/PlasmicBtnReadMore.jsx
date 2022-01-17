// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: nCdhjhK5Fp
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconRound from "../../IconRound"; // plasmic-import: fi0LamIfb0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicBtnReadMore.module.css"; // plasmic-import: nCdhjhK5Fp/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: RHqY8F8M2K/icon

export const PlasmicBtnReadMore__VariantProps = new Array();

export const PlasmicBtnReadMore__ArgProps = new Array("children", "slot");

function PlasmicBtnReadMore__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "READ MORE",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}

      <IconRound
        data-plasmic-name={"iconRound"}
        data-plasmic-override={overrides.iconRound}
        className={classNames("__wab_instance", sty.iconRound)}
        icon={p.renderPlasmicSlot({
          defaultContents: (
            <Icon10Icon
              className={classNames(projectcss.all, sty.svg__i41Pe)}
              role={"img"}
            />
          ),

          value: args.slot
        })}
        lightgreen={true}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "iconRound"],
  iconRound: ["iconRound"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBtnReadMore__ArgProps,
      internalVariantPropNames: PlasmicBtnReadMore__VariantProps
    });

    return PlasmicBtnReadMore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBtnReadMore";
  } else {
    func.displayName = `PlasmicBtnReadMore.${nodeName}`;
  }
  return func;
}

export const PlasmicBtnReadMore = Object.assign(
  // Top-level PlasmicBtnReadMore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconRound: makeNodeComponent("iconRound"),
    // Metadata about props expected for PlasmicBtnReadMore
    internalVariantProps: PlasmicBtnReadMore__VariantProps,
    internalArgProps: PlasmicBtnReadMore__ArgProps
  }
);

export default PlasmicBtnReadMore;
/* prettier-ignore-end */