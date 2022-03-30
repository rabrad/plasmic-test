// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b1jHtzznz5qfWCWxvSbcUi
// Component: MpF9-nqW6l
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: lnqd9ErfP5U/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_test.module.css"; // plasmic-import: b1jHtzznz5qfWCWxvSbcUi/projectcss
import sty from "./PlasmicTest.module.css"; // plasmic-import: MpF9-nqW6l/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: GX4aUrHbReI/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: lAPalT-xsgR/icon

export type PlasmicTest__VariantMembers = {
  type: "primary" | "secondary";
};

export type PlasmicTest__VariantsArgs = {
  type?: SingleChoiceArg<"primary" | "secondary">;
};

type VariantPropType = keyof PlasmicTest__VariantsArgs;
export const PlasmicTest__VariantProps = new Array<VariantPropType>("type");

export type PlasmicTest__ArgsType = {};
type ArgPropType = keyof PlasmicTest__ArgsType;
export const PlasmicTest__ArgProps = new Array<ArgPropType>();

export type PlasmicTest__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultTestProps {
  type?: SingleChoiceArg<"primary" | "secondary">;
  className?: string;
}

function PlasmicTest__RenderFunc(props: {
  variants: PlasmicTest__VariantsArgs;
  args: PlasmicTest__ArgsType;
  overrides: PlasmicTest__OverridesType;

  forNode?: string;
}) {
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
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button, {
          [sty.buttontype_primary]: hasVariant(variants, "type", "primary"),
          [sty.buttontype_secondary]: hasVariant(variants, "type", "secondary")
        })}
        color={
          hasVariant(variants, "type", "secondary")
            ? ("softBlue" as const)
            : hasVariant(variants, "type", "primary")
            ? ("blue" as const)
            : undefined
        }
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            { [sty.texttype_primary]: hasVariant(variants, "type", "primary") }
          )}
        >
          {"Button"}
        </div>
      </Button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTest__VariantsArgs;
    args?: PlasmicTest__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTest__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTest__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTest__ArgProps,
      internalVariantPropNames: PlasmicTest__VariantProps
    });

    return PlasmicTest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest";
  } else {
    func.displayName = `PlasmicTest.${nodeName}`;
  }
  return func;
}

export const PlasmicTest = Object.assign(
  // Top-level PlasmicTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTest
    internalVariantProps: PlasmicTest__VariantProps,
    internalArgProps: PlasmicTest__ArgProps
  }
);

export default PlasmicTest;
/* prettier-ignore-end */
