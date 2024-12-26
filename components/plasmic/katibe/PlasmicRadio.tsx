// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: afXULSfGYmou2jFpEc2QWJ
// Component: Cbq_rTXOD16b

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

import { BaseRadio } from "@plasmicpkgs/react-aria/skinny/registerRadio";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "../chortke/plasmic.module.css"; // plasmic-import: afXULSfGYmou2jFpEc2QWJ/projectcss
import sty from "./PlasmicRadio.module.css"; // plasmic-import: Cbq_rTXOD16b/css

createPlasmicElementProxy;

export type PlasmicRadio__VariantMembers = {};
export type PlasmicRadio__VariantsArgs = {};
type VariantPropType = keyof PlasmicRadio__VariantsArgs;
export const PlasmicRadio__VariantProps = new Array<VariantPropType>();

export type PlasmicRadio__ArgsType = {
  value?: string;
  label?: React.ReactNode;
  autoFocus?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
};
type ArgPropType = keyof PlasmicRadio__ArgsType;
export const PlasmicRadio__ArgProps = new Array<ArgPropType>(
  "value",
  "label",
  "autoFocus",
  "disabled",
  "ariaLabel"
);

export type PlasmicRadio__OverridesType = {
  ariaRadio?: Flex__<typeof BaseRadio>;
};

export interface DefaultRadioProps {
  value?: string;
  label?: React.ReactNode;
  autoFocus?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRadio__RenderFunc(props: {
  variants: PlasmicRadio__VariantsArgs;
  args: PlasmicRadio__ArgsType;
  overrides: PlasmicRadio__OverridesType;
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

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    selected: false,
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    disabled: false,
    readonly: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseRadio
      data-plasmic-name={"ariaRadio"}
      data-plasmic-override={overrides.ariaRadio}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        sty.ariaRadio
      )}
      isDisabled={args.disabled}
      plasmicUpdateVariant={updateVariant}
      value={args.value}
    >
      <div className={classNames(projectcss.all, sty.freeBox__dX9Ql)}>
        <div className={classNames(projectcss.all, sty.freeBox__kCsv5)} />
      </div>
      {renderPlasmicSlot({
        defaultContents: "Option",
        value: args.label
      })}
    </BaseRadio>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaRadio: ["ariaRadio"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaRadio: typeof BaseRadio;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRadio__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRadio__VariantsArgs;
    args?: PlasmicRadio__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRadio__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRadio__ArgsType,
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
          internalArgPropNames: PlasmicRadio__ArgProps,
          internalVariantPropNames: PlasmicRadio__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRadio__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaRadio") {
    func.displayName = "PlasmicRadio";
  } else {
    func.displayName = `PlasmicRadio.${nodeName}`;
  }
  return func;
}

export const PlasmicRadio = Object.assign(
  // Top-level PlasmicRadio renders the root element
  makeNodeComponent("ariaRadio"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRadio
    internalVariantProps: PlasmicRadio__VariantProps,
    internalArgProps: PlasmicRadio__ArgProps
  }
);

export default PlasmicRadio;
/* prettier-ignore-end */