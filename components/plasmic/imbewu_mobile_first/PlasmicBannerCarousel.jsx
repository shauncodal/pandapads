// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: cqUdBStHn_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BannerCarouselItem from "../../BannerCarouselItem"; // plasmic-import: 3iRV6jWx2D/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicBannerCarousel.module.css"; // plasmic-import: cqUdBStHn_/css

export const PlasmicBannerCarousel__VariantProps = new Array();

export const PlasmicBannerCarousel__ArgProps = new Array();

function PlasmicBannerCarousel__RenderFunc(props) {
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
      <BannerCarouselItem
        className={classNames("__wab_instance", sty.bannerCarouselItem__e02Z)}
      />

      <BannerCarouselItem
        className={classNames("__wab_instance", sty.bannerCarouselItem__dsV86)}
      />

      <BannerCarouselItem
        className={classNames("__wab_instance", sty.bannerCarouselItem__on1Xa)}
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
      internalArgPropNames: PlasmicBannerCarousel__ArgProps,
      internalVariantPropNames: PlasmicBannerCarousel__VariantProps
    });

    return PlasmicBannerCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "outer") {
    func.displayName = "PlasmicBannerCarousel";
  } else {
    func.displayName = `PlasmicBannerCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicBannerCarousel = Object.assign(
  // Top-level PlasmicBannerCarousel renders the root element
  makeNodeComponent("outer"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBannerCarousel
    internalVariantProps: PlasmicBannerCarousel__VariantProps,
    internalArgProps: PlasmicBannerCarousel__ArgProps
  }
);

export default PlasmicBannerCarousel;
/* prettier-ignore-end */
