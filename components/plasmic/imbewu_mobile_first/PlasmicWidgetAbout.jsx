// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: fxukZgtzTS
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BtnReadMore from "../../BtnReadMore"; // plasmic-import: nCdhjhK5Fp/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicWidgetAbout.module.css"; // plasmic-import: fxukZgtzTS/css

export const PlasmicWidgetAbout__VariantProps = new Array();

export const PlasmicWidgetAbout__ArgProps = new Array();

function PlasmicWidgetAbout__RenderFunc(props) {
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
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___1Lsop
        )}
      >
        {"About Imbewu Stokvest™"}
      </div>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__c6Ea
        )}
      >
        {
          "Imbewu StokvestTM is a unique product that is created in the spirit and values of abantu of South Africa. It secures your financial growth, while protecting your legacy. It is powered by Kunene Makopo Risk Solutions, who understand that when one of us grows, we all grow"
        }
      </div>

      <BtnReadMore
        data-plasmic-name={"btnReadMore"}
        data-plasmic-override={overrides.btnReadMore}
        className={classNames("__wab_instance", sty.btnReadMore)}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "btnReadMore"],
  btnReadMore: ["btnReadMore"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicWidgetAbout__ArgProps,
      internalVariantPropNames: PlasmicWidgetAbout__VariantProps
    });

    return PlasmicWidgetAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWidgetAbout";
  } else {
    func.displayName = `PlasmicWidgetAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicWidgetAbout = Object.assign(
  // Top-level PlasmicWidgetAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    btnReadMore: makeNodeComponent("btnReadMore"),
    // Metadata about props expected for PlasmicWidgetAbout
    internalVariantProps: PlasmicWidgetAbout__VariantProps,
    internalArgProps: PlasmicWidgetAbout__ArgProps
  }
);

export default PlasmicWidgetAbout;
/* prettier-ignore-end */
