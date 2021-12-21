// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: fCgs2j_cfv
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: fCgs2j_cfv/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
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
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__d5Qv)}>
            <div className={classNames(projectcss.all, sty.freeBox__onLKs)}>
              <div className={classNames(projectcss.all, sty.freeBox___1Dlm0)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__tp6)}
                  displayHeight={"70px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"70px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/panda/images/image006Png.png",
                    fullWidth: 138,
                    fullHeight: 138,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__tKxPq)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"A Sustainable and Eco Friendly Solution"}
              </h1>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fCuXi
                )}
              >
                {"#KeepAGirlInSchool #EcoFriendly #PeriodPoverty"}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__eVdyR)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__bgidm)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/panda/images/_61778005002244828Dc1Cb7Af9Cf8D81Jpeg.jpeg",
                    fullWidth: 1280,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lUeeD
                )}
              >
                {"About Us"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xScw
                )}
              >
                {
                  "We make and distribute reusable menstrual pads in a carefully developed Care Kit that lasts ‘her’ 5 to 7 YEARS!\n \nWe aim to uplift women in our local communities by creating a sustainable future for underprivileged women’s menstruation. In doing so we also take every action to care for our environment by reducing our global footprint and ensuring a greener tomorrow with reusable, 100% biodegradable sanitary pads. We also strive in being creative and working hard to find more ways to help and impact the lives of women in Africa.\n \nWhy is this initiative so important? We are a 100% female owned organisation, and as women we know how difficult it is to be a woman in South Africa. When menstruating, at least 30% of girls miss an average of 3-5 days of school, this amounts to roughly 50 days out of the year. This horrible statistic leads to women falling behind in school and often dropping out, hindering them from reaching their full potential in life which creates a negative ripple effect on their families and the economy.\n \nOur distributions include a workshop on how to use the pads and take care of them as well as their own body. We create a safe space for women to talk to us about how their periods affect them. Most of these ladies say that with disposable pads costing an average of R40 per month they just cannot afford it. Upon receiving a Care Kit, many have expressed huge gratitude, they explain how they will no longer have to choose between food and menstrual hygiene, they no longer have to cut up old clothes or towels, newspaper or others alternatives.\n \nSupporting a woman for 5 – 7 years costs as little as R300.00."
                }
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5H0Wj
                )}
              >
                {"Enter some text"}
              </div>
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
