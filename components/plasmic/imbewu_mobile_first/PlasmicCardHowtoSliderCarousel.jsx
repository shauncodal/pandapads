// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: oF81_IzDF6T
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CardHowtoItem from "../../CardHowtoItem"; // plasmic-import: NEp9vdTJ1Yn/component
import DotSliderItem from "../../DotSliderItem"; // plasmic-import: k9ppLUjiAw/component
import BtnNormal from "../../BtnNormal"; // plasmic-import: xohdOATSWS/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicCardHowtoSliderCarousel.module.css"; // plasmic-import: oF81_IzDF6T/css

export const PlasmicCardHowtoSliderCarousel__VariantProps = new Array();

export const PlasmicCardHowtoSliderCarousel__ArgProps = new Array();

function PlasmicCardHowtoSliderCarousel__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"cardHolder"}
        data-plasmic-override={overrides.cardHolder}
        hasGap={true}
        className={classNames(projectcss.all, sty.cardHolder)}
      >
        <CardHowtoItem
          className={classNames("__wab_instance", sty.cardHowtoItem__wPj5C)}
          slot={"01"}
          slot2={
            <img
              alt={""}
              className={classNames(projectcss.img, sty.img__k2CAw)}
              src={"/plasmic/imbewu_mobile_first/images/how01Png.png"}
            />
          }
          slot3={
            "Fill in your basic contact details and we’ll create your Imbewu profile …."
          }
        >
          {"Register"}
        </CardHowtoItem>

        <CardHowtoItem
          className={classNames("__wab_instance", sty.cardHowtoItem__l95Qi)}
          slot={"02"}
          slot2={
            <img
              alt={""}
              className={classNames(projectcss.img, sty.img__fgcde)}
              src={"/plasmic/imbewu_mobile_first/images/how02Png.png"}
            />
          }
          slot3={"We’ll need your credit card details to make your payments..."}
        >
          {"Setup payment "}
        </CardHowtoItem>

        <CardHowtoItem
          className={classNames("__wab_instance", sty.cardHowtoItem__wu6Wc)}
          slot={"03"}
          slot2={
            <img
              alt={""}
              className={classNames(projectcss.img, sty.img__iyc9K)}
              src={"/plasmic/imbewu_mobile_first/images/how03Png.png"}
            />
          }
          slot3={"Insert your bank details tor receive your annual pay-out..."}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Set up \nPay-out"}
          </div>
        </CardHowtoItem>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__o97)}
      >
        <DotSliderItem
          className={classNames("__wab_instance", sty.dotSliderItem__quh7F)}
        />

        <DotSliderItem
          className={classNames("__wab_instance", sty.dotSliderItem__k6N9N)}
          currentSlide={true}
        />

        <DotSliderItem
          className={classNames("__wab_instance", sty.dotSliderItem___57Vx)}
        />
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox___1MNj3)}>
        <BtnNormal
          data-plasmic-name={"btnSignup"}
          data-plasmic-override={overrides.btnSignup}
          className={classNames("__wab_instance", sty.btnSignup)}
        >
          {"SIGN UP NOW"}
        </BtnNormal>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "cardHolder", "text", "btnSignup"],
  cardHolder: ["cardHolder", "text"],
  text: ["text"],
  btnSignup: ["btnSignup"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardHowtoSliderCarousel__ArgProps,
      internalVariantPropNames: PlasmicCardHowtoSliderCarousel__VariantProps
    });

    return PlasmicCardHowtoSliderCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHowtoSliderCarousel";
  } else {
    func.displayName = `PlasmicCardHowtoSliderCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHowtoSliderCarousel = Object.assign(
  // Top-level PlasmicCardHowtoSliderCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardHolder: makeNodeComponent("cardHolder"),
    text: makeNodeComponent("text"),
    btnSignup: makeNodeComponent("btnSignup"),
    // Metadata about props expected for PlasmicCardHowtoSliderCarousel
    internalVariantProps: PlasmicCardHowtoSliderCarousel__VariantProps,
    internalArgProps: PlasmicCardHowtoSliderCarousel__ArgProps
  }
);

export default PlasmicCardHowtoSliderCarousel;
/* prettier-ignore-end */
