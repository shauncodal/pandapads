// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: gfIegCu9e-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: RMrm46xZDvn/component
import { useScreenVariants as useScreenVariants_8UQYRsGwai } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8U-qYRsGwai/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicPaymentForm.module.css"; // plasmic-import: gfIegCu9e-/css
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: HGfquhKfKT/icon

export const PlasmicPaymentForm__VariantProps = new Array();

export const PlasmicPaymentForm__ArgProps = new Array();

function PlasmicPaymentForm__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8UQYRsGwai()
  });

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
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__spcBk)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__jcEbT)}>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Please provide your details"}
          </div>

          <Icon7Icon
            data-plasmic-name={"btnClose"}
            data-plasmic-override={overrides.btnClose}
            className={classNames(projectcss.all, sty.btnClose)}
            role={"img"}
          />
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__icj4L)}
        >
          <TextInput
            data-plasmic-name={"inputFirstName"}
            data-plasmic-override={overrides.inputFirstName}
            className={classNames("__wab_instance", sty.inputFirstName)}
            placeholder={"First Name"}
          />

          <TextInput
            data-plasmic-name={"inputLastName"}
            data-plasmic-override={overrides.inputLastName}
            className={classNames("__wab_instance", sty.inputLastName)}
            placeholder={"Last Name"}
          />

          <TextInput
            data-plasmic-name={"inputEmail"}
            data-plasmic-override={overrides.inputEmail}
            className={classNames("__wab_instance", sty.inputEmail)}
            placeholder={"Email address"}
          />

          <div
            data-plasmic-name={"btnDonate"}
            data-plasmic-override={overrides.btnDonate}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.btnDonate
            )}
          >
            {hasVariant(globalVariants, "screen", "desktopOnly")
              ? "Donate Now"
              : "Donate Now"}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "btnClose",
    "inputFirstName",
    "inputLastName",
    "inputEmail",
    "btnDonate"
  ],

  text: ["text"],
  btnClose: ["btnClose"],
  inputFirstName: ["inputFirstName"],
  inputLastName: ["inputLastName"],
  inputEmail: ["inputEmail"],
  btnDonate: ["btnDonate"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPaymentForm__ArgProps,
      internalVariantPropNames: PlasmicPaymentForm__VariantProps
    });

    return PlasmicPaymentForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaymentForm";
  } else {
    func.displayName = `PlasmicPaymentForm.${nodeName}`;
  }
  return func;
}

export const PlasmicPaymentForm = Object.assign(
  // Top-level PlasmicPaymentForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    btnClose: makeNodeComponent("btnClose"),
    inputFirstName: makeNodeComponent("inputFirstName"),
    inputLastName: makeNodeComponent("inputLastName"),
    inputEmail: makeNodeComponent("inputEmail"),
    btnDonate: makeNodeComponent("btnDonate"),
    // Metadata about props expected for PlasmicPaymentForm
    internalVariantProps: PlasmicPaymentForm__VariantProps,
    internalArgProps: PlasmicPaymentForm__ArgProps
  }
);

export default PlasmicPaymentForm;
/* prettier-ignore-end */
