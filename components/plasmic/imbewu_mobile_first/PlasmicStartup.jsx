// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: WvA7CltWvI
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicStartup.module.css"; // plasmic-import: WvA7CltWvI/css
import LogoImbewuWhiteFinalsvgIcon from "./icons/PlasmicIcon__LogoImbewuWhiteFinalsvg"; // plasmic-import: i8vEAYgrKq/icon

export const PlasmicStartup__VariantProps = new Array();

export const PlasmicStartup__ArgProps = new Array();

function PlasmicStartup__RenderFunc(props) {
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
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__nye25)}>
            <div className={classNames(projectcss.all, sty.freeBox___6Rqp4)}>
              <LogoImbewuWhiteFinalsvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                data-plasmic-name={"txtStartup"}
                data-plasmic-override={overrides.txtStartup}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.txtStartup
                )}
              >
                {"Starting up..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "txtStartup"],
  svg: ["svg"],
  txtStartup: ["txtStartup"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicStartup__ArgProps,
      internalVariantPropNames: PlasmicStartup__VariantProps
    });

    return PlasmicStartup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStartup";
  } else {
    func.displayName = `PlasmicStartup.${nodeName}`;
  }
  return func;
}

export const PlasmicStartup = Object.assign(
  // Top-level PlasmicStartup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    txtStartup: makeNodeComponent("txtStartup"),
    // Metadata about props expected for PlasmicStartup
    internalVariantProps: PlasmicStartup__VariantProps,
    internalArgProps: PlasmicStartup__ArgProps
  }
);

export default PlasmicStartup;
/* prettier-ignore-end */
