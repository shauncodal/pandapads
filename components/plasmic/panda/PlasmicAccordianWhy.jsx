// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: gRGt0V6DqB
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
import sty from "./PlasmicAccordianWhy.module.css"; // plasmic-import: gRGt0V6DqB/css
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 0BkpIa_7nZ/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: Oubtb4gAlz/icon

export const PlasmicAccordianWhy__VariantProps = new Array("open");

export const PlasmicAccordianWhy__ArgProps = new Array();

function PlasmicAccordianWhy__RenderFunc(props) {
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
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootopen]: hasVariant(variants, "open", "open") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxopen]: hasVariant(variants, "open", "open")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nPx3B,
            { [sty.textopen__nPx3BrzWc8]: hasVariant(variants, "open", "open") }
          )}
        >
          {"Why is this initiative so important?"}
        </div>

        <p.PlasmicIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant(variants, "open", "open") ? Icon5Icon : Icon3Icon
          }
          className={classNames(projectcss.all, sty.svg, {
            [sty.svgopen]: hasVariant(variants, "open", "open")
          })}
          role={"img"}
        />

        {true ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vxXjz
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
            sty.text__t7GfG,
            { [sty.textopen__t7GfGrzWc8]: hasVariant(variants, "open", "open") }
          )}
        >
          {
            "We are a 100% female owned organisation, and as women we know how difficult it is to be a woman in South Africa. When menstruating, at least 30% of girls miss an average of 3-5 days of school per month, this amounts to roughly 50 days out of the year. This horrible statistic leads to women falling behind in school and often dropping out, hindering them from reaching their full potential in life which creates a negative ripple effect on their families, communities and the economy. "
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
      internalArgPropNames: PlasmicAccordianWhy__ArgProps,
      internalVariantPropNames: PlasmicAccordianWhy__VariantProps
    });

    return PlasmicAccordianWhy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccordianWhy";
  } else {
    func.displayName = `PlasmicAccordianWhy.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordianWhy = Object.assign(
  // Top-level PlasmicAccordianWhy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicAccordianWhy
    internalVariantProps: PlasmicAccordianWhy__VariantProps,
    internalArgProps: PlasmicAccordianWhy__ArgProps
  }
);

export default PlasmicAccordianWhy;
/* prettier-ignore-end */
