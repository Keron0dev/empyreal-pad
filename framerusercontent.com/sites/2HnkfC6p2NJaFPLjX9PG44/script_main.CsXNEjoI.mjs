import { __esmMin as e } from "./rolldown-runtime.BAw5_7tg.mjs";
import {
  B as t,
  Ga as n,
  X as r,
  Z as i,
  d as a,
  init_client as o,
  init_npm_react_18_2 as s,
  init_npm_react_dom_18_2 as c,
  init_ssg_sandbox_shims as l,
  navigator as u,
  pe as d,
  r as f,
  te as p,
  ue as m,
  window as h,
  ye as g,
} from "./react.CRP1kpNG.mjs";
import {
  ErrorPlaceholder as _,
  GracefullyDegradingErrorBoundary as v,
  LibraryFeaturesProvider as y,
  PageEffectsProvider as b,
  PageRoot as x,
  inferInitialRouteFromPath as S,
  init_framer_GOWL5DJH as C,
  installFlexboxGapWorkaroundIfNeeded as w,
  lazy as T,
  markHydrationStart as E,
  patchRoutesForABTesting as D,
  removeHiddenBreakpointLayersV2 as O,
  turnOffReactEventHandling as k,
  useCurrentRoute as A,
  useLocaleInfo as j,
  useRouter as M,
  withPerformanceMarks as N,
  yieldToMain as P,
} from "./framer.CNr0M_-Y.mjs";
async function F({ routeId: e, pathVariables: i, localeId: a }) {
  let o = R[e].page.preload(),
    s = t(x, {
      isWebsite: !0,
      routeId: e,
      pathVariables: i,
      routes: R,
      collectionUtils: B,
      framerSiteId: V,
      notFoundPage: T(() => import(`./SitesNotFoundPage.js@1.4.sf8ozhlU.mjs`)),
      isReducedMotion: void 0,
      localeId: a,
      locales: z,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://empyrealsdk.com`,
      EditorBar:
        h === void 0
          ? void 0
          : (() => {
              let e =
                /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  u.userAgent
                );
              if (!e)
                return T(async () => {
                  let e = {
                    __version: 1,
                    framer: {
                      useCurrentRoute: A,
                      useLocaleInfo: j,
                      useRouter: M,
                    },
                    react: {
                      createElement: t,
                      memo: r,
                      useCallback: p,
                      useEffect: m,
                      useRef: d,
                      useState: g,
                    },
                    "react-dom": { createPortal: n },
                  };
                  h.__framer_editorBarDependencies = e;
                  let { createEditorBar: i } = await import(
                    `https://edit.framer.com/init.mjs`
                  );
                  return { default: i({ dependencies: e }) };
                });
            })(),
    }),
    c = t(y, {
      children: s,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        editorBarOnPageEditing: !1,
        editorBarSendEmails: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    l = t(v, { children: c }),
    f = t(b, { children: l, value: { routes: {} } });
  return await o, f;
}
function I() {
  H && h.__framer_events.push(arguments);
}
async function L(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || h.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        r
      );
    I(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
          ? e.stack
          : null,
      }
    );
  }
  try {
    let r, o, s, c;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      (r = e.routeId),
        (o = e.localeId),
        (s = e.pathVariables),
        (c = e.breakpoints),
        (r = D(R, r));
    } else {
      D(R, void 0);
      let e = S(R, decodeURIComponent(location.pathname), !0, z);
      (r = e.routeId), (o = e.localeId), (s = e.pathVariables);
    }
    let l = F({ routeId: r, localeId: o, pathVariables: s });
    h !== void 0 &&
      (async () => {
        let e = R[r],
          t = `default`,
          n = z.find(({ id: e }) => (o ? e === o : e === t)).code,
          i = null;
        if (e?.collectionId && B) {
          let t = await B[e.collectionId]?.(),
            [r] = Object.values(s);
          t &&
            typeof r == `string` &&
            (i = (await t.getRecordIdBySlug(r, n || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          c = a.timeZone,
          l = a.locale;
        await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          h.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: V ?? null,
              routePath: e?.path || `/`,
              collectionItemId: i,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: h.location.href,
              hostname: h.location.hostname || null,
              pathname: h.location.pathname || null,
              hash: h.location.hash || null,
              search: h.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await P({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: n || null },
            })
          );
      })();
    let u = await l;
    if (e) {
      N(`framer-rewrite-breakpoints`, () => {
        O(c), h.__framer_onRewriteBreakpoints?.(c);
      });
      let e = i;
      e(() => {
        E(), k(), a(t, u, { onRecoverableError: n });
      });
    } else f(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var R,
  z,
  B,
  V,
  H,
  U = e(() => {
    if (
      (l(),
      C(),
      s(),
      c(),
      o(),
      (R = {
        augiA20Il: {
          elements: {},
          page: T(() =>
            import(`./wDj1VIEzeqRv-F_vV701L8hhpKMMZDlklYqFUUF--CY.Dq6JTzem.mjs`)
          ),
          path: `/`,
        },
        p9OZ95O_k: {
          elements: {},
          page: T(() =>
            import(`./1ddcapUPqZwqZMZf9_ovh-LLJcBq-euLV10OOkvzt-4.Dn15aAUw.mjs`)
          ),
          path: `/whitepaper`,
        },
        nagQUYBWH: {
          elements: { NMXkVpiOZ: `grain-section`, SEevgY9gU: `team` },
          page: T(() =>
            import(`./3hoVLpzi-eWvXn6y-005amr-bHdvobCpLzbIErxHaYI.DyOaf93q.mjs`)
          ),
          path: `/about`,
        },
      }),
      (z = [{ code: `en-US`, id: `default`, name: `English`, slug: `` }]),
      (B = {}),
      (V = `7e6e116ed907280f9e510a4cea4728277b9e6b3eb58224aeda34a6af1b8963e2`),
      (H = typeof document < `u`),
      H)
    ) {
      (h.__framer_importFromPackage = (e, n) => () =>
        t(_, {
          error: `Package component not supported: "` + n + `" in "` + e + `"`,
        })),
        (h.process = {
          ...h.process,
          env: {
            ...(h.process ? h.process.env : void 0),
            NODE_ENV: `production`,
          },
        }),
        (h.__framer_events = h.__framer_events || []),
        w();
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? L(!0, e) : L(!1, e);
    }
  });
U();
export { F as getPageRoot };
//# sourceMappingURL=script_main.CsXNEjoI.mjs.map
