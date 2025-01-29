// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: afXULSfGYmou2jFpEc2QWJ
// Component: 42tFBTdMKvt2

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: 0wu_ZE1f8SuT/component
import { DialogContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "../chortke/plasmic.module.css"; // plasmic-import: afXULSfGYmou2jFpEc2QWJ/projectcss
import sty from "./PlasmicDialog2.module.css"; // plasmic-import: 42tFBTdMKvt2/css

import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: BJgqZU7jDRod/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: uRGFXzJKMzcg/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: qXnLr7su52Ln/icon

createPlasmicElementProxy;

export type PlasmicDialog2__VariantMembers = {
  noTrigger: "noTrigger";
};
export type PlasmicDialog2__VariantsArgs = {
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
};
type VariantPropType = keyof PlasmicDialog2__VariantsArgs;
export const PlasmicDialog2__VariantProps = new Array<VariantPropType>(
  "noTrigger"
);

export type PlasmicDialog2__ArgsType = {
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
  body?: React.ReactNode;
  title?: React.ReactNode;
  trigger?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDialog2__ArgsType;
export const PlasmicDialog2__ArgProps = new Array<ArgPropType>(
  "open",
  "onOpenChange",
  "body",
  "title",
  "trigger"
);

export type PlasmicDialog2__OverridesType = {
  dialog?: Flex__<typeof Dialog>;
  dialogContent?: Flex__<typeof DialogContent>;
  dialogTitle?: Flex__<typeof DialogTitle>;
  h5?: Flex__<"h5">;
  dialogClose?: Flex__<typeof DialogClose>;
  svg?: Flex__<"svg">;
};

export interface DefaultDialog2Props {
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
  body?: React.ReactNode;
  title?: React.ReactNode;
  trigger?: React.ReactNode;
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDialog2__RenderFunc(props: {
  variants: PlasmicDialog2__VariantsArgs;
  args: PlasmicDialog2__ArgsType;
  overrides: PlasmicDialog2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",

        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["dialog", "open"]).apply(
          null,
          eventArgs
        );
      }}
      open={generateStateValueProp($state, ["dialog", "open"])}
      overlayClassName={classNames({ [sty["pcls_uqjuuk3ALXwn"]]: true })}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <Button
                  children2={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__w71Km
                      )}
                    >
                      {"Show dialog"}
                    </div>
                  }
                  endIcon={
                    <Icon23Icon
                      className={classNames(projectcss.all, sty.svg__sKeDw)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <Icon22Icon
                      className={classNames(projectcss.all, sty.svg__lj2L4)}
                      role={"img"}
                    />
                  }
                />
              ),

              value: args.trigger
            })
          : null
      }
    >
      <DialogContent
        data-plasmic-name={"dialogContent"}
        data-plasmic-override={overrides.dialogContent}
        className={classNames("__wab_instance", sty.dialogContent)}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens,
          plasmic_fragment_design_system_css.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__iqt95)}
          dir={"rtl"}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(projectcss.all, projectcss.h5, sty.h5)}
            >
              {renderPlasmicSlot({
                defaultContents: "Dialog title",
                value: args.title,
                className: classNames(sty.slotTargetTitle)
              })}
            </h5>
          </DialogTitle>
        </Stack__>
        <div
          className={classNames(projectcss.all, sty.freeBox__zjtsb)}
          dir={"rtl"}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nibIh
                )}
              >
                {"You can insert dialog body content here in this slot."}
              </div>
            ),
            value: args.body
          })}
        </div>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        >
          <Icon24Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </DialogClose>
      </DialogContent>
    </Dialog>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dialog: [
    "dialog",
    "dialogContent",
    "dialogTitle",
    "h5",
    "dialogClose",
    "svg"
  ],
  dialogContent: ["dialogContent", "dialogTitle", "h5", "dialogClose", "svg"],
  dialogTitle: ["dialogTitle", "h5"],
  h5: ["h5"],
  dialogClose: ["dialogClose", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  dialog: typeof Dialog;
  dialogContent: typeof DialogContent;
  dialogTitle: typeof DialogTitle;
  h5: "h5";
  dialogClose: typeof DialogClose;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDialog2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDialog2__VariantsArgs;
    args?: PlasmicDialog2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDialog2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDialog2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDialog2__ArgProps,
          internalVariantPropNames: PlasmicDialog2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDialog2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDialog2";
  } else {
    func.displayName = `PlasmicDialog2.${nodeName}`;
  }
  return func;
}

export const PlasmicDialog2 = Object.assign(
  // Top-level PlasmicDialog2 renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    dialogContent: makeNodeComponent("dialogContent"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    h5: makeNodeComponent("h5"),
    dialogClose: makeNodeComponent("dialogClose"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicDialog2
    internalVariantProps: PlasmicDialog2__VariantProps,
    internalArgProps: PlasmicDialog2__ArgProps
  }
);

export default PlasmicDialog2;
/* prettier-ignore-end */
