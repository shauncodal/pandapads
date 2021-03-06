// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: r5_55WvnNsd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import IconRound from "../../IconRound"; // plasmic-import: fi0LamIfb0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_imbewu_mobile_first.module.css"; // plasmic-import: 3ekFgeJQEEmC58uuLfkDcf/projectcss
import sty from "./PlasmicCardHomeSlideItem.module.css"; // plasmic-import: r5_55WvnNsd/css

export const PlasmicCardHomeSlideItem__VariantProps = new Array();

export const PlasmicCardHomeSlideItem__ArgProps = new Array(
  "children",
  "slot2",
  "slot"
);

function PlasmicCardHomeSlideItem__RenderFunc(props) {
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(projectcss.img, sty.img___4DttR)}
            src={"/plasmic/imbewu_mobile_first/images/imageSmilingjpg.jpeg"}
          />
        ),

        value: args.slot
      })}

      <div className={classNames(projectcss.all, sty.freeBox__k9WS)}>
        <div className={classNames(projectcss.all, sty.freeBox__iQtrF)}>
          <div className={classNames(projectcss.all, sty.freeBox__n7Fzx)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tJmD3
                    )}
                  >
                    {
                      "Build toward financial lifestyle goals while protecting you & your legacy."
                    }
                  </div>

                  <IconRound
                    className={classNames(
                      "__wab_instance",
                      sty.iconRound__g6V2W
                    )}
                  />
                </React.Fragment>
              ),

              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__tK2Cv)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Protect those closest to you with a comprehensive family funeral benefit while receiving a guaranteed pay-out every year.",
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2)
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardHomeSlideItem__ArgProps,
      internalVariantPropNames: PlasmicCardHomeSlideItem__VariantProps
    });

    return PlasmicCardHomeSlideItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHomeSlideItem";
  } else {
    func.displayName = `PlasmicCardHomeSlideItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHomeSlideItem = Object.assign(
  // Top-level PlasmicCardHomeSlideItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCardHomeSlideItem
    internalVariantProps: PlasmicCardHomeSlideItem__VariantProps,
    internalArgProps: PlasmicCardHomeSlideItem__ArgProps
  }
);

export default PlasmicCardHomeSlideItem;
/* prettier-ignore-end */
