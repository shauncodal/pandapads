// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3ekFgeJQEEmC58uuLfkDcf
// Component: -IL9bbb6JZ
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
import sty from "./PlasmicCardPlanItem.module.css"; // plasmic-import: -IL9bbb6JZ/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: RHqY8F8M2K/icon

export const PlasmicCardPlanItem__VariantProps = new Array();

export const PlasmicCardPlanItem__ArgProps = new Array(
  "children",
  "slot",
  "children2",
  "slot2",
  "children3",
  "slot3",
  "slot4",
  "slot5",
  "slot6"
);

function PlasmicCardPlanItem__RenderFunc(props) {
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
            className={classNames(projectcss.img, sty.img__jewLj)}
            src={"/plasmic/imbewu_mobile_first/images/imgPlanAjpg.jpeg"}
          />
        ),

        value: args.slot6
      })}

      <div className={classNames(projectcss.all, sty.freeBox__orDvm)}>
        <div className={classNames(projectcss.all, sty.freeBox__jbhIu)}>
          {p.renderPlasmicSlot({
            defaultContents: "Plan A",
            value: args.slot4,
            className: classNames(sty.slotTargetSlot4)
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__evk1E)}>
          {p.renderPlasmicSlot({
            defaultContents: "Only R175 pm",
            value: args.slot5,
            className: classNames(sty.slotTargetSlot5)
          })}
        </div>

        <IconRound
          data-plasmic-name={"iconRound"}
          data-plasmic-override={overrides.iconRound}
          className={classNames("__wab_instance", sty.iconRound)}
          icon={
            <Icon10Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___2W2Nq)}>
        <div className={classNames(projectcss.all, sty.freeBox__eqwXo)}>
          {p.renderPlasmicSlot({
            defaultContents: "Annual Payout ",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "R1080",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__rhQot)}>
        <div className={classNames(projectcss.all, sty.freeBox___0Bj2Z)}>
          {p.renderPlasmicSlot({
            defaultContents: "Family cover*",
            value: args.children2,
            className: classNames(sty.slotTargetChildren2)
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "R15000",
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___8Io4Y)}>
        <div className={classNames(projectcss.all, sty.freeBox__l0I2V)}>
          {p.renderPlasmicSlot({
            defaultContents: "Extended Family Cover ",
            value: args.children3,
            className: classNames(sty.slotTargetChildren3)
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "R1000",
          value: args.slot3,
          className: classNames(sty.slotTargetSlot3)
        })}
      </div>

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"*See plans and benefits for details "}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "iconRound", "svg", "text"],
  iconRound: ["iconRound", "svg"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardPlanItem__ArgProps,
      internalVariantPropNames: PlasmicCardPlanItem__VariantProps
    });

    return PlasmicCardPlanItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardPlanItem";
  } else {
    func.displayName = `PlasmicCardPlanItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCardPlanItem = Object.assign(
  // Top-level PlasmicCardPlanItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconRound: makeNodeComponent("iconRound"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCardPlanItem
    internalVariantProps: PlasmicCardPlanItem__VariantProps,
    internalArgProps: PlasmicCardPlanItem__ArgProps
  }
);

export default PlasmicCardPlanItem;
/* prettier-ignore-end */
