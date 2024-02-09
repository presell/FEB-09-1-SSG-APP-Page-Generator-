// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b6i97iP59Y1TSpee6QTJVV
// Component: n_gyb_4zQY9w

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Advertorial from "../../Advertorial"; // plasmic-import: -YHF2p68e5Vr/component
import SqueezeVariant2 from "../../SqueezeVariant2"; // plasmic-import: IVtkQ4Gmae37/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_legacy_feed_page_designs_css from "../legacy_feed_page_designs/plasmic_legacy_feed_page_designs.module.css"; // plasmic-import: dMaiZmvKdpJ4pWYeCQn3zc/projectcss
import projectcss from "./plasmic_feb_09_1_ssg_app_page_generator.module.css"; // plasmic-import: b6i97iP59Y1TSpee6QTJVV/projectcss
import sty from "./PlasmicPageOverview.module.css"; // plasmic-import: n_gyb_4zQY9w/css

createPlasmicElementProxy;

export type PlasmicPageOverview__VariantMembers = {};
export type PlasmicPageOverview__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageOverview__VariantsArgs;
export const PlasmicPageOverview__VariantProps = new Array<VariantPropType>();

export type PlasmicPageOverview__ArgsType = {};
type ArgPropType = keyof PlasmicPageOverview__ArgsType;
export const PlasmicPageOverview__ArgProps = new Array<ArgPropType>();

export type PlasmicPageOverview__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  advertorial2?: Flex__<typeof Advertorial>;
  squeezeVariant2?: Flex__<typeof SqueezeVariant2>;
};

export interface DefaultPageOverviewProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageOverview__RenderFunc(props: {
  variants: PlasmicPageOverview__VariantsArgs;
  args: PlasmicPageOverview__ArgsType;
  overrides: PlasmicPageOverview__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "editPageId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.params.slug;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
              }
              throw e;
            }
          })()
      },
      {
        path: "advertorial2.articleParagraph24",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    page: usePlasmicDataOp(() => {
      return {
        sourceId: "jhyRJR71TBt7ca5EZWznEH",
        opId: "216aa8eb-b88d-4599-b4a9-9fe66b4d79c0",
        userArgs: {
          filters: [$state.editPageId]
        },
        cacheKey: `plasmic.$.216aa8eb-b88d-4599-b4a9-9fe66b4d79c0.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPageOverview.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPageOverview.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPageOverview.pageMetadata.title}
        />
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
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            plasmic_legacy_feed_page_designs_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {(() => {
              try {
                return $queries.page.data[0].page_type == "advertorial";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <Advertorial
                data-plasmic-name={"advertorial2"}
                data-plasmic-override={overrides.advertorial2}
                articleParagraph24={generateStateValueProp($state, [
                  "advertorial2",
                  "articleParagraph24"
                ])}
                className={classNames("__wab_instance", sty.advertorial2)}
                editable={"false"}
                onArticleParagraph24Change={generateStateOnChangeProp($state, [
                  "advertorial2",
                  "articleParagraph24"
                ])}
                pageId={$ctx.params.slug}
              />
            ) : null}
            {(() => {
              try {
                return $queries.page.data[0].page_type == "squeeze";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <SqueezeVariant2
                data-plasmic-name={"squeezeVariant2"}
                data-plasmic-override={overrides.squeezeVariant2}
                className={classNames("__wab_instance", sty.squeezeVariant2)}
                editable={"false"}
                pageId={(() => {
                  try {
                    return $ctx.params.slug;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "advertorial2", "squeezeVariant2"],
  freeBox: ["freeBox", "advertorial2", "squeezeVariant2"],
  advertorial2: ["advertorial2"],
  squeezeVariant2: ["squeezeVariant2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  advertorial2: typeof Advertorial;
  squeezeVariant2: typeof SqueezeVariant2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageOverview__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageOverview__VariantsArgs;
    args?: PlasmicPageOverview__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageOverview__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageOverview__ArgsType,
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
          internalArgPropNames: PlasmicPageOverview__ArgProps,
          internalVariantPropNames: PlasmicPageOverview__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageOverview__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageOverview";
  } else {
    func.displayName = `PlasmicPageOverview.${nodeName}`;
  }
  return func;
}

export const PlasmicPageOverview = Object.assign(
  // Top-level PlasmicPageOverview renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    advertorial2: makeNodeComponent("advertorial2"),
    squeezeVariant2: makeNodeComponent("squeezeVariant2"),

    // Metadata about props expected for PlasmicPageOverview
    internalVariantProps: PlasmicPageOverview__VariantProps,
    internalArgProps: PlasmicPageOverview__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Page Overview",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPageOverview;
/* prettier-ignore-end */
