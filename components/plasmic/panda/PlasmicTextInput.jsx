// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: RMrm46xZDvn
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicTextInput.module.css"; // plasmic-import: RMrm46xZDvn/css
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: G998S9J8dsC/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Km9Nxtu8J_5/icon

export const PlasmicTextInput__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "color"
);

export const PlasmicTextInput__ArgProps = new Array(
  "placeholder",
  "endIcon",
  "startIcon",
  "value",
  "name",
  "required",
  "aria-label",
  "aria-labelledby"
);

function PlasmicTextInput__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: true
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

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
          [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root__color_dark]: hasVariant(variants, "color", "dark"),
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.root__showStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : true
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainer_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.startIconContainer__color_dark]: hasVariant(
              variants,
              "color",
              "dark"
            ),

            [sty.startIconContainer__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.startIconContainer__showStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <SearchsvgIcon
                className={classNames(projectcss.all, sty.svg___8ZaXm)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIcon__color_dark]: hasVariant(
                variants,
                "color",
                "dark"
              ),

              [sty.slotTargetStartIcon__showStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        aria-label={args["aria-label"]}
        aria-labelledby={args["aria-labelledby"]}
        className={classNames(projectcss.input, sty.input, {
          [sty.input_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.input__color_dark]: hasVariant(variants, "color", "dark"),
          [sty.input__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.input__showStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          )
        })}
        disabled={
          hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
        }
        name={args.name}
        placeholder={
          args.placeholder !== undefined ? args.placeholder : "Enter something…"
        }
        type={"text"}
        value={args.value}
      />

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : true) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainer__color_dark]: hasVariant(
              variants,
              "color",
              "dark"
            ),

            [sty.endIconContainer__showEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__prDc5)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIcon__color_dark]: hasVariant(
                variants,
                "color",
                "dark"
              ),

              [sty.slotTargetEndIcon__showEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useTextInput(
    PlasmicTextInput,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },

      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "input", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  input: ["input"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextInput__ArgProps,
      internalVariantPropNames: PlasmicTextInput__VariantProps
    });

    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    input: makeNodeComponent("input"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps,
    useBehavior
  }
);

export default PlasmicTextInput;
/* prettier-ignore-end */
