// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: CasyVx_Ovr
import * as React from "react";
import Head from "next/head";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavPageTitle from "../../NavPageTitle"; // plasmic-import: _bfo_NMVKD/component
import CardPricingSliderCarousel from "../../CardPricingSliderCarousel"; // plasmic-import: 6HXoSsrypS4/component
import BtnNormal from "../../BtnNormal"; // plasmic-import: xohdOATSWS/component
import WidgetAbout from "../../WidgetAbout"; // plasmic-import: fxukZgtzTS/component
import FooterWidget from "../../FooterWidget"; // plasmic-import: kn0Z3MZd2G/component
import { useScreenVariants as useScreenVariantstPLuZHt02V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tPLuZHt02v/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicPlans.module.css"; // plasmic-import: CasyVx_Ovr/css

export const PlasmicPlans__VariantProps = new Array();

export const PlasmicPlans__ArgProps = new Array();

function PlasmicPlans__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstPLuZHt02V()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <NavPageTitle
            data-plasmic-name={"navPageTitle"}
            data-plasmic-override={overrides.navPageTitle}
            className={classNames("__wab_instance", sty.navPageTitle)}
            pageTitle={
              <div
                data-plasmic-name={"pageTitle"}
                data-plasmic-override={overrides.pageTitle}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.pageTitle
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "About Imbewu"
                  : "Choose a Plan"}
              </div>
            }
          />

          <div className={classNames(projectcss.all, sty.freeBox__mLXkO)}>
            <div
              data-plasmic-name={"outer"}
              data-plasmic-override={overrides.outer}
              className={classNames(projectcss.all, sty.outer)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__idIaZ)}>
                <CardPricingSliderCarousel
                  data-plasmic-name={"cardPricingSliderCarousel"}
                  data-plasmic-override={overrides.cardPricingSliderCarousel}
                  className={classNames(
                    "__wab_instance",
                    sty.cardPricingSliderCarousel
                  )}
                />
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__aMey4)}>
                <BtnNormal
                  data-plasmic-name={"btnNormal"}
                  data-plasmic-override={overrides.btnNormal}
                  className={classNames("__wab_instance", sty.btnNormal)}
                  ghostWhite={true}
                >
                  {"HOW IT WORKS"}
                </BtnNormal>
              </div>

              <WidgetAbout
                data-plasmic-name={"widgetAbout"}
                data-plasmic-override={overrides.widgetAbout}
                className={classNames("__wab_instance", sty.widgetAbout)}
              />

              <FooterWidget
                data-plasmic-name={"footerWidget"}
                data-plasmic-override={overrides.footerWidget}
                className={classNames("__wab_instance", sty.footerWidget)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navPageTitle",
    "pageTitle",
    "outer",
    "cardPricingSliderCarousel",
    "btnNormal",
    "widgetAbout",
    "footerWidget"
  ],

  navPageTitle: ["navPageTitle", "pageTitle"],
  pageTitle: ["pageTitle"],
  outer: [
    "outer",
    "cardPricingSliderCarousel",
    "btnNormal",
    "widgetAbout",
    "footerWidget"
  ],

  cardPricingSliderCarousel: ["cardPricingSliderCarousel"],
  btnNormal: ["btnNormal"],
  widgetAbout: ["widgetAbout"],
  footerWidget: ["footerWidget"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPlans__ArgProps,
      internalVariantPropNames: PlasmicPlans__VariantProps
    });

    return PlasmicPlans__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlans";
  } else {
    func.displayName = `PlasmicPlans.${nodeName}`;
  }
  return func;
}

export const PlasmicPlans = Object.assign(
  // Top-level PlasmicPlans renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navPageTitle: makeNodeComponent("navPageTitle"),
    pageTitle: makeNodeComponent("pageTitle"),
    outer: makeNodeComponent("outer"),
    cardPricingSliderCarousel: makeNodeComponent("cardPricingSliderCarousel"),
    btnNormal: makeNodeComponent("btnNormal"),
    widgetAbout: makeNodeComponent("widgetAbout"),
    footerWidget: makeNodeComponent("footerWidget"),
    // Metadata about props expected for PlasmicPlans
    internalVariantProps: PlasmicPlans__VariantProps,
    internalArgProps: PlasmicPlans__ArgProps
  }
);

export default PlasmicPlans;
/* prettier-ignore-end */
