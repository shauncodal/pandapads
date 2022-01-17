// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: FIdGQnxz3U
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavPageTitle from "../../NavPageTitle"; // plasmic-import: _bfo_NMVKD/component
import InputString from "../../InputString"; // plasmic-import: 2PE7XZXJlW/component
import CellNumber from "../../CellNumber"; // plasmic-import: SHNeWqmgCt/component
import BtnNormal from "../../BtnNormal"; // plasmic-import: xohdOATSWS/component
import FooterWidget from "../../FooterWidget"; // plasmic-import: kn0Z3MZd2G/component
import { useScreenVariants as useScreenVariantstPLuZHt02V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tPLuZHt02v/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: FIdGQnxz3U/css

export const PlasmicContact__VariantProps = new Array("status");

export const PlasmicContact__ArgProps = new Array();

function PlasmicContact__RenderFunc(props) {
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
            sty.root,
            {
              [sty.root__status_complete]: hasVariant(
                variants,
                "status",
                "complete"
              ),

              [sty.root__status_loading]: hasVariant(
                variants,
                "status",
                "loading"
              ),

              [sty.root__status_start]: hasVariant(variants, "status", "start")
            }
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__om45L)}>
            <NavPageTitle
              data-plasmic-name={"navPageTitle"}
              data-plasmic-override={overrides.navPageTitle}
              className={classNames("__wab_instance", sty.navPageTitle)}
              pageTitle={
                <div
                  data-plasmic-name={"pageTitle"}
                  data-plasmic-override={overrides.pageTitle}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.pageTitle
                  )}
                >
                  {"Contact Us"}
                </div>
              }
            />

            <div
              data-plasmic-name={"outer"}
              data-plasmic-override={overrides.outer}
              className={classNames(projectcss.all, sty.outer, {
                [sty.outer__status_loading]: hasVariant(
                  variants,
                  "status",
                  "loading"
                )
              })}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox___8Uxcd, {
                  [sty.freeBox__status_complete___8UxcDudpzf]: hasVariant(
                    variants,
                    "status",
                    "complete"
                  )
                })}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__pM4X, {
                    [sty.freeBox__status_complete__pM4Xudpzf]: hasVariant(
                      variants,
                      "status",
                      "complete"
                    ),

                    [sty.freeBox__status_loading__pM4XpCqDu]: hasVariant(
                      variants,
                      "status",
                      "loading"
                    ),

                    [sty.freeBox__status_start__pM4XO9Z3]: hasVariant(
                      variants,
                      "status",
                      "start"
                    )
                  })}
                >
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__n1CU,
                        {
                          [sty.text__status_complete__n1CUudpzf]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          ),

                          [sty.text__status_loading__n1CUpCqDu]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                    >
                      {"Please enter your details"}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : true
                  ) ? (
                    <input
                      data-plasmic-name={"inputFirstName"}
                      data-plasmic-override={overrides.inputFirstName}
                      className={classNames(
                        projectcss.input,
                        sty.inputFirstName,
                        {
                          [sty.inputFirstName__status_complete]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          ),

                          [sty.inputFirstName__status_loading]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                      placeholder={"First Name"}
                      size={1}
                      type={"text"}
                      value={""}
                    />
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : false
                  ) ? (
                    <InputString
                      data-plasmic-name={"firstName"}
                      data-plasmic-override={overrides.firstName}
                      className={classNames("__wab_instance", sty.firstName)}
                    />
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : false
                  ) ? (
                    <InputString
                      data-plasmic-name={"lastName"}
                      data-plasmic-override={overrides.lastName}
                      className={classNames("__wab_instance", sty.lastName)}
                    />
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : true
                  ) ? (
                    <input
                      data-plasmic-name={"inputLastName"}
                      data-plasmic-override={overrides.inputLastName}
                      className={classNames(
                        projectcss.input,
                        sty.inputLastName,
                        {
                          [sty.inputLastName__status_complete]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          ),

                          [sty.inputLastName__status_loading]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                      placeholder={"Last Name"}
                      size={1}
                      type={"text"}
                      value={""}
                    />
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : true
                  ) ? (
                    <input
                      data-plasmic-name={"inputCell"}
                      data-plasmic-override={overrides.inputCell}
                      className={classNames(projectcss.input, sty.inputCell, {
                        [sty.inputCell__status_complete]: hasVariant(
                          variants,
                          "status",
                          "complete"
                        ),

                        [sty.inputCell__status_loading]: hasVariant(
                          variants,
                          "status",
                          "loading"
                        )
                      })}
                      placeholder={"Cell Number"}
                      size={1}
                      type={"text"}
                      value={""}
                    />
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : false
                  ) ? (
                    <CellNumber
                      data-plasmic-name={"cellNumber"}
                      data-plasmic-override={overrides.cellNumber}
                      className={classNames("__wab_instance", sty.cellNumber)}
                    />
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : true
                  ) ? (
                    <input
                      data-plasmic-name={"inputEmail"}
                      data-plasmic-override={overrides.inputEmail}
                      className={classNames(projectcss.input, sty.inputEmail, {
                        [sty.inputEmail__status_complete]: hasVariant(
                          variants,
                          "status",
                          "complete"
                        ),

                        [sty.inputEmail__status_loading]: hasVariant(
                          variants,
                          "status",
                          "loading"
                        )
                      })}
                      placeholder={"Email Address"}
                      size={1}
                      type={"text"}
                      value={""}
                    />
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : false
                  ) ? (
                    <InputString
                      data-plasmic-name={"email"}
                      data-plasmic-override={overrides.email}
                      className={classNames("__wab_instance", sty.email)}
                    />
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : true
                  ) ? (
                    <textarea
                      data-plasmic-name={"inputComment"}
                      data-plasmic-override={overrides.inputComment}
                      className={classNames(
                        projectcss.textarea,
                        sty.inputComment,
                        {
                          [sty.inputComment__status_complete]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          ),

                          [sty.inputComment__status_loading]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                      placeholder={"Comment"}
                      value={""}
                    />
                  ) : null}
                  {(
                    hasVariant(variants, "status", "complete") ? true : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eDtx8,
                        {
                          [sty.text__status_complete__eDtx8Udpzf]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          )
                        }
                      )}
                    >
                      {hasVariant(variants, "status", "complete")
                        ? "Thank you for your enquiry.  Some one will be in touch shortly"
                        : "Enter some text"}
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : true
                  ) ? (
                    <BtnNormal
                      data-plasmic-name={"submit"}
                      data-plasmic-override={overrides.submit}
                      className={classNames("__wab_instance", sty.submit)}
                    >
                      <button
                        data-plasmic-name={"submitBtn"}
                        data-plasmic-override={overrides.submitBtn}
                        className={classNames(
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.submitBtn
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "smallMobile")
                          ? "login"
                          : "login"}
                      </button>
                    </BtnNormal>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "smallMobile")
                      ? true
                      : true
                  ) ? (
                    <div
                      data-plasmic-name={"loadingArea"}
                      data-plasmic-override={overrides.loadingArea}
                      className={classNames(projectcss.all, sty.loadingArea, {
                        [sty.loadingArea__status_complete]: hasVariant(
                          variants,
                          "status",
                          "complete"
                        ),

                        [sty.loadingArea__status_loading]: hasVariant(
                          variants,
                          "status",
                          "loading"
                        ),

                        [sty.loadingArea__status_start]: hasVariant(
                          variants,
                          "status",
                          "start"
                        )
                      })}
                    >
                      {(
                        hasVariant(variants, "status", "start") ? true : false
                      ) ? (
                        <div
                          data-plasmic-name={"txtError"}
                          data-plasmic-override={overrides.txtError}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.txtError,
                            {
                              [sty.txtError__status_start]: hasVariant(
                                variants,
                                "status",
                                "start"
                              )
                            }
                          )}
                        >
                          {hasVariant(variants, "status", "start")
                            ? ""
                            : "Enter some text"}
                        </div>
                      ) : null}
                      {(
                        hasVariant(globalVariants, "screen", "smallMobile")
                          ? true
                          : false
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__sgZs
                          )}
                        />
                      ) : null}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading") ? true : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xe0Mf,
                        {
                          [sty.text__status_loading__xe0MfpCqDu]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                    >
                      {hasVariant(variants, "status", "loading")
                        ? "Please wait..."
                        : "Enter some text"}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "status", "loading")
                      ? true
                      : hasVariant(variants, "status", "complete")
                      ? true
                      : true
                  ) ? (
                    <BtnNormal
                      data-plasmic-name={"btnSend"}
                      data-plasmic-override={overrides.btnSend}
                      btnState={"active"}
                      className={classNames("__wab_instance", sty.btnSend, {
                        [sty.btnSend__status_complete]: hasVariant(
                          variants,
                          "status",
                          "complete"
                        ),

                        [sty.btnSend__status_loading]: hasVariant(
                          variants,
                          "status",
                          "loading"
                        )
                      })}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eI8GC
                        )}
                      >
                        {"contact us"}
                      </div>
                    </BtnNormal>
                  ) : null}
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__hifYi)}>
                <div className={classNames(projectcss.all, sty.freeBox__g2HJa)}>
                  {(
                    hasVariant(variants, "status", "complete") ? true : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jQxva,
                        {
                          [sty.text__status_complete__jQxvAudpzf]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          ),

                          [sty.text__status_loading__jQxvApCqDu]: hasVariant(
                            variants,
                            "status",
                            "loading"
                          )
                        }
                      )}
                    >
                      {"Contact Information "}
                    </div>
                  ) : null}
                  {(
                    hasVariant(variants, "status", "complete") ? true : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6UlMv,
                        {
                          [sty.text__status_complete___6UlMVudpzf]: hasVariant(
                            variants,
                            "status",
                            "complete"
                          )
                        }
                      )}
                    >
                      {"Here the contact information and links to social "}
                    </div>
                  ) : null}
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
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navPageTitle",
    "pageTitle",
    "outer",
    "inputFirstName",
    "firstName",
    "lastName",
    "inputLastName",
    "inputCell",
    "cellNumber",
    "inputEmail",
    "email",
    "inputComment",
    "submit",
    "submitBtn",
    "loadingArea",
    "txtError",
    "btnSend",
    "footerWidget"
  ],

  navPageTitle: ["navPageTitle", "pageTitle"],
  pageTitle: ["pageTitle"],
  outer: [
    "outer",
    "inputFirstName",
    "firstName",
    "lastName",
    "inputLastName",
    "inputCell",
    "cellNumber",
    "inputEmail",
    "email",
    "inputComment",
    "submit",
    "submitBtn",
    "loadingArea",
    "txtError",
    "btnSend",
    "footerWidget"
  ],

  inputFirstName: ["inputFirstName"],
  firstName: ["firstName"],
  lastName: ["lastName"],
  inputLastName: ["inputLastName"],
  inputCell: ["inputCell"],
  cellNumber: ["cellNumber"],
  inputEmail: ["inputEmail"],
  email: ["email"],
  inputComment: ["inputComment"],
  submit: ["submit", "submitBtn"],
  submitBtn: ["submitBtn"],
  loadingArea: ["loadingArea", "txtError"],
  txtError: ["txtError"],
  btnSend: ["btnSend"],
  footerWidget: ["footerWidget"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicContact__ArgProps,
      internalVariantPropNames: PlasmicContact__VariantProps
    });

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navPageTitle: makeNodeComponent("navPageTitle"),
    pageTitle: makeNodeComponent("pageTitle"),
    outer: makeNodeComponent("outer"),
    inputFirstName: makeNodeComponent("inputFirstName"),
    firstName: makeNodeComponent("firstName"),
    lastName: makeNodeComponent("lastName"),
    inputLastName: makeNodeComponent("inputLastName"),
    inputCell: makeNodeComponent("inputCell"),
    cellNumber: makeNodeComponent("cellNumber"),
    inputEmail: makeNodeComponent("inputEmail"),
    email: makeNodeComponent("email"),
    inputComment: makeNodeComponent("inputComment"),
    submit: makeNodeComponent("submit"),
    submitBtn: makeNodeComponent("submitBtn"),
    loadingArea: makeNodeComponent("loadingArea"),
    txtError: makeNodeComponent("txtError"),
    btnSend: makeNodeComponent("btnSend"),
    footerWidget: makeNodeComponent("footerWidget"),
    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps
  }
);

export default PlasmicContact;
/* prettier-ignore-end */