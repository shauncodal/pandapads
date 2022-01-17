// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: kCHmxNPUay
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicAccordianHow.module.css"; // plasmic-import: kCHmxNPUay/css
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 0BkpIa_7nZ/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: Oubtb4gAlz/icon

export const PlasmicAccordianHow__VariantProps = new Array("open");

export const PlasmicAccordianHow__ArgProps = new Array();

function PlasmicAccordianHow__RenderFunc(props) {
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
        sty.root,
        { [sty.root__open]: hasVariant(variants, "open", "open") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox__open]: hasVariant(variants, "open", "open")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wOjbU,
            {
              [sty.text__open__wOjbUn1K1H]: hasVariant(variants, "open", "open")
            }
          )}
        >
          {"How do we do this?"}
        </div>

        <p.PlasmicIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant(variants, "open", "open") ? Icon5Icon : Icon3Icon
          }
          className={classNames(projectcss.all, sty.svg, {
            [sty.svg__open]: hasVariant(variants, "open", "open")
          })}
          role={"img"}
        />

        {true ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__asfrN
            )}
          >
            {"Enter some text"}
          </div>
        ) : null}
      </div>

      {(hasVariant(variants, "open", "open") ? true : false) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mhaqJ,
            {
              [sty.text__open__mhaqJn1K1H]: hasVariant(variants, "open", "open")
            }
          )}
        >
          {
            "Our distributions include a workshop on how to use the pads and take care of them as well as their own body. We create a safe space for women to talk to us about how their periods affect them. Most of these ladies say that with disposable pads costing an average of R40 per month they just cannot afford it. Upon receiving a Care Kit, many have expressed huge gratitude, they explain how they will no longer have to choose between food and menstrual hygiene, they no longer have to cut up old clothes or towels, newspaper or others alternatives. \n \nSupporting a woman for 5 – 7 years costs as little as R300.00.\n"
          }
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAccordianHow__ArgProps,
      internalVariantPropNames: PlasmicAccordianHow__VariantProps
    });

    return PlasmicAccordianHow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccordianHow";
  } else {
    func.displayName = `PlasmicAccordianHow.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordianHow = Object.assign(
  // Top-level PlasmicAccordianHow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicAccordianHow
    internalVariantProps: PlasmicAccordianHow__VariantProps,
    internalArgProps: PlasmicAccordianHow__ArgProps
  }
);

export default PlasmicAccordianHow;
/* prettier-ignore-end */
