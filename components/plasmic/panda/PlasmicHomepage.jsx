// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: fwM5YRpQfO
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TopMenu from "../../TopMenu"; // plasmic-import: dpTc1VI3P5/component
import AccordianWhy from "../../AccordianWhy"; // plasmic-import: gRGt0V6DqB/component
import AccordianHow from "../../AccordianHow"; // plasmic-import: kCHmxNPUay/component
import BtnGrey from "../../BtnGrey"; // plasmic-import: WQ6SiEsTfD/component
import { useScreenVariants as useScreenVariants_8UQYRsGwai } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8U-qYRsGwai/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: fwM5YRpQfO/css
import VerticalHRsvgIcon from "./icons/PlasmicIcon__VerticalHRsvg"; // plasmic-import: XmHlOAzX_A/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: L6LSWcuzGo/icon
import IconInstasvgIcon from "./icons/PlasmicIcon__IconInstasvg"; // plasmic-import: J9OPz5GQhT/icon
import IconTwsvgIcon from "./icons/PlasmicIcon__IconTwsvg"; // plasmic-import: xWz3mP7J7n/icon
import IconFbsvgIcon from "./icons/PlasmicIcon__IconFbsvg"; // plasmic-import: -3jNUbjHt8/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8UQYRsGwai()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Home"}</title>
        <meta key="og:title" property="og:title" content={"Home"} />
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
          <TopMenu
            data-plasmic-name={"topMenu"}
            data-plasmic-override={overrides.topMenu}
            className={classNames("__wab_instance", sty.topMenu)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__pslTe)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__jqfAz)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/panda/images/whatsAppImage20211210At103924Jpeg.jpeg",
                fullWidth: 746,
                fullHeight: 500,
                aspectRatio: undefined
              }}
            />

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__mEpl1)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? "200px"
                  : "100px"
              }
              loading={"lazy"}
              src={{
                src: "/plasmic/panda/images/logo2Png.png",
                fullWidth: 280,
                fullHeight: 280,
                aspectRatio: undefined
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___8IglT)}>
            <div className={classNames(projectcss.all, sty.freeBox__nk6Of)} />

            <div className={classNames(projectcss.all, sty.freeBox__nv1Jz)}>
              <div className={classNames(projectcss.all, sty.freeBox__a6Ayr)}>
                <VerticalHRsvgIcon
                  className={classNames(projectcss.all, sty.svg__iQg6B)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vmx
                  )}
                >
                  {"A Sustainable & Eco Friendly Solution"}
                </div>
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__b91Qi)} />
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__i5Plx)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gwvEx)}
            >
              <button
                data-plasmic-name={"keepagirlinschool"}
                data-plasmic-override={overrides.keepagirlinschool}
                className={classNames(
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.keepagirlinschool
                )}
                disabled={false}
              >
                {"#KeepAGirlInSchool"}
              </button>

              <button
                data-plasmic-name={"ecofriendly"}
                data-plasmic-override={overrides.ecofriendly}
                className={classNames(
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.ecofriendly
                )}
              >
                {"#EcoFriendly"}
              </button>

              <button
                data-plasmic-name={"periodpoverty"}
                data-plasmic-override={overrides.periodpoverty}
                className={classNames(
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.periodpoverty
                )}
              >
                {"#PeriodPoverty"}
              </button>
            </p.Stack>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nIy42
              )}
            >
              {"About Panda Pads"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2Uzs2
              )}
            >
              {
                "We make and distribute reusable menstrual pads in a carefully developed Care Kit that lasts ‘her’ 5 to 7 YEARS! "
              }
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uG63U
              )}
            >
              {
                "We aim to uplift women in our local communities by creating a sustainable future for underprivileged women’s menstruation. In doing so we also take every action to care for our environment by reducing our global footprint and ensuring a greener tomorrow with reusable, 100% biodegradable sanitary pads. We also strive in being creative and working hard to find more ways to help and impact the lives of women in Africa. "
              }
            </div>

            <AccordianWhy
              data-plasmic-name={"why"}
              data-plasmic-override={overrides.why}
              className={classNames("__wab_instance", sty.why)}
              open={true}
            />

            <AccordianHow
              data-plasmic-name={"how"}
              data-plasmic-override={overrides.how}
              className={classNames("__wab_instance", sty.how)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__yyJUx)}>
              <Icon6Icon
                className={classNames(projectcss.all, sty.svg__o59Rw)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8WyZl
                )}
              >
                {"Donate Now"}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__h5HeD)}>
              <BtnGrey
                data-plasmic-name={"getInvolved"}
                data-plasmic-override={overrides.getInvolved}
                className={classNames("__wab_instance", sty.getInvolved)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.freeBox___0Gm3M)}>
              <BtnGrey
                data-plasmic-name={"getInvolved2"}
                data-plasmic-override={overrides.getInvolved2}
                className={classNames("__wab_instance", sty.getInvolved2)}
              >
                {"Learn about the impact we have"}
              </BtnGrey>
            </div>
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox__wLtpK)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2JtUp
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link
                  )}
                  component={Link}
                  href={"mailto:info@pandapads.co.za"}
                  platform={"nextjs"}
                >
                  {"info@pandapads.co.za"}
                </p.PlasmicLink>
                <React.Fragment>
                  {
                    "\nSandi: 0834770123\nRebecca: 0795011862\nWe are based in Randburg, Johannesburg.\n"
                  }
                </React.Fragment>
              </React.Fragment>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__mvkjR)}>
              <IconInstasvgIcon
                data-plasmic-name={"instagram"}
                data-plasmic-override={overrides.instagram}
                className={classNames(projectcss.all, sty.instagram)}
                role={"img"}
              />

              <div className={classNames(projectcss.all, sty.freeBox__eYw2X)}>
                <IconTwsvgIcon
                  data-plasmic-name={"twitter"}
                  data-plasmic-override={overrides.twitter}
                  className={classNames(projectcss.all, sty.twitter)}
                  role={"img"}
                />

                <div className={classNames(projectcss.all, sty.freeBox__fWdH)}>
                  <IconFbsvgIcon
                    data-plasmic-name={"facebook"}
                    data-plasmic-override={overrides.facebook}
                    className={classNames(projectcss.all, sty.facebook)}
                    role={"img"}
                  />
                </div>
              </div>
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
    "topMenu",
    "keepagirlinschool",
    "ecofriendly",
    "periodpoverty",
    "why",
    "how",
    "getInvolved",
    "getInvolved2",
    "link",
    "instagram",
    "twitter",
    "facebook"
  ],

  topMenu: ["topMenu"],
  keepagirlinschool: ["keepagirlinschool"],
  ecofriendly: ["ecofriendly"],
  periodpoverty: ["periodpoverty"],
  why: ["why"],
  how: ["how"],
  getInvolved: ["getInvolved"],
  getInvolved2: ["getInvolved2"],
  link: ["link"],
  instagram: ["instagram"],
  twitter: ["twitter"],
  facebook: ["facebook"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
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
    topMenu: makeNodeComponent("topMenu"),
    keepagirlinschool: makeNodeComponent("keepagirlinschool"),
    ecofriendly: makeNodeComponent("ecofriendly"),
    periodpoverty: makeNodeComponent("periodpoverty"),
    why: makeNodeComponent("why"),
    how: makeNodeComponent("how"),
    getInvolved: makeNodeComponent("getInvolved"),
    getInvolved2: makeNodeComponent("getInvolved2"),
    link: makeNodeComponent("link"),
    instagram: makeNodeComponent("instagram"),
    twitter: makeNodeComponent("twitter"),
    facebook: makeNodeComponent("facebook"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
