// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: SbC5ZZpX-R
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import CellNumber from "../../CellNumber"; // plasmic-import: SHNeWqmgCt/component
import InputPassword from "../../InputPassword"; // plasmic-import: CA4YIAqpc5/component
import BtnNormal from "../../BtnNormal"; // plasmic-import: xohdOATSWS/component
import BtnReadMore from "../../BtnReadMore"; // plasmic-import: nCdhjhK5Fp/component
import FooterWidget from "../../FooterWidget"; // plasmic-import: kn0Z3MZd2G/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: SbC5ZZpX-R/css
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: qPUMSSqiY7/icon

export const PlasmicLogin__VariantProps = new Array("status");

export const PlasmicLogin__ArgProps = new Array();

function PlasmicLogin__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
            sty.root,
            {
              [sty.root__status_loading]: hasVariant(
                variants,
                "status",
                "loading"
              )
            }
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__lqcDo)}>
            <div
              data-plasmic-name={"outer"}
              data-plasmic-override={overrides.outer}
              className={classNames(projectcss.all, sty.outer)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__y1C2F)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__sdIHc, {
                    [sty.freeBox__status_loading__sdIHcFwAfl]: hasVariant(
                      variants,
                      "status",
                      "loading"
                    )
                  })}
                >
                  {(hasVariant(variants, "status", "loading") ? true : true) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xuHqj,
                        {
                          [sty.text__status_loading__xuHqjFwAfl]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                    >
                      {hasVariant(variants, "status", "loading")
                        ? ""
                        : "Please Login"}
                    </div>
                  ) : null}

                  <CellNumber
                    data-plasmic-name={"inputCell"}
                    data-plasmic-override={overrides.inputCell}
                    className={classNames("__wab_instance", sty.inputCell)}
                  />

                  <InputPassword
                    data-plasmic-name={"inputPassword"}
                    data-plasmic-override={overrides.inputPassword}
                    className={classNames("__wab_instance", sty.inputPassword)}
                  />

                  {(hasVariant(variants, "status", "loading") ? true : true) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox__rqlrZ,
                        {
                          [sty.freeBox__status_loading__rqlrZfwAfl]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                    >
                      {(
                        hasVariant(variants, "status", "loading") ? true : true
                      ) ? (
                        <BtnNormal
                          data-plasmic-name={"submit"}
                          data-plasmic-override={overrides.submit}
                          className={classNames("__wab_instance", sty.submit, {
                            [sty.submit__status_loading]: hasVariant(
                              variants,
                              "status",
                              "loading"
                            )
                          })}
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
                            {"login"}
                          </button>
                        </BtnNormal>
                      ) : null}
                    </div>
                  ) : null}

                  <div
                    data-plasmic-name={"loadingArea"}
                    data-plasmic-override={overrides.loadingArea}
                    className={classNames(projectcss.all, sty.loadingArea, {
                      [sty.loadingArea__status_loading]: hasVariant(
                        variants,
                        "status",
                        "loading"
                      )
                    })}
                  >
                    {(
                      hasVariant(variants, "status", "loading") ? true : true
                    ) ? (
                      <BtnNormal
                        data-plasmic-name={"registerBtn"}
                        data-plasmic-override={overrides.registerBtn}
                        className={classNames(
                          "__wab_instance",
                          sty.registerBtn,
                          {
                            [sty.registerBtn__status_loading]: hasVariant(
                              variants,
                              "status",
                              "loading"
                            )
                          }
                        )}
                        ghostGreen={true}
                      >
                        {(
                          hasVariant(variants, "status", "loading")
                            ? true
                            : true
                        ) ? (
                          <button
                            data-plasmic-name={"submitBtn4"}
                            data-plasmic-override={overrides.submitBtn4}
                            className={classNames(
                              projectcss.button,
                              projectcss.__wab_text,
                              sty.submitBtn4,
                              {
                                [sty.submitBtn4__status_loading]: hasVariant(
                                  variants,
                                  "status",
                                  "loading"
                                )
                              }
                            )}
                          >
                            {"register"}
                          </button>
                        ) : null}
                      </BtnNormal>
                    ) : null}
                  </div>

                  {(
                    hasVariant(variants, "status", "loading") ? true : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__k4KPn,
                        {
                          [sty.text__status_loading__k4KPnFwAfl]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                    >
                      {hasVariant(variants, "status", "loading")
                        ? "Checking..."
                        : "Enter some text"}
                    </div>
                  ) : null}

                  <div
                    className={classNames(projectcss.all, sty.freeBox__w9B6E, {
                      [sty.freeBox__status_loading__w9B6EfwAfl]: hasVariant(
                        variants,
                        "status",
                        "loading"
                      )
                    })}
                  >
                    {(
                      hasVariant(variants, "status", "loading") ? true : true
                    ) ? (
                      <BtnReadMore
                        data-plasmic-name={"forgotBtn"}
                        data-plasmic-override={overrides.forgotBtn}
                        className={classNames("__wab_instance", sty.forgotBtn, {
                          [sty.forgotBtn__status_loading]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        })}
                        slot={
                          <Icon12Icon
                            data-plasmic-name={"svg"}
                            data-plasmic-override={overrides.svg}
                            className={classNames(projectcss.all, sty.svg, {
                              [sty.svg__status_loading]: hasVariant(
                                variants,
                                "status",
                                "loading"
                              )
                            })}
                            role={"img"}
                          />
                        }
                      >
                        {(
                          hasVariant(variants, "status", "loading")
                            ? true
                            : true
                        ) ? (
                          <div
                            data-plasmic-name={"btnForgot"}
                            data-plasmic-override={overrides.btnForgot}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.btnForgot,
                              {
                                [sty.btnForgot__status_loading]: hasVariant(
                                  variants,
                                  "status",
                                  "loading"
                                )
                              }
                            )}
                          >
                            {"Forgot Password"}
                          </div>
                        ) : null}
                      </BtnReadMore>
                    ) : null}
                  </div>
                </p.Stack>
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
    "inputCell",
    "inputPassword",
    "submit",
    "submitBtn2",
    "loadingArea",
    "registerBtn",
    "submitBtn4",
    "forgotBtn",
    "btnForgot",
    "svg",
    "footerWidget"
  ],

  outer: [
    "outer",
    "inputCell",
    "inputPassword",
    "submit",
    "submitBtn2",
    "loadingArea",
    "registerBtn",
    "submitBtn4",
    "forgotBtn",
    "btnForgot",
    "svg"
  ],

  inputCell: ["inputCell"],
  inputPassword: ["inputPassword"],
  submit: ["submit", "submitBtn2"],
  submitBtn2: ["submitBtn2"],
  loadingArea: ["loadingArea", "registerBtn", "submitBtn4"],
  registerBtn: ["registerBtn", "submitBtn4"],
  submitBtn4: ["submitBtn4"],
  forgotBtn: ["forgotBtn", "btnForgot", "svg"],
  btnForgot: ["btnForgot"],
  svg: ["svg"],
  footerWidget: ["footerWidget"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLogin__ArgProps,
      internalVariantPropNames: PlasmicLogin__VariantProps
    });

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outer: makeNodeComponent("outer"),
    inputCell: makeNodeComponent("inputCell"),
    inputPassword: makeNodeComponent("inputPassword"),
    submit: makeNodeComponent("submit"),
    submitBtn2: makeNodeComponent("submitBtn2"),
    loadingArea: makeNodeComponent("loadingArea"),
    registerBtn: makeNodeComponent("registerBtn"),
    submitBtn4: makeNodeComponent("submitBtn4"),
    forgotBtn: makeNodeComponent("forgotBtn"),
    btnForgot: makeNodeComponent("btnForgot"),
    svg: makeNodeComponent("svg"),
    footerWidget: makeNodeComponent("footerWidget"),
    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */