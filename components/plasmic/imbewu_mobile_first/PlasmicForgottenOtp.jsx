// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: qye98tt8peT
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import InputPassword from "../../InputPassword"; // plasmic-import: CA4YIAqpc5/component
import BtnNormal from "../../BtnNormal"; // plasmic-import: xohdOATSWS/component
import BtnReadMore from "../../BtnReadMore"; // plasmic-import: nCdhjhK5Fp/component
import FooterWidget from "../../FooterWidget"; // plasmic-import: kn0Z3MZd2G/component
import { useScreenVariants as useScreenVariantstPLuZHt02V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tPLuZHt02v/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicForgottenOtp.module.css"; // plasmic-import: qye98tt8peT/css
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: _14--lQom8/icon

export const PlasmicForgottenOtp__VariantProps = new Array();

export const PlasmicForgottenOtp__ArgProps = new Array();

function PlasmicForgottenOtp__RenderFunc(props) {
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
          <div className={classNames(projectcss.all, sty.freeBox__uIHt)}>
            <div
              data-plasmic-name={"outer"}
              data-plasmic-override={overrides.outer}
              className={classNames(projectcss.all, sty.outer)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__j5C9X)}>
                <div className={classNames(projectcss.all, sty.freeBox__jsCvx)}>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Please Enter Pin"}
                  </div>

                  <input
                    data-plasmic-name={"inputPin"}
                    data-plasmic-override={overrides.inputPin}
                    className={classNames(projectcss.input, sty.inputPin)}
                    placeholder={"One time pin"}
                    size={1}
                    type={"text"}
                    value={""}
                  />

                  <InputPassword
                    data-plasmic-name={"inputPassword"}
                    data-plasmic-override={overrides.inputPassword}
                    className={classNames("__wab_instance", sty.inputPassword)}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__pBHrg)}
                  >
                    <BtnNormal
                      data-plasmic-name={"submit"}
                      data-plasmic-override={overrides.submit}
                      className={classNames("__wab_instance", sty.submit)}
                    >
                      <button
                        data-plasmic-name={"submitBtn2"}
                        data-plasmic-override={overrides.submitBtn2}
                        className={classNames(
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.submitBtn2
                        )}
                      >
                        {"SUBMIT"}
                      </button>
                    </BtnNormal>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox___0Mq5X)}
                  >
                    <BtnReadMore
                      data-plasmic-name={"backBtn"}
                      data-plasmic-override={overrides.backBtn}
                      className={classNames("__wab_instance", sty.backBtn)}
                      slot={
                        <Icon11Icon
                          data-plasmic-name={"svg"}
                          data-plasmic-override={overrides.svg}
                          className={classNames(projectcss.all, sty.svg)}
                          role={"img"}
                        />
                      }
                    >
                      {"Go Back"}
                    </BtnReadMore>
                  </div>
                </div>
              </div>
            </div>

            <FooterWidget
              data-plasmic-name={"footerWidget"}
              data-plasmic-override={overrides.footerWidget}
              className={classNames("__wab_instance", sty.footerWidget)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "outer",
    "text",
    "inputPin",
    "inputPassword",
    "submit",
    "submitBtn2",
    "backBtn",
    "svg",
    "footerWidget"
  ],

  outer: [
    "outer",
    "text",
    "inputPin",
    "inputPassword",
    "submit",
    "submitBtn2",
    "backBtn",
    "svg"
  ],

  text: ["text"],
  inputPin: ["inputPin"],
  inputPassword: ["inputPassword"],
  submit: ["submit", "submitBtn2"],
  submitBtn2: ["submitBtn2"],
  backBtn: ["backBtn", "svg"],
  svg: ["svg"],
  footerWidget: ["footerWidget"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicForgottenOtp__ArgProps,
      internalVariantPropNames: PlasmicForgottenOtp__VariantProps
    });

    return PlasmicForgottenOtp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForgottenOtp";
  } else {
    func.displayName = `PlasmicForgottenOtp.${nodeName}`;
  }
  return func;
}

export const PlasmicForgottenOtp = Object.assign(
  // Top-level PlasmicForgottenOtp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outer: makeNodeComponent("outer"),
    text: makeNodeComponent("text"),
    inputPin: makeNodeComponent("inputPin"),
    inputPassword: makeNodeComponent("inputPassword"),
    submit: makeNodeComponent("submit"),
    submitBtn2: makeNodeComponent("submitBtn2"),
    backBtn: makeNodeComponent("backBtn"),
    svg: makeNodeComponent("svg"),
    footerWidget: makeNodeComponent("footerWidget"),
    // Metadata about props expected for PlasmicForgottenOtp
    internalVariantProps: PlasmicForgottenOtp__VariantProps,
    internalArgProps: PlasmicForgottenOtp__ArgProps
  }
);

export default PlasmicForgottenOtp;
/* prettier-ignore-end */
