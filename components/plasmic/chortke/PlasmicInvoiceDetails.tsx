// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: afXULSfGYmou2jFpEc2QWJ
// Component: FYVyu1h3mPQf

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

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: afXULSfGYmou2jFpEc2QWJ/projectcss
import sty from "./PlasmicInvoiceDetails.module.css"; // plasmic-import: FYVyu1h3mPQf/css

createPlasmicElementProxy;

export type PlasmicInvoiceDetails__VariantMembers = {};
export type PlasmicInvoiceDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicInvoiceDetails__VariantsArgs;
export const PlasmicInvoiceDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicInvoiceDetails__ArgsType = {
  invoiceDetails?: any;
};
type ArgPropType = keyof PlasmicInvoiceDetails__ArgsType;
export const PlasmicInvoiceDetails__ArgProps = new Array<ArgPropType>(
  "invoiceDetails"
);

export type PlasmicInvoiceDetails__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultInvoiceDetailsProps {
  invoiceDetails?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInvoiceDetails__RenderFunc(props: {
  variants: PlasmicInvoiceDetails__VariantsArgs;
  args: PlasmicInvoiceDetails__ArgsType;
  overrides: PlasmicInvoiceDetails__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          invoiceDetails: {
            status: true,
            message:
              "\u062c\u0632\u0626\u06cc\u0627\u062a \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628",
            data: {
              invoiceid: 197,
              userid: "15594550",
              status: "registered",
              type: "purchase",
              discountpercent: 0,
              vatpercent: 0,
              title:
                "\u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0645\u0634\u0627\u0648\u0631\u0647 \u0622\u0646\u0644\u0627\u06cc\u0646",
              description:
                "\u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0633\u0627\u0645\u0627\u0646",
              sumprice: 15000,
              discountprice: 0,
              vatprice: 0,
              finalprice: 15000,
              registerdate: "2024-07-28",
              services: [
                {
                  service:
                    "\u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0633\u0627\u0645\u0627\u0646",
                  count: 1,
                  price: "15000"
                }
              ],
              meta: {
                ResNum: "e40a83d2-d5f6-4c52-83ab-fdde1bdad009",
                samantoken: "8fc9e787e0c548e58e4896c17d0aa475",
                returnlink: "https://paziresh24.com/"
              }
            }
          }
        },
        props.args
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
        plasmic_fragment_design_system_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      dir={"rtl"}
    >
      <div className={classNames(projectcss.all, sty.freeBox__tgQrp)}>
        <div className={classNames(projectcss.all, sty.freeBox__az5V8)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__d3Cm6
            )}
          >
            {"\u0639\u0646\u0648\u0627\u0646:"}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___9HUjv)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__s3Bc
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.invoiceDetails.data.title;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "\u0647\u0632\u06cc\u0646\u0647 \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628 \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__vYu08)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fWm4C
            )}
          >
            {"\u062a\u0627\u0631\u06cc\u062e:"}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__gy31H)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r2B3
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (() => {
                    const gregorianDate = new Date(
                      $props.invoiceDetails.data.registerdate
                    );
                    const persianDate = new Intl.DateTimeFormat("fa-IR").format(
                      gregorianDate
                    );
                    return persianDate;
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "1403/02/08";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInvoiceDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInvoiceDetails__VariantsArgs;
    args?: PlasmicInvoiceDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInvoiceDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInvoiceDetails__ArgsType,
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
          internalArgPropNames: PlasmicInvoiceDetails__ArgProps,
          internalVariantPropNames: PlasmicInvoiceDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInvoiceDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvoiceDetails";
  } else {
    func.displayName = `PlasmicInvoiceDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicInvoiceDetails = Object.assign(
  // Top-level PlasmicInvoiceDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicInvoiceDetails
    internalVariantProps: PlasmicInvoiceDetails__VariantProps,
    internalArgProps: PlasmicInvoiceDetails__ArgProps
  }
);

export default PlasmicInvoiceDetails;
/* prettier-ignore-end */