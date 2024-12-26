// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: afXULSfGYmou2jFpEc2QWJ
// Component: tqHTZfyBziuN

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

import { BaseRadioGroup } from "@plasmicpkgs/react-aria/skinny/registerRadioGroup";
import Label from "../../Label"; // plasmic-import: UFxHTEumlkK8/component
import Radio from "../../Radio"; // plasmic-import: Cbq_rTXOD16b/component
import Description from "../../Description"; // plasmic-import: BuU6Li81m0zv/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "../chortke/plasmic.module.css"; // plasmic-import: afXULSfGYmou2jFpEc2QWJ/projectcss
import sty from "./PlasmicRadioGroup.module.css"; // plasmic-import: tqHTZfyBziuN/css

createPlasmicElementProxy;

export type PlasmicRadioGroup__VariantMembers = {};
export type PlasmicRadioGroup__VariantsArgs = {};
type VariantPropType = keyof PlasmicRadioGroup__VariantsArgs;
export const PlasmicRadioGroup__VariantProps = new Array<VariantPropType>();

export type PlasmicRadioGroup__ArgsType = {
  defaultValue?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onChange?: (val: any) => void;
  label?: React.ReactNode;
  options?: React.ReactNode;
  description?: React.ReactNode;
};
type ArgPropType = keyof PlasmicRadioGroup__ArgsType;
export const PlasmicRadioGroup__ArgProps = new Array<ArgPropType>(
  "defaultValue",
  "showLabel",
  "showDescription",
  "disabled",
  "ariaLabel",
  "onChange",
  "label",
  "options",
  "description"
);

export type PlasmicRadioGroup__OverridesType = {
  ariaRadioGroup?: Flex__<typeof BaseRadioGroup>;
  label?: Flex__<typeof Label>;
  description?: Flex__<typeof Description>;
};

export interface DefaultRadioGroupProps {
  defaultValue?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onChange?: (val: any) => void;
  label?: React.ReactNode;
  options?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRadioGroup__RenderFunc(props: {
  variants: PlasmicRadioGroup__VariantsArgs;
  args: PlasmicRadioGroup__ArgsType;
  overrides: PlasmicRadioGroup__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showDescription: false
        },
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
        path: "ariaRadioGroup.value",
        type: "readonly",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],

        onChangeProp: "onChange"
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

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
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
    <BaseRadioGroup
      data-plasmic-name={"ariaRadioGroup"}
      data-plasmic-override={overrides.ariaRadioGroup}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        sty.ariaRadioGroup
      )}
      defaultValue={args.defaultValue}
      isDisabled={args.disabled}
      isReadOnly={$ccVariants["readonly"] ? true : undefined}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaRadioGroup", "value"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
      value={generateStateValueProp($state, ["ariaRadioGroup", "value"])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label)}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label
          })}
        </Label>
      ) : null}
      {renderPlasmicSlot({
        defaultContents: (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fqPdY)}
          >
            <Radio
              className={classNames("__wab_instance", sty.radio__dQc7P)}
              label={"Option 1"}
              value={"option1"}
            />

            <Radio
              className={classNames("__wab_instance", sty.radio__pFdzb)}
              label={"Option 2"}
              value={"option2"}
            />

            <Radio
              className={classNames("__wab_instance", sty.radio__iJ99)}
              label={"Option 3"}
              value={"option3"}
            />
          </Stack__>
        ),
        value: args.options
      })}
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: "Description...",
            value: args.description
          })}
        </Description>
      ) : null}
    </BaseRadioGroup>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaRadioGroup: ["ariaRadioGroup", "label", "description"],
  label: ["label"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaRadioGroup: typeof BaseRadioGroup;
  label: typeof Label;
  description: typeof Description;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRadioGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRadioGroup__VariantsArgs;
    args?: PlasmicRadioGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRadioGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRadioGroup__ArgsType,
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
          internalArgPropNames: PlasmicRadioGroup__ArgProps,
          internalVariantPropNames: PlasmicRadioGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRadioGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaRadioGroup") {
    func.displayName = "PlasmicRadioGroup";
  } else {
    func.displayName = `PlasmicRadioGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicRadioGroup = Object.assign(
  // Top-level PlasmicRadioGroup renders the root element
  makeNodeComponent("ariaRadioGroup"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicRadioGroup
    internalVariantProps: PlasmicRadioGroup__VariantProps,
    internalArgProps: PlasmicRadioGroup__ArgProps
  }
);

export default PlasmicRadioGroup;
/* prettier-ignore-end */
