// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: YM3rXZh8M9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Select from "../../Select"; // plasmic-import: bCQIfT3kT1u/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicInputSelect.module.css"; // plasmic-import: YM3rXZh8M9/css
import Icon25Icon from "./icons/PlasmicIcon__Icon25"; // plasmic-import: JYqxc_I_6x/icon

export const PlasmicInputSelect__VariantProps = new Array("showError");

export const PlasmicInputSelect__ArgProps = new Array();

function PlasmicInputSelect__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return true ? (
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
      <Select
        data-plasmic-name={"selectGender"}
        data-plasmic-override={overrides.selectGender}
        className={classNames("__wab_instance", sty.selectGender)}
        defaultValue={""}
        name={"Gender"}
      />

      {(hasVariant(variants, "showError", "showError") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBox__showError]: hasVariant(
              variants,
              "showError",
              "showError"
            )
          })}
        >
          <Icon25Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div
            data-plasmic-name={"txtError"}
            data-plasmic-override={overrides.txtError}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.txtError,
              {
                [sty.txtError__showError]: hasVariant(
                  variants,
                  "showError",
                  "showError"
                )
              }
            )}
          >
            {"Enter some text"}
          </div>
        </p.Stack>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "selectGender", "freeBox", "svg", "txtError"],
  selectGender: ["selectGender"],
  freeBox: ["freeBox", "svg", "txtError"],
  svg: ["svg"],
  txtError: ["txtError"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputSelect__ArgProps,
      internalVariantPropNames: PlasmicInputSelect__VariantProps
    });

    return PlasmicInputSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputSelect";
  } else {
    func.displayName = `PlasmicInputSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicInputSelect = Object.assign(
  // Top-level PlasmicInputSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    selectGender: makeNodeComponent("selectGender"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    txtError: makeNodeComponent("txtError"),
    // Metadata about props expected for PlasmicInputSelect
    internalVariantProps: PlasmicInputSelect__VariantProps,
    internalArgProps: PlasmicInputSelect__ArgProps
  }
);

export default PlasmicInputSelect;
/* prettier-ignore-end */