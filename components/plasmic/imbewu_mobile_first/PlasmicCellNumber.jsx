// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: SHNeWqmgCt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicCellNumber.module.css"; // plasmic-import: SHNeWqmgCt/css
import Icon25Icon from "./icons/PlasmicIcon__Icon25"; // plasmic-import: JYqxc_I_6x/icon

export const PlasmicCellNumber__VariantProps = new Array("showError");

export const PlasmicCellNumber__ArgProps = new Array();

function PlasmicCellNumber__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__y2Fck)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__umAnV)}
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
            {"+27"}
          </div>

          <input
            data-plasmic-name={"txtCell1"}
            data-plasmic-override={overrides.txtCell1}
            className={classNames(projectcss.input, sty.txtCell1)}
            maxLength={"2"}
            placeholder={"00"}
            size={1}
            type={"text"}
            value={""}
          />

          <input
            data-plasmic-name={"txtCell2"}
            data-plasmic-override={overrides.txtCell2}
            className={classNames(projectcss.input, sty.txtCell2)}
            maxLength={"3"}
            placeholder={"000"}
            size={1}
            type={"text"}
            value={""}
          />

          <input
            data-plasmic-name={"txtCell3"}
            data-plasmic-override={overrides.txtCell3}
            className={classNames(projectcss.input, sty.txtCell3, {
              [sty.txtCell3__showError]: hasVariant(
                variants,
                "showError",
                "showError"
              )
            })}
            maxLength={"4"}
            placeholder={"0000"}
            size={1}
            type={"text"}
            value={""}
          />
        </p.Stack>

        {(hasVariant(variants, "showError", "showError") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___3EJNz, {
              [sty.freeBox__showError___3EJNz7Pn4N]: hasVariant(
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
                sty.txtError
              )}
            >
              {"Enter some text"}
            </div>
          </p.Stack>
        ) : null}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "txtCell1", "txtCell2", "txtCell3", "svg", "txtError"],
  text: ["text"],
  txtCell1: ["txtCell1"],
  txtCell2: ["txtCell2"],
  txtCell3: ["txtCell3"],
  svg: ["svg"],
  txtError: ["txtError"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCellNumber__ArgProps,
      internalVariantPropNames: PlasmicCellNumber__VariantProps
    });

    return PlasmicCellNumber__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCellNumber";
  } else {
    func.displayName = `PlasmicCellNumber.${nodeName}`;
  }
  return func;
}

export const PlasmicCellNumber = Object.assign(
  // Top-level PlasmicCellNumber renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    txtCell1: makeNodeComponent("txtCell1"),
    txtCell2: makeNodeComponent("txtCell2"),
    txtCell3: makeNodeComponent("txtCell3"),
    svg: makeNodeComponent("svg"),
    txtError: makeNodeComponent("txtError"),
    // Metadata about props expected for PlasmicCellNumber
    internalVariantProps: PlasmicCellNumber__VariantProps,
    internalArgProps: PlasmicCellNumber__ArgProps
  }
);

export default PlasmicCellNumber;
/* prettier-ignore-end */
