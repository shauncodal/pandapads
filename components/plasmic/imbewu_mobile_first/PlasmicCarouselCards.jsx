// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: qf-kLn914J
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CardImageHeader from "../../CardImageHeader"; // plasmic-import: LHElhf6Fym/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicCarouselCards.module.css"; // plasmic-import: qf-kLn914J/css

export const PlasmicCarouselCards__VariantProps = new Array();

export const PlasmicCarouselCards__ArgProps = new Array();

function PlasmicCarouselCards__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"outer"}
      data-plasmic-override={overrides.outer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_tokens,
        sty.outer
      )}
    >
      <CardImageHeader
        className={classNames("__wab_instance", sty.cardImageHeader__g6T7)}
      />

      <CardImageHeader
        className={classNames("__wab_instance", sty.cardImageHeader___5Xt47)}
      />

      <CardImageHeader
        className={classNames("__wab_instance", sty.cardImageHeader___7Il6Q)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  outer: ["outer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCarouselCards__ArgProps,
      internalVariantPropNames: PlasmicCarouselCards__VariantProps
    });

    return PlasmicCarouselCards__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "outer") {
    func.displayName = "PlasmicCarouselCards";
  } else {
    func.displayName = `PlasmicCarouselCards.${nodeName}`;
  }
  return func;
}

export const PlasmicCarouselCards = Object.assign(
  // Top-level PlasmicCarouselCards renders the root element
  makeNodeComponent("outer"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCarouselCards
    internalVariantProps: PlasmicCarouselCards__VariantProps,
    internalArgProps: PlasmicCarouselCards__ArgProps
  }
);

export default PlasmicCarouselCards;
/* prettier-ignore-end */
