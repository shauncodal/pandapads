// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p6tU1MHcNvqW8cSkqwHcz5
// Component: dpTc1VI3P5
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BtnMenu from "../../BtnMenu"; // plasmic-import: jdl5j8NnvX/component
import MenuItem from "../../MenuItem"; // plasmic-import: CC0ft16-YZ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_panda.module.css"; // plasmic-import: p6tU1MHcNvqW8cSkqwHcz5/projectcss
import sty from "./PlasmicTopMenu.module.css"; // plasmic-import: dpTc1VI3P5/css
import IconInstasvgIcon from "./icons/PlasmicIcon__IconInstasvg"; // plasmic-import: J9OPz5GQhT/icon
import IconFbsvgIcon from "./icons/PlasmicIcon__IconFbsvg"; // plasmic-import: -3jNUbjHt8/icon

export const PlasmicTopMenu__VariantProps = new Array("menuOpen");

export const PlasmicTopMenu__ArgProps = new Array();

function PlasmicTopMenu__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
        className={classNames(projectcss.all, sty.freeBox__sf6Bb, {
          [sty.freeBoxmenuOpen__sf6BBfiiJj]: hasVariant(
            variants,
            "menuOpen",
            "menuOpen"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__g1NeY)}>
          <BtnMenu
            data-plasmic-name={"btnMenu"}
            data-plasmic-override={overrides.btnMenu}
            className={classNames("__wab_instance", sty.btnMenu, {
              [sty.btnMenumenuOpen]: hasVariant(
                variants,
                "menuOpen",
                "menuOpen"
              )
            })}
            menuClose={
              hasVariant(variants, "menuOpen", "menuOpen") ? true : undefined
            }
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pTtyM)}
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
              {"panda pads"}
            </div>
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox__qy14C)}>
            <IconInstasvgIcon
              data-plasmic-name={"instagram"}
              data-plasmic-override={overrides.instagram}
              className={classNames(projectcss.all, sty.instagram)}
              role={"img"}
            />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___2GZ7W)}>
            <IconFbsvgIcon
              data-plasmic-name={"facebook"}
              data-plasmic-override={overrides.facebook}
              className={classNames(projectcss.all, sty.facebook)}
              role={"img"}
            />
          </div>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__e4Z5)} />
          ) : null}
        </div>

        {(hasVariant(variants, "menuOpen", "menuOpen") ? true : true) ? (
          <MenuItem
            data-plasmic-name={"btnHome"}
            data-plasmic-override={overrides.btnHome}
            className={classNames("__wab_instance", sty.btnHome, {
              [sty.btnHomemenuOpen]: hasVariant(
                variants,
                "menuOpen",
                "menuOpen"
              )
            })}
            menuOpen={
              hasVariant(variants, "menuOpen", "menuOpen") ? true : undefined
            }
          >
            {hasVariant(variants, "menuOpen", "menuOpen")
              ? "Home"
              : "Menu Item"}
          </MenuItem>
        ) : null}
        {(hasVariant(variants, "menuOpen", "menuOpen") ? true : false) ? (
          <MenuItem
            data-plasmic-name={"btnInvolved"}
            data-plasmic-override={overrides.btnInvolved}
            className={classNames("__wab_instance", sty.btnInvolved, {
              [sty.btnInvolvedmenuOpen]: hasVariant(
                variants,
                "menuOpen",
                "menuOpen"
              )
            })}
            menuOpen={
              hasVariant(variants, "menuOpen", "menuOpen") ? true : undefined
            }
          >
            {hasVariant(variants, "menuOpen", "menuOpen")
              ? "How to get involved?"
              : "Menu Item"}
          </MenuItem>
        ) : null}
        {(hasVariant(variants, "menuOpen", "menuOpen") ? true : false) ? (
          <MenuItem
            data-plasmic-name={"btnImpact"}
            data-plasmic-override={overrides.btnImpact}
            className={classNames("__wab_instance", sty.btnImpact, {
              [sty.btnImpactmenuOpen]: hasVariant(
                variants,
                "menuOpen",
                "menuOpen"
              )
            })}
            menuOpen={
              hasVariant(variants, "menuOpen", "menuOpen") ? true : undefined
            }
          >
            {hasVariant(variants, "menuOpen", "menuOpen")
              ? "Our Impact"
              : "Menu Item"}
          </MenuItem>
        ) : null}
        {(hasVariant(variants, "menuOpen", "menuOpen") ? true : false) ? (
          <MenuItem
            data-plasmic-name={"btnContact"}
            data-plasmic-override={overrides.btnContact}
            className={classNames("__wab_instance", sty.btnContact, {
              [sty.btnContactmenuOpen]: hasVariant(
                variants,
                "menuOpen",
                "menuOpen"
              )
            })}
            menuOpen={
              hasVariant(variants, "menuOpen", "menuOpen") ? true : undefined
            }
          >
            {hasVariant(variants, "menuOpen", "menuOpen")
              ? "Contact Us"
              : "Menu Item"}
          </MenuItem>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "btnMenu",
    "text",
    "instagram",
    "facebook",
    "btnHome",
    "btnInvolved",
    "btnImpact",
    "btnContact"
  ],

  btnMenu: ["btnMenu"],
  text: ["text"],
  instagram: ["instagram"],
  facebook: ["facebook"],
  btnHome: ["btnHome"],
  btnInvolved: ["btnInvolved"],
  btnImpact: ["btnImpact"],
  btnContact: ["btnContact"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTopMenu__ArgProps,
      internalVariantPropNames: PlasmicTopMenu__VariantProps
    });

    return PlasmicTopMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopMenu";
  } else {
    func.displayName = `PlasmicTopMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicTopMenu = Object.assign(
  // Top-level PlasmicTopMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    btnMenu: makeNodeComponent("btnMenu"),
    text: makeNodeComponent("text"),
    instagram: makeNodeComponent("instagram"),
    facebook: makeNodeComponent("facebook"),
    btnHome: makeNodeComponent("btnHome"),
    btnInvolved: makeNodeComponent("btnInvolved"),
    btnImpact: makeNodeComponent("btnImpact"),
    btnContact: makeNodeComponent("btnContact"),
    // Metadata about props expected for PlasmicTopMenu
    internalVariantProps: PlasmicTopMenu__VariantProps,
    internalArgProps: PlasmicTopMenu__ArgProps
  }
);

export default PlasmicTopMenu;
/* prettier-ignore-end */
